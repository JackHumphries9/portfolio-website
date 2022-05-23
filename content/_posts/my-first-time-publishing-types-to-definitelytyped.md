---
title: "My First Time Publishing Typings to DefinitelyTyped"
excerpt: "If you've ever used Typescript you'll have probably come across this situation. You want to use a package from NPM, do npm install <your-package> and installed it then VSCode starts kicking off about not having a type declaration file. Luckily, Microsoft have your back with DefinitelyTyped"
coverImage: "/images/default.jpg"
date: "2022-05-04T19:38:21.167Z"
ogImage:
    url: "/images/default.jpg"
minsRead: 4
---

If you've ever used Typescript you'll have probably come across this situation. You want to use a package from NPM, do `npm install <your-package>` and installed it then VSCode starts kicking off about not having a type declaration file. Luckily, Microsoft have your back with DefinitelyTyped. Now, you do `npm install @types/<your-package>` to find a type declaration by DefinitelyTyped. But then starts kicking off because it can't find it. That's it, game over, time to throw Typescript in the bin and create a global file with `declare module <your-package>`.

I was recently in this predicament. With University we were creating a web application and I needed some profanity filtering. That is where I stumbled across a great little library called [leo-profanity](https://www.npmjs.com/package/leo-profanity). It fit my use case completely except it didn't have types. So I did the classic `declare module "leo-profanity"`. This was fine and it worked well for my use case.

However, after I had done this project it stuck with me and I was intrigued on how difficult it was to add types. To my surprise it is fairly simple and this article aims to explain how I did it.

### Preparation

To begin I did a big of Googling like I always do starting any project. First, I forked the DefinitelyTyped repository and cloned it to my machine. This took ages as there's like 700mb+ of files. I then discovered a CLI that allows you to generate the code required to create types. So I used it. I typed: `npx dts-gen --dt --name leo-profanity --template module` into the terminal at the root of the repo and it generated the required files. It generated these files:

-   index.d.ts
-   leo_profanity.tests.ts
-   tsconfig.json
-   tslint.json

<br/>

### Creating the Types

Really, the only two files I am interested in are the `index.d.ts` where my types will go and `leo_profanity.tests.ts` which is where the tests will go. Because leo-profanity is quite a simple module and only has a couple of methods, I fairly quickly wrote the types up. It is just like writing normal types for anything in Typescript. There is some other stuff too which I accidentally included but didn't need to for the global modules but that was resolved later. Here are the final types:

```typescript
// Type definitions for leo-profanity 1.5
// Project: https://github.com/jojoee/leo-profanity
// Definitions by: Jack Humphries <https://github.com/jackhumphries9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function loadDictionary(lang: "en" | "fr"): void;
export function list(): string[];
export function check(text: string): boolean;
export function clean(text: string, replaceKey?: string): string;
export function add(word: string | string[]): void;
export function remove(word: string | string[]): void;
export function reset(): void;
export function clearList(): void;
```

Originally, I was quite confused at the tests part as I wasn't sure what was happening. But after some more Googling, I figured out that they were just tests to make sure that the types where the correct data type. It doesn't actually run the code but just checks it out to make sure everything works.

After writing some tests and completing the code, I had to do `npm test` and other test commands to make sure my types were good and everything adhered to the standard set by DefinitelyTyped. Everything passed first time and I was pretty impressed at how elegant it all was. Next, I had to push my code to GitHub and create a pull request. A person from DefinitelyTyped checked over my code at this point and she found some issues. The global module declaration I mentioned before was incorrect. After rectifying the issue and committing a fixed version, my code was merged and the bot added a package to NPM with my types (which you can check out [here](https://www.npmjs.com/package/@types/leo-profanity)).

I had a bit of a panic moment though because when I added the types to my University project, VSCode didn't pick them up and I though I had done something wrong. After about half an hour, I realised I needed to refresh VSCode and that solved the problem.

### Summary

In conclusion, creating DefinitelyTyped types is really easy and a really great start to open source programming. It is quite simple to do and it really helps out those small packages that don't have types. After doing all this, I realised that leo-profanity had a Typescript version in development but it seemed pretty inactive but I still think this is a better solution. I also used [this](https://levelup.gitconnected.com/publishing-typings-to-definitelytyped-d4e0777e40f5) article as it really helped out a lot in showing the steps to create types. But I would highly recommend adding types to packages or just building stuff in Typescript.
