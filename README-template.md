# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). by yishak abrham.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Home page design

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- use JS to toggle the menu nav for mobile screens

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

the process is pretty basic using grid and flex layout designs but for the hover effect on the buttons take some serious work and creativity.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

it help me to build new skill on the `samp` element that is added inside a button element so that we can add another psudoelement on the button (later used to hover) so its pretty usefull skill to have

```html
<button class="btn btn-contact" type="button">
  <samp> contact </samp>
</button>
```

first we position the btn `relative` and overflow `hidden`

```css
.btn-contact {
  position: relative;
  overflow: hidden;
}
```

and also position the samp element `relative`

```css
.btn-contact samp {
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
  font-family: 'Fraunces', serif;
}
```

there is some serious work on the css for the psudo element :after btn ...we position the after element absolute to the btn and samp so that it stays under the btn ..i use the transform property to the decoration purpose

```css
.btn-contact::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 230%;
  width: 150%;
  background-color: $btn_hover_color;
  transition: 0.5s;
  transform: translate(-98%, -25%) rotate(45deg); /*translate x and y*/
}
```

finally when we hover over the btn the after element will move to the desired position behind the btn

```css
.btn-contact:hover::after {
  transform: translate(-9%, -25%) rotate(45deg);
}
```

another cool thing that i practice is mastering my css clip path skill which used to snip the polygon by `clip-path ` property..

```css
clip-path: polygon(
  0 6%,
  //x=0 y=6%
  95% 6%,
  //x=95% y=6%
  100% 0,
  //x=100% y=0
  100% 100%,
  //x and y =100%
  0% 100% //x=0% y=100%
); //<!--TODO: the first number X-axis and the second number Y-axis ...co-ordinate from the top left of polygone(0,0)
display: none;
```

finally i add the fixed nav bar functionallity to the page by comparing the nav height to the pageYOffset...

```js
const navBar = document.getElementById('nav');
const navHeight = navBar.getBoundingClientRect().height; //103px for pc
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }
  //top link
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
