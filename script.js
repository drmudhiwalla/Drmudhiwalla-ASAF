console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        heading.style.transform = heading.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
    });
});
