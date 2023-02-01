var App = {
    sliderHome: function () {
        jQuery('.banner_site').slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            speed: 1500,
            prevArrow: jQuery('.nav_slider .nav_left'),
            nextArrow: jQuery('.nav_slider .nav_right'),
        });
        jQuery('.banner_site').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            jQuery('.slider_thumbnail .item').removeClass('active');
            jQuery('.slider_thumbnail .item[data-number="'+nextSlide+'"]').addClass('active');
        });
       jQuery('.slider_thumbnail .item').click(function (e) {
            e.preventDefault();
            jQuery('.slider_thumbnail .item').removeClass('active');
            jQuery(this).addClass('active');
            let $num = jQuery(this).data('number');
            setTimeout(function () {
                jQuery('.banner_site').slick('slickGoTo', $num);
            },200);
        });
    },
    showBtnSearch: function(){
        jQuery('.search_box a').click(function(e){
            e.preventDefault();
            jQuery(this).parent('.search_box').toggleClass('active');
        })
    }
};
jQuery(document).ready(function () {
    //App.sliderHome();
    //App.showBtnSearch();
});

new fullpage('#fullpage',{
    licenseKey: '558F2BA0-3BF94B75-94951419-B420B651',
    anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7','page8'],
    responsiveWidth: 1023,
});
$(document).on('click', '#home', function(){
    fullpage_api.moveTo('page1', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#Location', function(){
    fullpage_api.moveTo('page2', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#overview', function(){
    fullpage_api.moveTo('page3', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#utilities', function(){
    fullpage_api.moveTo('page6', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#dev', function(){
    fullpage_api.moveTo('page7', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});
$(document).on('click', '#contact', function(){
    fullpage_api.moveTo('page8', 1);
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
});

//Handle click menu tab
var tabs = document.querySelectorAll('.Header-menu--tab');
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


//Slide overview
$('.Overview-slide').slick({
    prevArrow:'.leftbtn',
    nextArrow:'.rightbtn',
    asNavFor: '.Slide-photo'
});
$('.Slide-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.Overview-slide',
    centerMode: true,
    focusOnSelect: true,
    fade: true,
    arrows:false,
});

//Slide villa
jQuery('.Slides-villa').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //count
    jQuery('.Count-slide .Current-slide').text((nextSlide*1+1));

    //slide villa
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue').removeClass('active');
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue[data-number="'+nextSlide+'"]').addClass('active');
});
$('.Slides-villa').slick({
    prevArrow:'.prevbtn',
    nextArrow:'.nextbtn',
    dots: true,
    appendDots: jQuery('.dots_slider')
});

//slide thumbnail
jQuery('.Villa-wrapper .Villa-menu .Villa-venue').click(function (e) {
    e.preventDefault();
    jQuery('.Villa-wrapper .Villa-menu .Villa-venue').removeClass('active');
    jQuery(this).addClass('active');
    let $num = jQuery(this).data('number');
    setTimeout(function () {
        jQuery('.Slides-villa').slick('slickGoTo', $num);
    },200);
});


jQuery('.menu-option').click(function(){
    jQuery('.overlay').css({'display':'block'});
    jQuery('.nav__mobile').css({'transform':'translateX(0%)'})
})
jQuery('.overlay').click(function(){
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
})
jQuery('.Closebtn').click(function(){
    jQuery('.overlay').css({'display':'none'});
    jQuery('.nav__mobile').css({'transform':'translateX(100%)'})
})




//Cách làm bằng jQuery
// jQuery('.Menu-Option').click(function(){
//     jQuery('.overlay').css({'display':'none','background':'red'});
// })



