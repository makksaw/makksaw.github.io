let bodyclick = document.querySelector('.body');
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let header__overlay = document.querySelector('.header__overlay');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function() {
	changeClass();
}
header__overlay.onclick = function() {
	changeClass();
}
header__list.onclick = function() {
	if (this.classList.contains('active')) {
		changeClass();
	}
}

function changeClass() {
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
			scrollTop: 0
		}, 100);
	})
})

// при прокрутке окна (window)
$(window).scroll(function() {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop() > 350) {
		// то сделать кнопку scrollup видимой
		$('.up').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.up').fadeOut();
	}
});


$(".works__inner").on("click", ".work__tab", function() {
	// Удаляем значения актив везде //
	$(".works__inner .work__tab").removeClass("active");
	$(".work__portfolio .work__block").removeClass("active");
	// Получаем ид выделенного елемента по счоту 0+ //
	let index = $(this).index();
	// Добавлем клас актив к нажатому блоку //
	$(this).addClass("active");
	// Добавлем клас актив к инфо блоку //
	$(".work__block").eq(index).addClass("active");
});


$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		/* Показывать кнопки в слайдере */
		dots: true,
		/* Точки в слайдере */
		adaptiveHeight: false,
		/* Удаптивная высота ширина слайдов */
		slidesToShow: 1,
		/* Сколько слайдов показывать */
		speed: 1000,
		/* Скорость слайда */
		easing: 'ease',
		infinite: true,
		/* Бесконечность слайда */
		initialSlide: 0,
		/* С какого слайда начинаем */
		autoplay: true,
		/* Автопрокрут слайдов */
		autoplaySpeed: 1500,
		/* Скороть прокрутки слайдов */
		draggable: true,
		/* Разрешение прокрутки слайдов мышкой на пк*/
		swipe: true,
		/* Разрешение прокрутки слайдов на телефоне*/
		touchThreshold: 10,
		/* Расстояние для свайпа на телефоне */
		touchMove: true,
		/* Возможности тач скрина */
		waitForAnimate: true,
		/* Ожидать ли анимацию прокрутки или нет */
		centerMode: false,
		/* Центрировать слайд */
	});
});


introphoto.classList.add('show');

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('show');
		}
	});
}


let options = {
	threshold: [0.2]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.about__item');
let works = document.querySelectorAll('.works');
for (let elm of works) {
	observer.observe(elm);
}
for (let elm of elements) {
	observer.observe(elm);
}




if ( jQuery(window).width() > 750){
	$(".main").addClass("active");
	// при прокрутке окна (window)
	$(window).scroll(function() {
		// если пользователь прокрутил страницу более чем на 200px
		if ($(this).scrollTop() > 700) {
			// то сделать кнопку scrollup видимой
			$(".header__link").removeClass("active");
			$(".about").addClass('active');
		}
	
		// иначе скрыть кнопку scrollup
		if ($(this).scrollTop() > 1900) {
			$(".header__link").removeClass("active");
			$(".work").addClass("active");
		}

		if ($(this).scrollTop() > 2900) {
			$(".header__link").removeClass("active");
			$(".cont").addClass("active");
		}

		// иначе скрыть кнопку scrollup
		if ($(this).scrollTop() < 800) {
			$(".header__link").removeClass("active");
			$(".main").addClass("active");
		}
	});
}

$(window).scroll(function() {
	if ($(this).scrollTop() > 70) {
		$(".header").addClass('line');
	}
	else{
		$(".header").removeClass("line");
	}
});


  
setTimeout(() => {
	$(".all__content").addClass("active");
}, 1000);