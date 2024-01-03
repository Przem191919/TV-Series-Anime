var titles = {
    0: {
        title: "",
        subTitle: "",
        desc: "",
    },
    1: {
        title: "",
        subTitle: "",
        desc: "",
    },
    2: {
        title: "",
        subTitle: "",
        desc: "",
    },
    3: {
        title: "",
        subTitle: "",
        desc: "",
    },
    4: {
        title: "",
        subTitle: "",
        desc: "",
    },
    5: {
        title: "",
        subTitle: "",
        desc: "",
    },
}

//Swiper
//create thumbs swiper
var thumbsSwiper = new Swiper(".thumbsSwiper",{
    spaceBetween: 10,
    slidesPerView: 5,
    breakpoints:{
        200:{
            slidesPerView:1.5
        },
        400:{
            slidesPerView:1.5
        },
        600:{
            slidesPerView:3
        },
        1100:{
            slidesPerView:5
        },
    },
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper = new Swiper('.bannerSwiper', {

    spaceBetween: 0,
    effect: 'fade',
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    thumbs:{
        swiper: thumbsSwiper
    }
  });
  