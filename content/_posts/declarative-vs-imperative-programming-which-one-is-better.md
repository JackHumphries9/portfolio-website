---
title: "Declarative VS Imperative Programming - Which one is better?"
excerpt: "Recently, I've had a revelation. It has completely changed my perspective on code and software development. I've been coding for over eight years now and this has to be the biggest perspective shift I've experienced"
coverImage: "/images/default.jpg"
date: "2022-03-30T21:54:50.000Z"
ogImage:
    url: "/images/default.jpg"
minsRead: 5
---

Recently, I've had a revelation. It has completely changed my perspective on code and software development. I've been coding for over eight years now and this has to be the biggest perspective shift I've experienced. I have heard this statement going around where code was compared to literature, more specifically a poem. At first, I brushed this off thinking not much of it. But now I understand why.

So what is this revelation, your probably asking? Well, it's that code can be arranged in many different ways. To be more specific, you can write your program declaratively or imperatively. For some of you, this may seem obvious and I realise now how obvious it is but during my time coding, I've never really thought about program structure. I've always focused on making the program work and then the job is done. Going back to the literature analogy, I've always focused on the actual story rather than conveying it to the reader.

With the way I've learnt to code, this was obviously an issue. I've basically taught myself most things using YouTube and a variety of other sources. This has forced me to learn from many different sources and have conflicting views on how to write code.

So whats the deal with declarative and imperative programming? Well, I've always (or most of the time) written code in an imperative way. This is due to the reason I've mentioned above and also I've had this fear or overcomplicating the code instead it slows down ever so slightly. A perfect example is the first build of [Socially](/works/socially). If you go back and look at [Version 0.5](https://github.com/JackHumphries9/Socially/tree/legacy), the actual frontend code is all in one html file (specifically, [this](https://github.com/JackHumphries9/Socially/blob/legacy/index.html) file). This is just a high level example but below is the actual

### The difference between Imperative and Declarative

In terms of actual instructions and how both concepts work, here is an idea. Lets take the example of making a cake. If I tell you the instructions im basically going into each detail. So, I'm basically going to say:

1. Get in your car
2. Turn on the ignition
3. Drive to the supermarket
4. Go to the flower isle
5. Pick up the flower
   <br/>... and so on

This is an imperative approach. I'm assuming you have no knowledge of how to go to the supermarket. (I think the phrase is "as if your describing it to an alien").

A declarative approach would be something like:

1. Get butter, caster sugar, eggs, milk (I don't know what ingredients you put in a cake)
2. Heat the oven (180°C).
   <br/>... and so on

So, in a declarative approach, I'm assuming you know how to go to the shop and heat the oven up.

The best way for the instructions to be written would be to use the best of both worlds. I'd take the things that you already know and esencially fill in the gaps.

This methodology can be applied to code. Writing programs which are both very compartmentalised but also have parts which are not completely abstract is the best way to write code. It also helps you test certain aspects of the code easily just by calling the function.

For an actual coded example, here is what I mean. Here is a simple maths quiz game which asks the user ten addition questions.

In an imperative way, here is the code:

```python
from random import randint

def main():
  print("Maths Quiz!")
  print("===========")

  score = 0
  num_of_questions = 5

  for i in range(num_of_questions):
    print("Question {0}:".format(i+1))

    num1, num2 = randint(1, 20), randint(1, 20)

    print("What is {0} + {1}".format(num1, num2))

    answer = float(input("> "))

    if answer == (num1 + num2):
      print("Correct!")
      score += 1
    else:
      print("Incorrect!")

    print("")

  print("You scored {0} out of {1}".format(score, num_of_questions))

  exit()

main()
```

As you can see it's kind of hard to follow. Code could potentially be copied and pasted if a round system was introduced (so like one round was addition the next was subtraction and so on).

Here would be a declarative approach:

```python
from random import randint

def intro_message():
    print("Maths Quiz!")
    print("===========")

def end_message(score, num_of_questions):
    print("You scored {0} out of {1}".format(score, num_of_questions))


def askQuestion(question_number):
    num1, num2 = randint(1, 20), randint(1, 20)

    print("Question {0}:".format(question_number))

    num1, num2 = randint(1, 20), randint(1, 20)

    print("What is {0} + {1}".format(num1, num2))

    answer = float(input("> "))

    if answer == (num1 + num2):
        return True
    else:
        return False

def main():
    intro_message()

    score = 0
    num_of_questions = 5

    for i in range(num_of_questions):
        if askQuestion(i+1):
            score += 1
            print("Correct!")
        else:
            print("Incorrect!")

        print("")

    end_message(score, num_of_questions)

main()
```

While this approach has slightly more lines of code, it is a lot more readable and tracing through the program is a lot easier. If there is an issue with a question, the code is contained inside the `askQuestion()` function. An object orientated approach would also probably mean less lines and it would look a lot better.

In summary, this discovery has helped me write more concise and better code that reads a lot better and also is easy to debug and test. I hope this has helped you to discover the different ways of writing code.
