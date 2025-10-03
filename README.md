# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle to see prices for different billing periods
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Design - Annual](./design/desktop-design-annually.jpg)
![Desktop Design - Monthly](./design/desktop-design-monthly.jpg)
![Mobile Design - Annual](./design/mobile-design-annually.jpg)
![Mobile Design - Monthly](./design/mobile-design-monthly.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/devbyroman/pricing-component-with-toggle)
- Live Site URL: [Live Demo](https://devbyroman.github.io/pricing-component-with-toggle)

## My process

### Built with

- Semantic HTML5 markup
- SCSS/Sass with 7-1 architecture pattern
- CSS Grid
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- CSS custom properties
- Google Fonts (Montserrat)
- CSS animations and transitions

### What I learned

This project was an excellent opportunity to practice **state management with vanilla JavaScript** and **creating custom toggle switches**. The main challenge was implementing smooth price transitions and maintaining clean, scalable code architecture.

**Key learnings:**

#### 1. Custom Toggle Switch Implementation

Created a fully functional toggle switch with smooth animations:
```scss
.toggle-slider {
background: linear-gradient(135deg, $gradient-start, $gradient-end);
border-radius: 2rem;
transition: 0.3s;

&::before {
content: '';
position: absolute;
background: $white;
border-radius: 50%;
transition: 0.3s;
}
}

.toggle-switch input:checked + .toggle-slider::before {
transform: translateX(1.5rem);
}
```

#### 2. Dynamic Price Updates with JavaScript

Implemented smooth price transitions using data attributes:
```js
const toggleInput = document.getElementById('pricing-toggle-input');
const priceValues = document.querySelectorAll('.price-value');

toggleInput.addEventListener('change', () => {
const isAnnual = toggleInput.checked;

priceValues.forEach(priceValue => {
const annualPrice = priceValue.dataset.annual;
const monthlyPrice = priceValue.dataset.monthly;

text
priceValue.textContent = isAnnual ? annualPrice : monthlyPrice;
});
});
```

#### 3. Featured Card with Gradient Background

Implemented a standout design for the "Professional" plan:
```scss
.pricing-card--featured {
background: linear-gradient(135deg, $gradient-start, $gradient-end);
color: $white;

@include desktop {
transform: scale(1.05);
}
}
```

#### 4. Responsive Grid Layout

Used CSS Grid for flexible responsive design:
```scss
.pricing-grid {
display: grid;
gap: 2rem;

@include desktop {
grid-template-columns: repeat(3, 1fr);
align-items: center;
}
}
```

#### 5. Hover States and Interactions

Added smooth hover effects for better user experience:
```scss
.pricing-card-btn {
background: linear-gradient(135deg, $gradient-start, $gradient-end);
transition: all 0.3s;

&:hover {
background: transparent;
color: $gradient-end;
border-color: $gradient-end;
}
}
```

### Continued development

Areas I want to continue focusing on:

- **Accessibility improvements**: Adding ARIA labels and keyboard navigation
- **Performance optimization**: Implementing CSS-only animations where possible
- **Advanced interactions**: Adding micro-animations for better UX
- **Testing**: Writing unit tests for JavaScript functionality
- **Framework implementation**: Converting to React/Vue components

### Useful resources

- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Helped with dynamic theming
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Essential for responsive layout
- [SCSS 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern) - Architecture best practices
- [Vanilla JavaScript Toggle Tutorial](https://www.w3schools.com/howto/howto_css_switch.asp) - Toggle switch implementation

## Author

- Frontend Mentor - [@devbyroman](https://www.frontendmentor.io/profile/devbyroman)
- GitHub - [@devbyroman](https://github.com/devbyroman)

---


## Installation & Setup

1. Clone the repository:
git clone https://github.com/devbyroman/pricing-component-with-toggle.git


2. Navigate to the project directory:
cd pricing-component-with-toggle


3. If using SCSS, compile with:
sass styles/main.scss styles/main.css --watch


4. Open `index.html` in your browser or use a local server:
npx serve


## Features

✅ Fully responsive design (375px - 1440px)  
✅ Interactive pricing toggle (Annual/Monthly)  
✅ Smooth price transitions  
✅ Hover states on all interactive elements  
✅ Featured card with gradient background  
✅ Semantic HTML5 structure  
✅ Clean SCSS architecture  
✅ Cross-browser compatible  
✅ Accessible toggle switch  


## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for providing this excellent challenge
- The Frontend Mentor community for inspiration and feedback
- [Montserrat Font](https://fonts.google.com/specimen/Montserrat) by Google Fonts