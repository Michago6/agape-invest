document.addEventListener("DOMContentLoaded", () => {
  const line = document.getElementById("hero-line");
  const fullText = "Empowering ideas to become global movements.";
  const words = fullText.split(" ");
  const totalDuration = 2000; // 2 seconds total
  const delay = totalDuration / words.length;

  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.classList.add("word");
    span.style.animationDelay = `${i * delay}ms`;
    line.appendChild(span);
  });
});