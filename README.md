# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/Mirare23/News-Letter.git)
- Live Site URL: (https://news-letter-qylnfcz0o-mirare23s-projects.vercel.app/)

## My process

1. Import all asset needed.
2. Install framework and libraries that needed.
3. Developing Proccess.
4. Review.

### Built with

- Semantic HTML5 markup
- Tailwind Css
- Flexbox
- Desktop First workflow
- [Vue Vite](https://vuejs.org/) - JS library
- [VueUse](https://styled-components.com/) - For styles
- Typescript

### What I learned

I'm gonna highlight some of the code.

This is for the validation on email. There's another solution using libraries like vuelidate
& This website is only 1 page. I use this to changed it to confirm section

```js
const submit = async () => {
  errorMsg.value = ""
  if (email.value && email.value.includes("@") && email.value.includes(".")) {
    confirm.value = true
  } else {
    errorMsg.value = "Valid email required!"
  }
}
```

I use this for changing the image. I know i can change it through css. just more comfortable with JS

```js
const imgResponsive = computed(() => {
  if (width.value < 1024) {
    return "/images/illustration-sign-up-mobile.svg"
  } else {
    return "/images/illustration-sign-up-desktop.svg"
  }
})
```

## Author

- Github - [Mirare23](https://github.com/Mirare23)
- Frontend Mentor - [@Mirare23](https://www.frontendmentor.io/profile/Mirare23)
