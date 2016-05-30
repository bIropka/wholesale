$(document).ready(function () {

    /* window-callback */
    $('.get-callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });

    $('.form-callback .select-callback').click(function() {
        $(this).find('.select-image ul').slideToggle();
        $(this).find('i').toggleClass('fa-angle-up fa-angle-down');
    });

    $('.form-callback .select-image ul li').click(function() {
        var newChoice = $(this).html();
        $(this).parents('.select-callback').find('.current-choice').html(newChoice);
        $(this).parents('.select-callback').find('.select-hidden').val(newChoice);
    });
    /* end of window-callback script */

    /* phone-numbers */
    $('.phone-numbers').hover(function() {
        $(this).toggleClass('active');
        $(this).find('i').toggleClass('fa-angle-up fa-angle-down');
    });
    /* end of phone-numbers */

    /* search-form */
    $('.search-field').focus(function(){
        $(this).parent().siblings('.fa-search').css('opacity', 0);
    });
    $('.search-field').blur(function(){
        $(this).parent().siblings('.fa-search').css('opacity', 1);
    });
    /* end of search-form */

    /* show nav-catalog */
    $('.show-all-items').click(function(){
        $(this).parent().find('.catalog-item-hidden').slideToggle();
        $(this).find('i').toggleClass('fa-angle-up fa-angle-down');
    });
    /* end of nav-catalog script */

    /* select-filter */
    $('.select-filter ul li a').click(function() {
        var newCurrentValue = $(this).html();
        $(this).parents('.select-filter').find('.current-value').html(newCurrentValue);
    });
    $('.select-filter').click(function() {
        $('.select-filter ul').slideToggle();
        $('.select-filter i').toggleClass('fa-reverse');
    });
    /* end of select-filter */

    /* product-amount */
    $('.product-amount .control').click(function() {
        var amountImage = $(this).siblings('.current-amount').find('span');
        var amountInput = $(this).siblings('label').find('.input-amount');
        var inputValue = parseInt($(amountInput).val());
        if($(this).hasClass('control-add')) {
            $(amountImage).html(inputValue + 1);
            $(amountInput).val(inputValue + 1);
        } else if($(this).hasClass('control-remove') && inputValue > 1) {
            $(amountImage).html(inputValue - 1);
            $(amountInput).val(inputValue - 1);
        }
    });
    /* end of product-amount */

    /* product-info and reviews */
    $('.nav-product-info li').click(function() {
        var currentIndex = $(this).index();
        $('.product-info .active').removeClass('active');
        $('.product-info li').eq(currentIndex).addClass('active');
        $('.nav-product-info li').removeClass('active');
        $(this).addClass('active');
    });

    $('.product-info .show-all').click(function() {
        $(this).parents('.product-info li').find('.hidden').slideToggle(1000);
        $(this).toggleClass('hide-all');
    });

    $('.reviews .show-all').click(function() {
        $(this).siblings('.hidden').slideToggle(1000);
        $(this).toggleClass('hide-all');
    });
    /* end of product-info and reviews */

    /* nav-slider */
    $('.nav-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnDotsHover: true,
        vertical: true,
        verticalSwiping: true
    });
    /* end of nav-slider */

    /* nav-products */
    $('.nav-products').slick({
        arrows: true,
        appendArrows: '.nav-products-wrap .controls',
        prevArrow: '.nav-products-wrap .left-control',
        nextArrow: '.nav-products-wrap .right-control',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* end of nav-productsr */

    /* wide-slider-1 */
    $('.wide-slider-1').slick({
        arrows: true,
        appendArrows: '.slider-1-wrap .controls',
        prevArrow: '.slider-1-wrap .left-control',
        nextArrow: '.slider-1-wrap .right-control',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* end of popular-products */

    /* wide-slider-2 */
    $('.wide-slider-2').slick({
        arrows: true,
        appendArrows: '.slider-2-wrap .controls',
        prevArrow: '.slider-2-wrap .left-control',
        nextArrow: '.slider-2-wrap .right-control',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* end of popular-products */

    /* wide-slider-3 */
    $('.wide-slider-3').slick({
        arrows: true,
        appendArrows: '.slider-3-wrap .controls',
        prevArrow: '.slider-3-wrap .left-control',
        nextArrow: '.slider-3-wrap .right-control',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* end of articles */

    /* product-gallery */
    $('.slider-large').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-small',
        arrows: false
    });
    $('.slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-large',
        focusOnSelect: true,
        appendArrows: '.product-gallery .controls',
        prevArrow: '.product-gallery .left-control',
        nextArrow: '.product-gallery .right-control',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    /* end of product-gallery */

});