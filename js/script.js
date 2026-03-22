let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});

// Efeito de scroll no header
window.onscroll = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

// Inicialização do Swiper
var swiper = new Swiper(".course-slider",{
    spaceBetween: 20,
    grabCursor: true,
    loop:false,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
