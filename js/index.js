window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container',{
        autoplay: 2000,
        direction : 'horizontal',
        loop: true,
        // autoplayDisableOnInteraction : false,
        pagination: {
            el: '.swiper-pagination',
        }
    });
}