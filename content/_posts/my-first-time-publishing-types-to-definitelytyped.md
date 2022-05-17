---
title: "My First Time Publishing Typings to DefinitelyTyped"
excerpt: "If you've ever used Typescript you'll have probably come across this situation. You want to use a package from NPM, do npm install <your-package> and installed it then VSCode starts kicking off about not having a type declaration file. Luckily, Microsoft have your back with DefinitelyTyped."
coverImage: "/images/default.jpg"
date: "2022-05-04T19:38:21.167Z"
ogImage:
    url: "/images/default.jpg"
---

If you've ever used Typescript you'll have probably come across this situation. You want to use a package from NPM, do `npm install <your-package>` and installed it then VSCode starts kicking off about not having a type declaration file. Luckily, Microsoft have your back with DefinitelyTyped. Now, you do `npm install @types/<your-package>` to find a type declaration by DefinitelyTyped. But then starts kicking off because it can't find it. That's it, game over, time to throw Typescript in the bin and create a global file with `declare module <your-package>`.

I was recently in this predicament. With University we were creating a web application and I needed some profanity filtering. That is where I stumbled across a great little library called [leo-profanity](https://www.npmjs.com/package/leo-profanity). It fit my use case completely except it didn't have types. So I did the classic `declare module "leo-profanity"`. This was fine and it worked well for my use case.

However, after I had done this project it stuck with me and I was intrigued on how difficult it was to add types. To my surprise it is fairly simple and this article aims to explain how I did it.
