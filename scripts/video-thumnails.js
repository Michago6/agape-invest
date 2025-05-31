document.querySelectorAll('.video-hover-wrapper').forEach(wrapper => {
wrapper.addEventListener('click', () => {
    if (!wrapper.querySelector('iframe')) {
    const videoId = wrapper.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
    iframe.allowFullscreen = true;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    wrapper.appendChild(iframe);
    wrapper.querySelector('.video-placeholder').style.display = 'none';
    iframe.style.display = 'block';
    }
});
});
