//<!-.......... NAVBAR JS..........-->
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('NAVJS',window.scrollY>0)
})

document.querySelector('.open').addEventListener('click',()=>{
    document.querySelector('.nav-container ul').style.display='block'
    document.querySelector('.close').style.display='block'
    document.querySelector('.open').style.display='none'
})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.nav-container ul').style.display='none'
    document.querySelector('.close').style.display='none'
    document.querySelector('.open').style.display='block'
})





// <!--..... Initialize Swiper.......... -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        00:{
            slidesPerView: 1,
        }, 
        512:{
            slidesPerView: 2,  
            spaceBetween: 20,          
        },       
        768:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
  });