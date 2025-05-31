// const nav = document.getElementById('nav');

// window.addEventListener('scroll', () => {
// const scrollTop = window.scrollY || document.documentElement.scrollTop;

// if (scrollTop > 250) {
//     if (!nav.classList.contains('stuck')) {
//     nav.classList.add('stuck');
//     console.log('Added .stuck to nav');
//     }
// } else {
//     if (nav.classList.contains('stuck')) {
//     nav.classList.remove('stuck');
//     console.log('Removed .stuck from nav');
//     }
// }
// });

//header
// window.addEventListener('scroll', () => {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;
//   const leftImg = document.querySelector('.left');
//   const rightImg = document.querySelector('.right');

//   if (scrollTop > 250) {
//     leftImg.classList.add('scrolled');
//     rightImg.classList.add('scrolled');
//   } else {
//     // Optional: gradually move based on scroll position
//     const progress = scrollTop / 250;
//     const distance = 150 * progress;
//     leftImg.style.transform = `translateX(-${distance}px)`;
//     rightImg.style.transform = `translateX(${distance}px)`;
//   }
// });

//seed

// const img = document.getElementById('seed-img');
// const maxHeight = 90; // max height in px
// const scrollThreshold = 300; // max scroll to reach full height

// window.addEventListener('scroll', () => {
//   let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
//   // Calculate new height proportionally (clamp between 0 and maxHeight)
//   let newHeight = Math.min(maxHeight, (scrollTop / scrollThreshold) * maxHeight);
  
//   img.style.height = newHeight + 'px';
// });


// Rotate background on scroll
// const bg = document.getElementById('hero-bg');
// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   const rotation = scrollY * 0.05; // Adjust rotation speed
//   bg.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
// });