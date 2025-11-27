/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation & Header with Smart Sticky Scroll Animation
	--------------------*/
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.querySelector('.header__nav__menu');
    const header = document.querySelector('.header');
    
    let lastScrollY = 0;
    let ticking = false;
    let isHeaderSticky = false;
    const stickyThreshold = 100; // Scroll sejauh ini sebelum header jadi sticky
    const hideThreshold = 200;   // Hide setelah scroll 200px

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenuToggle && !e.target.closest('.header__nav__menu') && !e.target.closest('.mobile-menu-toggle')) {
            if (mobileMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close for dropdown triggers
            if (!this.closest('.dropdown-toggle')) {
                if (mobileMenuToggle && mobileMenu && window.innerWidth <= 992) {
                    mobileMenuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
            // Update active state
            document.querySelectorAll('.nav__item').forEach(item => {
                item.classList.remove('active');
            });
            this.closest('.nav__item').classList.add('active');
        });
    });

    // Dropdown toggle on click
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownToggle = this.closest('.dropdown-toggle');
            dropdownToggle.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-toggle').forEach(item => {
                if (item !== dropdownToggle) {
                    item.classList.remove('active');
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-toggle').forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Logo animation on click
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            const logoImg = this.querySelector('.logo-img');
            if (logoImg) {
                logoImg.style.animation = 'none';
                setTimeout(() => {
                    logoImg.style.animation = '';
                }, 10);
            }
        });

        // Add keyboard interaction for accessibility
        logoLink.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Smart sticky header animation saat scroll
    function updateHeaderPosition() {
        const currentScrollY = window.scrollY;
        
        // Threshold 1: Jadi sticky setelah scroll 100px
        if (currentScrollY > stickyThreshold) {
            if (!isHeaderSticky) {
                header.classList.add('sticky');
                header.classList.add('scrolled');
                isHeaderSticky = true;
            }
        } else {
            if (isHeaderSticky) {
                header.classList.remove('sticky');
                header.classList.remove('scrolled');
                header.classList.remove('hide');
                isHeaderSticky = false;
            }
        }

        // Threshold 2: Hide/Show header berdasarkan scroll direction
        if (isHeaderSticky) {
            if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
                // Scrolling down - hide header
                header.classList.add('hide');
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - show header
                header.classList.remove('hide');
            }
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderPosition);
            ticking = true;
        }
    }, { passive: true });

    // Prevent old slicknav from showing
    const oldMobileWrap = document.getElementById('mobile-menu-wrap');
    if (oldMobileWrap) {
        oldMobileWrap.style.display = 'none';
    }

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Project description modal (open when clicking a project card)
    --------------------*/
    $(document).on('click', '.portfolio__gallery .portfolio__item', function (e) {
        // if clicked the play button link, allow default (external link)
        if ($(e.target).closest('a.play-btn').length) return;

        var $item = $(this);
        var title = $item.find('.portfolio__item__text h4').text().trim();
        var desc = $item.find('.project-desc').text().trim();
        if (!desc) {
            // fallback: build from tags
            var tags = $item.find('.portfolio__item__text ul li').map(function () { return $(this).text(); }).get();
            if (tags.length) desc = 'Tags: ' + tags.join(', ');
            else desc = 'No description available.';
        }

        $('#pg-modal .pg-modal-title').text(title);
        $('#pg-modal .pg-modal-body').text(desc);
        $('#pg-modal').attr('aria-hidden', 'false').addClass('open');
        $('body').addClass('pg-modal-open');
    });

    // Close modal (backdrop or close button)
    $(document).on('click', '#pg-modal .pg-modal-backdrop, #pg-modal .pg-modal-close', function () {
        $('#pg-modal').attr('aria-hidden', 'true').removeClass('open');
        $('body').removeClass('pg-modal-open');
    });

    // Close on ESC
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            $('#pg-modal').attr('aria-hidden', 'true').removeClass('open');
            $('body').removeClass('pg-modal-open');
        }
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Rain effect (canvas) — drip / drizzle tuned for small short particles
    --------------------*/
    (function initRain() {
        var canvas = document.getElementById('rain-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var w = 0, h = 0;
        var drops = [];
        var maxDrops = 260;
        var mode = 'rain'; // 'rain' or 'fire'

        var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) maxDrops = 100; // reduce on mobile

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        // reset a drop with a type: 'drizzle' (small) or 'drop' (long)
        function resetDrop(d, forceType) {
            d.x = Math.random() * w;
            d.y = -5 - Math.random() * (h * 0.2);
            var type;
            if (forceType) type = forceType;
            else type = (Math.random() < 0.75) ? 'drizzle' : 'drop'; // 75% drizzle

            if (type === 'drizzle') {
                d.type = 'drizzle';
                d.len = 4 + Math.random() * 8;          // short streak
                d.speed = 0.6 + Math.random() * 1.6;   // slow
                d.xs = -0.18 + Math.random() * 0.36;   // tiny horizontal skew
                d.alpha = 0.05 + Math.random() * 0.12; // very faint
                d.width = 0.35 + Math.random() * 0.7;  // thin
            } else {
                d.type = 'drop';
                d.len = 12 + Math.random() * 30;      // longer
                d.speed = 3 + Math.random() * 8;      // faster
                d.xs = -0.5 + Math.random() * 1.2;    // more skew
                d.alpha = 0.12 + Math.random() * 0.6; // more visible
                d.width = 1 + Math.random() * 1.6;    // thicker
            }
        }

        function createDrops() {
            drops = [];
            var count = Math.min(maxDrops, Math.floor(w / 3.5));
            for (var i = 0; i < count; i++) {
                var d = {};
                // bias initial distribution: more drizzle than drops
                resetDrop(d);
                d.y = Math.random() * h;
                drops.push(d);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.lineCap = 'round';
            for (var i = 0; i < drops.length; i++) {
                var p = drops[i];
                ctx.beginPath();

                // choose color depending on mode
                var color;
                if (mode === 'fire') {
                    // fire tones: drizzle -> faint orange ember, drop -> bright orange
                    color = (p.type === 'drizzle') ? 'rgba(255,180,100,' + p.alpha + ')' : 'rgba(255,150,40,' + p.alpha + ')';
                } else {
                    color = (p.type === 'drizzle') ? 'rgba(200,210,220,' + p.alpha + ')' : 'rgba(174,194,224,' + p.alpha + ')';
                }

                ctx.strokeStyle = color;
                ctx.lineWidth = p.width;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.xs * p.len, p.y + p.len);
                ctx.stroke();

                // for fire mode add tiny ember glow at the end of the streak
                if (mode === 'fire') {
                    var ex = p.x + p.xs * p.len;
                    var ey = p.y + p.len;
                    var g = ctx.createRadialGradient(ex, ey, 0, ex, ey, Math.max(6, p.width * 6));
                    g.addColorStop(0, 'rgba(255,230,180,' + (p.alpha * 0.9) + ')');
                    g.addColorStop(0.6, 'rgba(255,140,30,' + (p.alpha * 0.6) + ')');
                    g.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(ex, ey, Math.max(2, p.width * 3), 0, Math.PI * 2);
                    ctx.fill();
                }

                // motion
                p.x += p.xs * (p.speed * 0.4);
                p.y += p.speed;

                // recycle when out of view
                if (p.y > h + 30 || p.x < -50 || p.x > w + 50) {
                    resetDrop(p);
                }
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', function () {
            resize();
            createDrops();
        }, { passive: true });

        // toggle handlers (buttons added to page)
        function setMode(m) {
            mode = m === 'fire' ? 'fire' : 'rain';
            // recreate drops so color/alpha distribution updates
            createDrops();
            // update single-toggle UI if present
            var toggle = document.getElementById('effect-toggle');
            if (toggle) {
                toggle.classList.toggle('rt-active', mode === 'fire');
                toggle.setAttribute('aria-pressed', mode === 'fire');
                var icon = toggle.querySelector('i');
                // use water droplet for rain, fire icon for fire
                if (icon) icon.className = mode === 'fire' ? 'fa fa-fire' : 'fa fa-tint';
            }
            // apply theme class on body so site colors change with mode
            try {
                document.body.classList.toggle('theme-fire', mode === 'fire');
                document.body.classList.toggle('theme-rain', mode === 'rain');
            } catch (e) { /* ignore if no DOM */ }
        }

        // single-toggle handler
        var btnToggle = document.getElementById('effect-toggle');
        if (btnToggle) {
            btnToggle.addEventListener('click', function () {
                var newMode = (mode === 'rain') ? 'fire' : 'rain';
                setMode(newMode);
            });
        }

        // start
        resize();
        createDrops();
        // set initial theme to match default mode
        setMode(mode);
        requestAnimationFrame(draw);
    })();

    // No sticky/fixed toggle behavior — the button will remain in-flow and scroll with the page.

})(jQuery);