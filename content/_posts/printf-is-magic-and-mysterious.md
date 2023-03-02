---
title: "Printf is Magic and Mysterious"
excerpt: "So I’m over half way through second year and the topics we’re doing this semester are really interesting. From C++ and graphics programming to high level Software Development Processes, we’re doing it all."
coverImage: "/images/default.jpg"
date: "2023-03-02T15:38:06.137Z"
ogImage:
    url: "/images/default.jpg"
---

So I’m over half way through second year and the topics we’re doing this semester are really interesting. From C++ and graphics programming to high level Software Development Processes, we’re doing it all. But one thing we are doing is delving into the wonderful and wacky world of Linux and C in the operating systems unit. The lectures cover a high level approach to how operating systems work and the labs explain certain system calls. It’s really interesting and I’m finding it great.

Recently we’ve been investigating processes and in particular using the `fork()` system call to fork a process. Also, we’ve just done IPC (inter-process communication) using unidirectional pipes. It is absolutely fascinating for understanding how programs work. One such example is how Google Chrome may fork new processes for each tab (I’m sure there’s much more to it than just forking processes but I can appreciate the technology more).

Me and a colleague today were messing about with bidirectional communication with two pipes, passing messages backwards and forwards between processes. But here’s where we discovered something. Something that I had no idea was a thing until many Google searches of research. The code we were writing was very primitive. It was just printing a message at the start of each process after the fork, then doing the IPC reading and writing and then writing the buffer to the screen. Heres the code we were using:

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
  int fd1[2], fd2[2], n;

  char buffer[100];

  pid_t p;

  pipe(fd1);
  pipe(fd2);

  p = fork();

  if (p > 0) {
    // Parent process
    printf("Parent Process\n");

    write(fd1[1], "parent\n", 7);

    wait(NULL);

    n = read(fd2[0], buffer, 100);

    write(1, buffer, 100);

    close(fd2[0]);
    close(fd2[1]);

  } else {
    // Child process
    printf("Child process\n");

    n = read(fd1[0], buffer, 100);

    write(1, buffer, n);

    write(fd2[1], "child\n", 6);

    close(fd1[0]);
    close(fd1[1]);
  }
}

```

Now the code was waiting until the child process had finished executing so that it could receive the data from the pipe to write it to standard out. I was attempting to demonstrate to my colleague that it was in fact waiting and then writing the buffer to the screen and so I added a `printf()` statement to show the code was indeed halting execution when something bizarre happened. See if you can figure it out.

```c
int main(){
    ...
    if (p > 0) {
        ...
        wait(NULL);

        printf("Back to parent process");

        n = read(fd2[0], buffer, 100);

        write(1, buffer, 100);

        ...
    }
    ...
}
```

```text
Parent Process
Child process
parent
child
Back to parent process%
```

Even though the print is happening before the write, the print ends up being the last thing in standard out. This absolutely bamboozled us. We have no clue what was happening. We were confused whether the forking was having an affect with the flow of execution.

Turns out it was to do with the `printf()` function. According to some research we did, we realised that `printf()` stores a buffer of whatever you pass into it and flushes it (basically writes it to standard out) when there’s a new line (`\n` character). At least that’s what we think it does. There could be more characters that cause a flush (maybe a carriage return or paragraph break but it’s worth some extra research).

This got us thinking about why this is happening. What benefit does flushing after a new line have compared to making system calls for every print? My hypothesis is as follows; `printf()` is optimised to make as little system calls as possible because system calls can take a while to execute.

I decided to test this theory. I wrote two applications which do the same thing. Effectively, there’s a string and a loop. The loop iterates over every character and prints out each character. Obviously, if `printf()` is buffering the string, it should make it quicker than just straight up doing a `write()`. So here’s the test code:

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main() {
  char source[] = "some text here";

  int len = strlen(source);
  for (int i = 0; i < len; i++) {
    printf("%c", source[i]); // write(1, &source[i], 1);
  }

  printf("\n");
}
```

For the write version I just replaced the `printf()` with a `write()` call. As per my hypothesis, I wanted to see if the `printf()` version was faster. I ran the code 100 times and got the average time for each. I also, wanted to try with different sizes for the text. The tests were run on a Digital Ocean Droplet running Ubuntu Server 22.10 with 1GB of RAM and 1 CPU. The results were as follows:
