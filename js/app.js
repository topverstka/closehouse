
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
var menuBurger = d.querySelector('.burger__container');
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

btnMenuSearch.addEventListener('click', () => {
	find('.search-panel').classList.add('open')
	find('.header__nav').classList.remove('header__nav--active')
	find('.burger__container').classList.remove('header__burger--active')
	bodyLock()
})

// Закрыть поисковое меню
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

// Скрытие и открытие хедера при скроле
let lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   	let st = window.pageYOffset || document.documentElement.scrollTop;  

	console.log(st)

   	if (st <= 1000){
		document.querySelector(".header").style.position = "absolute";
		document.querySelector(".header").style.top = "0";
		document.querySelector(".header").style.transition = "0s";
   	} else if(st >= lastScrollTop) {	
		document.querySelector(".header").style.position = "fixed";
		document.querySelector(".header").style.top = "-100%";
		document.querySelector(".header").style.transition = "0s";
   	} else {
		document.querySelector(".header").style.position = "fixed";
		document.querySelector(".header").style.top = "0";
		document.querySelector(".header").style.transition = "0.4s";
	}
   	lastScrollTop = st;
}, false);

// Открыть фильтр по категориям
find('.catalog-button__setting-category p').addEventListener('click', () => {
	if(find('.catalog-button__setting-category div').classList.contains('active')){
		find('.catalog-button__setting-category div').classList.remove('active')
	} else {
		find('.catalog-button__setting-category div').classList.add('active')
	}
})

// Открыть фильтры
find('.catalog-button__setting-filter p').addEventListener('click', () => {
	if(find('.catalog-button__setting-filter div').classList.contains('active')){
		find('.catalog-button__setting-filter div').classList.remove('active')
	} else {
		find('.catalog-button__setting-filter div').classList.add('active')
	}
})

// Отрыть соритровку
find('.catalog-button__setting-sort p').addEventListener('click', () => {
	if(find('.catalog-button__setting-sort div').classList.contains('active')){
		find('.catalog-button__setting-sort div').classList.remove('active')
	} else {
		find('.catalog-button__setting-sort div').classList.add('active')
	}
})


// Перключение отображения
let vizualButton = document.querySelectorAll('.catalog-visualization__button button')
Array.from(vizualButton).forEach((el, id, lems) => {
    lems[0].addEventListener('click', function(event) {
        if(lems[1].classList.contains('active')){
			lems[1].classList.remove('active')
		} else {
			lems[0].classList.add('active')
		}
    });

	lems[1].addEventListener('click', function(event) {
        if(lems[0].classList.contains('active')){
			lems[0].classList.remove('active')
		} else {
			lems[1].classList.add('active')
		}
    });
});

var $range = $(".js-range-slider"),
	$inputFrom = $(".js-input-from"),
	$inputTo = $(".js-input-to"),
	instance,
	min = 0,
	max = 12600,
	from = 0,
	to = 0;

$range.ionRangeSlider({
	skin: "round",
	type: "double",
	min: min,
	max: max,
	from: 0,
	to: max,
	onStart: updateInputs,
	onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
	to = data.to;
			
	$inputFrom.prop("value", from);
	$inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
	var val = $(this).prop("value");
			
	// validate
	if (val < min) {
		val = min;
	} else if (val > to) {
		val = to;
	}
			
	instance.update({
		from: val
	});
});

$inputTo.on("input", function () {
	var val = $(this).prop("value");
			
	// validate
	if (val < from) {
		val = from;
	} else if (val > max) {
		val = max;
	}
			
	instance.update({
		to: val
	});
});
let div = document.createElement("div")
document.querySelector('.extra-controls').appendChild(div)

// очистить выбор фильтра
let checkedColor = document.querySelectorAll('.filter-form__color-button label input')
let checkedSize = document.querySelectorAll('.filter-form__size-button label input')

find('.clear-filter').addEventListener('click', () => {
	document.querySelector('.js-input-from').value = 0
	document.querySelector('.js-input-to').value = 12600
	document.querySelector('.irs-handle.from').style.left="0%"
	document.querySelector('.irs-handle.to').style.left="94.6078%"
	document.querySelector('.irs-bar').setAttribute('style', 'width:100%; left:0%;')

	Array.from(checkedColor).forEach(el => {
		el.checked = false;
	});

	Array.from(checkedSize).forEach(el => {
		el.checked = false;
	});
})

// 9) AOS анимации инициализация (https://michalsnik.github.io/aos/)
AOS.init();
