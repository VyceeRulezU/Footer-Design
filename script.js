
window.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.footer_carousel');
    if (!carousel) {
        return;
    }

    // Create a new track element
    const track = document.createElement('div');
    track.classList.add('footer_carousel_track');

    // Get all original items
    const items = Array.from(carousel.children);

    // Move original items to the new track
    items.forEach(item => {
        track.appendChild(item);
    });

    // Clone items and append them to the track for the seamless loop
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    // Add the populated track to the carousel
    carousel.appendChild(track);
});
