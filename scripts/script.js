const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop;

if (scrollTop > 280) {
    if (!nav.classList.contains('stuck')) {
    nav.classList.add('stuck');
    console.log('Added .stuck to nav');
    }
} else {
    if (nav.classList.contains('stuck')) {
    nav.classList.remove('stuck');
    console.log('Removed .stuck from nav');
    }
}
});