(function($) {
    "use strict";

    AOS.init(); 

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
        $('#content').fadeIn('slow');
    });

    const valueDisplays = document.querySelectorAll(".num");
    const interval = 4000;
    let hasCounted = false;


    observer.observe(document.querySelector('.counter'));

    const listItems = document.querySelectorAll('.spin');
    listItems.forEach((item, index) => {
        item.style.transitionDelay = `${index*0.1}s`;
    });

    $('.testimonial-slide').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('a[href="#search1"]').on('click', function(event) {
        event.preventDefault();
        $('#search1').addClass('open');
        $('#search1 > form > input[type="search"]').focus();
    });

    $('#search1, #search1 button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    lightGallery(document.getElementById('selector'), {
        plugins: [lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key',
        animateThumb: true,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
    });

    lightGallery(document.getElementById('selector1'), {
        selector: '.item',
        plugins: [lgThumbnail],
        allowMediaOverlap: true,
        toggleThumb: true,
    });

    $(document).on('click', '#back-to-top, .back-to-top', () => {
        $('html, body').animate({ scrollTop: 0 }, '500');
        return false;
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 500) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 0,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }]
    });

})(jQuery);
