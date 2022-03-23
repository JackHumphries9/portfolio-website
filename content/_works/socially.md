---
title: "Socially"
excerpt: "Socially is a desktop application which combines all social media direct messages into one window. The idea is quite common now with and other software but my design is sleek and compact."
coverImage: "/images/works/socially-cover.png"
date: "2020-03-16T05:35:07.322Z"

ogImage:
    url: "/images/works/socially-cover.png"
---

Socially is a desktop application which combines all social media direct messages into one window. The idea is quite common now with [OperaGX](https://blogs.opera.com/desktop/2020/05/opera-gx-instagram-workspaces/) and other software but my design is sleek and compact.

A while ago, I discovered a technology called [Electron](https://electronjs.org). I was fascinated as I had always wanted to make beautiful desktop applications. Most graphical user interface toolkits were difficult to learn and very tedious. Not to mention they use the default themes. I began trying to teach myself Electron but I struggled as I didn't have much knowledge of NodeJS and JavaScript at the time.

There is an app on the Windows Store called [ChatDock](https://chatdock.org/). I saw it in an advert and I have loved using it as it is just concise and works for the purpose. However, I have had a few problems with it. The application was very slow and took up nearly a gigabyte of RAM while running. Also, the app felt quite jittery and the user interface felt quite slow. Another reason was that WhatsApp began to stop functioning as the browser the developers have used wasn't up to date. I wanted to fix these but the application didn't appear to be open source. I then took it upon myself to create this app myself.

The initial premise of the app is quite simple; get loads of web browser views and give each one a link to the social media. In Electron there are a few ways to do this. I initially tried using a BrowserView in the backend main process but that just seemed to be complicated. I then discovered the WebView tag which you can use as a standard HTML tag. Even though Electron doesn't recommend using them at the moment due to them updating the architecture around them, I thought it would still be suitable for this project.

After adding a few buttons, a setup menu, and a settings menu, the application was ready and I began building it using electron-builder for all platforms. This was version 0.5.

After this build, I began rewriting the JavaScript code to be more efficient and to improve the overall experience of the application.

Then, after many mistakes over the years and many learning curves, I've rewritten the app in React and I am currently rewriting it in Typescript.

Check out the website for Socially [here](https://getsocially.app). The project is also open source and the code is available on [here](https://github.com/JackHumphries9/socially).
