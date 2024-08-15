# **Frontend Mentor Challenge - FAQ accordion**

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz "https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Accordion collapse/expand animation](#accordion-collapseexpand-animation)

- [Resources](#resources)

## Overview

Users should be able to:

- Hide/Show the answer to a question when the question is clicked

- Navigate the questions and hide/show answers using keyboard navigation alone

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

Links:

- GitHub Repo: <https://github.com/xup60521/faq-accordion>

- Website: <https://xup60521.github.io/faq-accordion/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for animation

### What I learned

#### Accordion collapse/expand animation

When using `GSAP` to create the animation, I realized that even though `height: 0rem;`, I still need to change the top margin to adjust the white space.

```ts
import gsap from "gsap";
import PlusIcon from "/images/icon-plus.svg"
import MinusIcon from "/images/icon-minus.svg"

const accordions = gsap.utils.toArray<HTMLDivElement>(".accordion")

accordions.map(element => {
    const img = element.querySelector("img")
    const p = element.querySelector("p")
    if (!img || !p) return;
    element.querySelector("button")?.addEventListener("click", () => {
        if (p.style.height === "0rem") {
            img.src = MinusIcon;
            img.alt = "minus icon";
            gsap.to(p,  {height: "auto", duration: 0.4,marginTop: "1rem", ease: "power2.out"})
        } else {
            img.src = PlusIcon;
            img.alt = "plus icon";
            gsap.to(p, {height: "0rem", duration: 0.4, marginTop: "-0.2rem", ease: "power2.out"})

        }
    })
})
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>