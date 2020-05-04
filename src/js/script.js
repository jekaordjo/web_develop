window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Slider ---------------------------------------------------
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
    //----------------------------------------------------------------
    //Hamburger-------------------------------------------------------
    const menu = document.querySelector('.nav'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    });
    //--------------------------------------------------------------
    //filter mixitup
    let mixer = mixitup('.works_catalog_content');
    //--------------------------------------------------------------
    //toTop
    let toTop = document.querySelector('.pageup');
    window.addEventListener('scroll', function() {
        if (pageYOffset > 899){
            toTop.style.display = 'block';
        }
        if (pageYOffset < 899){
            toTop.style.display = 'none';
        }
      });
    //--------------------------------------------------------------

    //scroll JQ
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
    //--------------------------------------------------------------
});


