let bodyclick = document.querySelector('.body');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let header__overlay = document.querySelector('.header__overlay');
let header__list = document.querySelector('.header__list');




header__burger.onclick = function(){
  changeClass();
}

header__overlay.onclick = function(){
  changeClass();
}

header__list.onclick = function(){
  if(this.classList.contains('active')){
    changeClass();
  }
}

function changeClass(){
  bodyclick.classList.toggle('lock');
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    header__overlay.classList.toggle('lock');
    header__list.classList.toggle('active');
}



$(function() {
  // при нажатии на кнопку scrollup
  $('.up').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },100);
  })
})

// при прокрутке окна (window)
  
  $(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>500) {
      // то сделать кнопку scrollup видимой
      $('.up').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.up').fadeOut();
    }
});