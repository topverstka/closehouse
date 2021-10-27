
// Служебные переменные
const d = document;
const body = d.querySelector('body');



//<------Служебные функции---------->

// 1) Сокращенный аналог querySelector
function find(selector) {
	return d.querySelector(selector)
}

// 2) Сокращенный аналог querySelectorAll
function findAll(selectors) {
	return d.querySelectorAll(selectors)
}

// 3) Скрипт запрещающий скроллить тело страницы
function bodyLock() {  
	if (body.classList.contains('_lock')) {
	  	body.classList.remove('_lock');
	} else {
	  	body.classList.add('_lock');
	}
}


//<------Основные функции---------->

// 1) Мобильное меню
var menuBurger = d.querySelector('.header__burger');
menuBurger.addEventListener('click', function(e){
	e.preventDefault();
	bodyLock();
	if(this.classList.contains('header__burger--active')){
		this.classList.remove('header__burger--active');
		d.querySelector('.header__nav').classList.remove('header__nav--active');
	}else{
		this.classList.add('header__burger--active');
		d.querySelector('.header__nav').classList.add('header__nav--active');
	}
})


// 2) Скрытие мобильного меню
function findCloseBtns(){
	let closeBtns = document.querySelectorAll('.close');
	for (let i = 0; i < closeBtns.length; i++) {
		closeBtns[i].addEventListener('click', function(e){
			e.preventDefault();
			menuBurger.classList.remove('header__burger--active');
			d.querySelector('.header__nav').classList.remove('header__nav--active');
			bodyLock();
		})
	}
}
findCloseBtns();



// Тут будет скрипт для модальных окон


// 4) Ленивая загрузка изображений
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
	img.removeAttribute('data-src');
	};
});


// 5) Куки
function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/";
    document.cookie=c_name + "=" + c_value;
}

function getMyCookie(name) {
    var c = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
        if (c) return c[2];
    	else return "";
}


// 6) Слайдер с контрольными точками (Используется библиотека swiper: https://swiperjs.com/)
var swiper = new Swiper('.home-swiper-container', {
	loop: true,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});


// 8) Скрипт для раздела FAQ - "Частозадаваемые вопросы"
function findFaq(){
	let faqBoxes = document.querySelectorAll('.faq-box')
	for(i = 0; i <= faqBoxes.length-1; i++){
		faqBoxes[i].addEventListener('click', function(e) {
			e.preventDefault();
			if(this.classList.contains('active')){
				this.classList.remove('active');
			}else{
				let activeElem = this.closest('.faq').querySelector('.faq-box.active');
				if(activeElem){
					activeElem.classList.remove('active');
				}
				this.classList.add('active');
			}
		});
	}
}
findFaq();

// Открыть поисковое меню
btnHeaderSearch.addEventListener('click', () => {
	find('.search-panel').classList.add('open')
})

find('.search-panel__close').addEventListener('click', () => {
	find('.search-panel').classList.remove('open')
})

// Добавить в избранное
let allFavorite = document.querySelectorAll('.product-button__like')
Array.from(allFavorite).forEach(el => {
    el.addEventListener('click', function(event) {
        if(el.classList.contains('active-favorite')){
			el.classList.remove('active-favorite')
		} else {
			el.classList.add('active-favorite')
		}
    });
});

// Открыть размерный ряд
let allProduct = document.querySelectorAll('.product-button__size')
let allLinesize = document.querySelectorAll('.size-list')

Array.from(allProduct).forEach((el, id) => {
    el.addEventListener('click', function(event) {
		Array.from(allLinesize).some((lineSize, number, allLinesizes) => {
			if(allLinesizes[id].classList.contains('activator-list')){
				allLinesizes[id].classList.remove('activator-list')
			} else {
				allLinesizes[id].classList.add('activator-list')
			}

			return allLinesizes[id]
		});
    });
});
// 9) AOS анимации инициализация (https://michalsnik.github.io/aos/)
AOS.init();
