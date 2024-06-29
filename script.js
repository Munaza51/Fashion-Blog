
// Function to highlight menu items on hover
document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff4081';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#333';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
