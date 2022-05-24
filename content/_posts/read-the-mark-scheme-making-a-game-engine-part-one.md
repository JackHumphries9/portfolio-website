---
title: "Read the Mark Scheme! - Making a Game Engine Part One"
excerpt: "Well, after eight months of studying, I've finally finished my first year of university and I feel relieved! It has been enjoyable adjusting to this new way of working and learning. It's pretty exhausting balancing Tinder dates and studying"
coverImage: "/images/blog/read-the-mark-scheme-making-a-game-engine-part-one-cover.png"
date: "2022-05-23T21:53:44.006Z"
ogImage:
    url: "/images/blog/read-the-mark-scheme-making-a-game-engine-part-one-cover.png"
minsRead: 6
---

Well, after eight months of studying, I've finally finished my first year of university and I feel relieved! It has been enjoyable adjusting to this new way of working and learning. It's pretty exhausting balancing Tinder dates and studying. But seriously though, I have done loads of work this year and it feels good to finally have some time to work on personal projects. Doing all these assignments has taught me quite a lot. One of the biggest lessons I've learnt is to read the mark scheme on an assignment.

At the beginning of the year, we started with two consecutive Programming units, Programming One and Programming Two. In Programming One, it was mainly about learning the fundamentals of programming, which is something I found quite easy. We used Java and a library called [Processing](https://processing.org). In case you don't know what Processing is it's a library which allows you to draw graphics with simple methods and functions. It comes with its own IDE, which is similar to the Arduino IDE. It's meant to be a sketching tool but I absolutely despise it. It doesn't have intellisense or any sort of good file management system.

![Processing IDE](/images/blog/read-the-mark-scheme-making-a-game-engine-part-one1.png)

Programming One contained lots of assignments which were based on graphics and making small games. These were good and I was graded 82 percent overall these portfolio exercises. After this, we had Programming Two. Now, Programming Two was much different. We started using proper Java and using proper IDE's finally. We were using Eclipse and we explored many advanced concepts such as abstract classes, inheritance, polymorphism and practical stuff like making GUI applications.

The final project for this was to make a fully fledged game with all the skills from both units. However, we had to make the game in the Processing IDE. I was not looking forward to having to manually type the parenthesis at the end of a method call but I had a solution. Because Processing is technically a Java library, you can import it into Eclipse and use it as-is. I asked if I could just submit an Eclipse project but I was told just to stick with Processing. So, I have two options, use Processing and completely have a mental breakdown or use Eclipse and kind of transpile my code back to Processing code (there are slight differences with how you call methods. For example, in Eclipse you would need to reference the `PApplet` so your code would look like `papp.line(50, 50, 100, 100)` instead of `line(50, 50, 100, 100)`).

I opted for the second one and began to get to work. Now, with this game it was meant to be like a defenders game like Space Invaders. In the beginning, I had no idea what theme I wanted to follow but I had a look around on [opengameart.org](https://opengameart.org) and found some really good space sprites and textures. The way Processing works is it's very imperative in the sense that it just draw shapes. You have to manage these shapes by writing abstractions on top of this. As part of the assignment, we did need to use classes and demonstrate some of the advanced class concepts. So, naturally I ended up building my own game engine on top of Processing.

I'm vaguely familiar with the Unity game engine as I have messed about with it for numerous years so I had a kind of structure of what to code in place. I knew I needed away to manage shapes and sprites into groups and then separate these groups into collections of what to show at one time. So I kind of invented a whole game system. `GameObjects` would be instantiated and added to a `Scene` object. These scenes would then be added to a `SceneManager` which would then be instantiated inside the `Game`.

![Processing IDE](/images/blog/read-the-mark-scheme-making-a-game-engine-part-one2.png)

There were many abstract classes and many different templates which were used to make coding this game a lot easier. For example, the GameObject class had two abstract methods. The constructor, which would run on start, and a `render()` method.

```java
public class Square extends GameObject {
	int colourFill=this.papp.color(255);
    int colourStroke=this.papp.color(255);

	public Square(PApplet papp, float x, float y, float size) {
		super(papp, x, y, size);
	}

	// Render the square
	@Override
	public void render() {
		this.papp.fill(this.colourFill);
		this.papp.stroke(this.colourStroke);
		this.papp.rect(this.x, this.y, this.size, this.size);
	} // Some start code
}
```

A few quirks to this method of this design though, because an instance of `PApplet` was required to call the different methods, I had to pass through a reference all the way from the Game class down to the GameObject. Also, I had to pass references of the SceneManager to the Scenes to be able to perform scene switching. The advantage of all this is the fact that very little code is required to manage and update the different elements of the game. There is also a UI library that I built which allows for buttons and text. These elements are not GameObjects and required a separate class to render them.

There is also an event system which will feed events through and using `instanceof` to check for the event then an if to determine what type of that event. There are even more features too but I would be here all day.

I've done all this work and the game has taken shape. It's really playable and stable all the features I had planned were mostly working. The game was ready to go and luckily it was deadline day. Finally, it took me a good while but I had converted all my code to the Processing IDE and submitted both projects. I thought I was finally done.

A couple of weeks later, I got an email from the unit leader regarding the project. I was asked to have a meeting about it as I had missed some marking points. They were suspecting that I had possibly plagiarised and quizzed me on the game and my code. After this, they explained the marking points that I had missed off. One of them was not storing the high scores and things to a file. This really has bugged me as one simple error such as not reading the mark scheme. There were more things too but they were very simple and I could have implemented them into the engine very easily.

### Summary

So what have I learnt from this? A lot is the short answer. The long answer is to read the mark scheme and constantly refer back to it, asking yourself "does my work meet the marking criteria?". Since this assignment, I have always done this and I am now paranoid about it, which is a good thing I think.

Now, the reason I have called this article part one is that I plan to redo this engine and make it better and make a new game. I even want to dabble in some 3D stuff too. There are lots of improvements that I want to make and also even fix some issues with it. So thank you for reading and I hope you have learnt something.

You'll be able to click here when I have written the next part to go to it.
