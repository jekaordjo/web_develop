window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        dotsWrap = document.querySelector('.team-dots'),
        dots = document.querySelectorAll('.team-dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('team-dot_active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('team-dot_active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('team-dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

});