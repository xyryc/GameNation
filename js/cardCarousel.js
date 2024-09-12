document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const carousel = document.querySelector('.carousel');
    const itemsPerSlide = 3;
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const position = index * itemsPerSlide;
            const translateX = -(position * (100 / itemsPerSlide));
            carousel.style.transform = `translateX(${translateX}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Ensure only as many dots as there are slides
    dots.forEach((dot, index) => {
        if (index >= totalSlides) {
            dot.style.display = 'none';
        }
    });
});
