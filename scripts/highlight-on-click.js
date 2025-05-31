document.addEventListener("DOMContentLoaded", function () {
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
        targetEl.classList.remove("shine");
        void targetEl.offsetWidth; // Trigger reflow to restart animation
        targetEl.classList.add("shine");
    }
    });
});
});