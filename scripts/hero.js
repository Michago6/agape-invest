// document.addEventListener("DOMContentLoaded", () => {
//   const line = document.getElementById("hero-line");
//   const fullText = "Empowering ideas to become global movements.";
//   const words = fullText.split(" ");
//   const totalDuration = 2000; // 2 seconds total
//   const delay = totalDuration / words.length;

//   words.forEach((word, i) => {
//     const span = document.createElement("span");
//     span.textContent = word;
//     span.classList.add("word");
//     span.style.animationDelay = `${i * delay}ms`;
//     line.appendChild(span);
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const line = document.getElementById("hero-line");
//   const cursor = document.querySelector(".cursor");
//   const fullText = "Empowering ideas to become global movements.";
//   const words = fullText.split(" ");
//   const totalDuration = 2000; // 2 seconds total for typing
//   const delay = totalDuration / words.length;

//   words.forEach((word, i) => {
//     const span = document.createElement("span");
//     span.textContent = word;
//     span.classList.add("word");
//     span.style.animationDelay = `${i * delay}ms`;
//     line.appendChild(span);
//   });

//   // Hide the cursor 1s after last word finishes typing
//   const lastWordDelay = words.length * delay + 1000;
//   setTimeout(() => {
//     cursor.style.display = "none";
//   }, lastWordDelay);
// });

document.addEventListener("DOMContentLoaded", () => {
  const line = document.getElementById("hero-line");
  const cursor = document.getElementById("cursor");
  const fullText = document.getElementById("hero-text").dataset.fullText;
  const words = fullText.split(" ");
  const totalDuration = 2000; // total typing duration in ms
  const delay = totalDuration / words.length;

  words.forEach((word, i) => {
    setTimeout(() => {
      const span = document.createElement("span");
      span.textContent = word;
      span.classList.add("word");
      line.appendChild(span);
    }, i * delay);
  });
});