---
title: "A New Contender! Tauri VS Electron"
excerpt: "If your a member of the JavaScript community, Rust community or possibly any other community you may have heard about a brand new disruptor to desktop application game. It's a toolkit called Tauri and it lets you build desktop apps with web technologies and web stacks"
coverImage: "/images/blog/a-new-contender-tauri-vs-electron-cover.png"
date: "2022-06-06T14:55:58.624Z"
ogImage:
    url: "/images/blog/a-new-contender-tauri-vs-electron-cover.png"
minsRead: 4
---

If your a member of the JavaScript community, Rust community or possibly any other community you may have heard about a brand new disruptor to desktop application game. It's a toolkit called Tauri and it lets you build desktop apps with web technologies and web stacks.

### A Brief History

Desktop applications have always existed as long as there has been a graphical user environment they have existed. The most classical way to create a desktop application has been by using the system libraries that are exposed by the operating system or desktop environment. For MacOS, Windows and Linux, these are all different so making a cross-platform app wasn't a good experience as all apps had to either create a wrapper round the system libraries or just build three different apps. This was until libraries like [Qt](https://www.qt.io) and [wxWidgets](https://www.wxwidgets.org) wrapped these libraries and allowed you to develop cross-platform desktop applications.

![Native Calculator App](/images/blog/a-new-contender-tauri-vs-electron-1.png)_A screenshot of a simple app I made years ago using Tkinter. Check out the [source](https://github.com/JackHumphries9/formula-calculator) here._

So these libraries allowed desktop apps to only just have one codebase. But here's the thing, this brand new thing called the web has taken off and some of the websites created are stunning whereas these libraries make really ugly native looking apps. What if I have a web app and I want to make it available on the desktop? What if I want my app to have a consistent theme across all devices? The advantages of making a web app heavily outweighed building a desktop app too. Well, this is where a new tool emerges.

Electron is a framework that allows you to write your code as a webpage and then distribute it as a standalone application. It bundles Chromium with it so that it can render your webpage. Essentially it's a headless (as in no browser controls and things) web browser which includes your web app. So this completely revolutionised the desktop app space. [WhatsApp](https://www.whatsapp.com), [Twitch](https://www.twitch.tv), [Teams](https://www.microsoft.com/en-gb/microsoft-teams/group-chat-software) were all ported to use Electron with some amazing new apps such as [Figma](https://www.figma.com) and the tool I'm using to write this article, [Visual Studio Code](https://code.visualstudio.com). It allows some amazing apps to be made with the power of the web.

This sounds too good to be true right? Correct. Electron has some draw backs. As Electron uses Chromium, it means that it absolutely eats all your memory up. You'll know this if you've ever used Google Chrome and had a couple of tabs open. As it also bundles Chromium it means that the app size is massive too. I installed VSCode on a Windows 11 VM and the setup needed 271.1 megabytes of space to install. The actual installation was only 72.5 megabytes. With three tabs open it took up around 450 megabytes of RAM. This is absurd!

![Task Manager](/images/blog/a-new-contender-tauri-vs-electron-2.png)_A screenshot of task manager with Visual Studio Code open with three empty text tabs open._

Enter [Tauri](https://tauri.studio), a brand new framework written to eliminate this issue and make developing desktop apps. According to the website, a Tauri app can be as little as 600 kilobytes. So how does it do this? Tauri takes advantage of a brand new technology called [WebView2](https://docs.microsoft.com/en-us/microsoft-edge/webview2/) on Windows or the native webview found on all operating systems. This means that it doesn't have to bundle a web browser or in fact a rendering engine with the app. It uses the default OS one. It also uses a Rust backend compared to a NodeJS one. This makes it more secure and more performant.

Tauri also includes a builder so you get an executable at the end of it. With Electron you had to use solutions like [Electron Builder](https://www.electron.build) and [Electron Forge](https://www.electronforge.io). Each with their own way of configuring them. (If you love Webpack and configuring stuff you'd love them). With Tauri it comes with it's own compiler and you can build your app with ease.

Tauri also comes with an API exposed so you can do application level stuff like minimizing and maximising the window from the JavaScript in the web app. With Electron, it does kind off have this feature however its been deprecated and is not recommended. Instead, you have to use IPC to send and receive messaged to do functions like that. Tauri allows you to also disable these API's so that it reduces the dependencies and also reduced the security risk in your application. However, there isn't many of these API's at the moment and I don't believe there's an easy way to send and receive messages between the processes yet.

### The Verdict

In my opinion, I would highly recommend Tauri if your app doesn't require many obscure system API's and is mainly a web app port to a desktop app. That being said, I could see Tauri being used for some apps that maybe require system API's maybe like a file manager. Electron is still a good option too as at the time of writing this, Tauri is a release candidate.

I am thinking of porting [Socially](https://getsocially.app) to Tauri as Electron is a pain to work with in that scale. However, as of yet, Tauri doesn't support embedding more WebViews into your app like the `<webview>` tags in Electron. I may have to come up with a work around to render a webview on top of it but I'm not too sure yet.

So in conclusion, I would highly recommend you to checkout Tauri and see if it works for you. I can't wait to see what the Tauri team can achieve.
