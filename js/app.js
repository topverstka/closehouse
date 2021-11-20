
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

// Прелоадер
// preloader()
// function preloader() {
// 	const preloader = find('.preloader')
// 	const score = find('.preloader__loader-score')
// 	let value = 0

// 	scoreIncrease = setInterval(() => {
// 		if (value == 100) {
// 			clearInterval(scoreIncrease)
// 			preloader.classList.add('_hidden')
// 			body.classList.remove('_lock')
// 		}
// 		else {
// 			value += 1
// 			score.innerText = value
// 		}
// 	}, 10)
// }


// let preloader = document.querySelector('.preloader');

// let preloaderElements = document.querySelectorAll('.preloader svg.current path');
// let startElem = 0;

// setInterval(() => {
// 	preloaderElements[startElem].style.fill = 'unset';
// 	startElem++;
// 	if(startElem < preloaderElements.length ){
// 		preloaderElements[startElem].style.fill = '#ffd4a9';
// 	} else {
// 		startElem = 0;
// 	}
// }, 700);

// document.addEventListener("DOMContentLoaded", () => {
// 	// document.querySelector('#phone-video-first-stopped').removeAttribute('autoplay');
// 	// document.querySelector('#phone-video-first-stopped').play
// 	// document.querySelector('#phone-video-first-stopped').paused
	



// 	var images = document.images;
// 	var images_total_count = images.length;
// 	var images_loaded_count = 0;
// 	var perc_display = document.querySelector('.load-perc-line')

// 	for ( var i = 0; i < images_total_count; i++){
// 		image_clone = new Image();
// 		image_clone.onload = image_loaded;
// 		image_clone.onerror = image_loaded;
// 		image_clone.src = images[i].src;
// 	}
	
// 	function image_loaded() {
// 		images_loaded_count++;

// 		perc_display.style.width = (( (100 / images_total_count) * images_loaded_count) <<0) + '%';

// 		if(images_loaded_count >= images_total_count){
// 			window.setTimeout(function () {
// 				preloader.classList.add('done');
// 				d.querySelector('body').classList.remove('stop');
// 				// d.querySelector('.presentation').classList.add('presentation-load');
// 				// document.querySelector('#phone-video-first-stopped').currentTime = 0;
// 			}, 700);
// 		}
// 	}

	

	
	

// 	// var elements = document.querySelectorAll(".my-paroller");
// 	// var animations = [];
		
// 	// 	for (var i = 0; i < elements.length; i++) {
// 	// 		let et = window.innerHeight / 1.5;
// 	// 		let eh = window.innerHeight + window.innerHeight;
// 	// 		if (i == 0) {
// 	// 			et = elements[i].offsetTop + window.innerHeight/1.5 ;
// 	// 		}
			
// 	// 		etpx = "-" + elements[i].offsetHeight * 2 + "px";
// 	// 		etpxTwo = "-" + window.innerHeight / 4 + "px";

// 	// 		animations[i] = new Motus.Animation({
// 	// 			$el: elements[i],
// 	// 			startPoint: [et],
// 	// 			endPoint: [1500],
// 	// 			keyframes: {
// 	// 				25: {
// 	// 					translateY: {
// 	// 					  from: 0,
// 	// 					  to: -150,
						  
// 	// 					},
// 	// 				  },
// 	// 				50: {
// 	// 					translateY: {
// 	// 					  from: -150,
// 	// 					  to: -750,
						  
// 	// 					},
// 	// 				  },
// 	// 				 100: {
// 	// 					translateY: {
// 	// 					  from: -750,
// 	// 					  to: -1500,
// 	// 					  unit: "px"
// 	// 					},
// 	// 				 }
// 	// 			},
// 	// 		});
// 	// 		if(window.innerWidth > 992){
// 	// 			Motus.addAnimation(animations[i]);
// 	// 		}
			
// 	// 	}

	   
// 	// 	const newAnimation = new Motus.Animation({
// 	// 		$el: document.querySelector(".my-paroller-two"),
// 	// 		startPoint: [-100],
// 	// 		endPoint: [200],
// 	// 		keyframes: {
// 	// 			50: {
// 	// 				translateY: {
// 	// 					// #element4 has an initial width property of 50px so `from` is equal to '50px'
// 	// 					to: "0px",
// 	// 				},
// 	// 			},
// 	// 			100: {
// 	// 				translateY: {
// 	// 					// `from` is equal to `100px` from the previous keyframe
// 	// 					to: "-150px",
// 	// 				},
// 	// 			},
// 	// 		},
// 	// 	});
// 	// 	if(window.innerWidth > 992){
// 	// 		Motus.addAnimation(newAnimation);
// 	// 	}




// });



// 1) Мобильное меню
var menuBurger = d.querySelector('#checkbox4');
checkbox4.addEventListener('click', function(e){
	// e.preventDefault();
	bodyLock();
	if(this.classList.contains('burger-activator--active')){
		this.classList.remove('burger-activator--active');
		d.querySelector('.header__nav').classList.remove('header__nav--active');
		find('.header__logo').style.opacity = '1'
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '1'
		})
		find('header').style.zIndex = '4'
		find('.saearch-header').classList.remove('open')
	}else{
		this.classList.add('burger-activator--active');
		d.querySelector('.header__nav').classList.add('header__nav--active');
		find('.header__logo').style.opacity = '0'
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '0'
		})
		find('header').style.zIndex = '5'
		find('.saearch-header').classList.remove('open')
	}
})

window.addEventListener('keyup', function(e){
	if(e.key === "Escape") {
		checkbox4.classList.remove('burger-activator--active');
		checkbox4.checked = false
        d.querySelector('.header__nav').classList.remove('header__nav--active');
		find('.header__logo').style.opacity = '1'
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '1'
		})
		find('header').style.zIndex = '4'
		find('.saearch-header').classList.remove('open')
    }
})

Array.from(document.querySelectorAll('.nav-burger ul li a')).forEach(el => {
	el.addEventListener('click', function(){
		document.querySelector('.header__nav').classList.remove('header__nav--active')
		document.querySelector('.burger__container').classList.remove('header__burger--active')
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '1'
		})
		find('header').style.zIndex = '4'
		find('.header__logo').style.opacity = '1'
		body.classList.remove('_lock');
	})
})


// 2) Скрытие мобильного меню
// function findCloseBtns(){
// 	let closeBtns = document.querySelectorAll('.close');
// 	for (let i = 0; i < closeBtns.length; i++) {
// 		closeBtns[i].addEventListener('click', function(e){
// 			e.preventDefault();
// 			menuBurger.classList.remove('header__burger--active');
// 			d.querySelector('.header__nav').classList.remove('header__nav--active');
// 			bodyLock();
// 		})
// 	}
// }
// findCloseBtns();



// Тут будет скрипт для модальных окон


// 4) Ленивая загрузка изображений
// [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
// 	img.setAttribute('src', img.getAttribute('data-src'));
// 	img.onload = function() {
// 	img.removeAttribute('data-src');
// 	};
// });


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
	autoplay: {
		delay: 5000,
	},
	speed: 1000,
	loop: true,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

var swiperProductCard = new Swiper('.product-card-swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
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
	if(find('.saearch-header').classList.contains('open')){
		find('.saearch-header').classList.remove('open')
	}else {
		find('.saearch-header').classList.add('open')
	}
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

window.addEventListener('click', e => {
	const target = e.target
	if (!target.closest('.product-button__size') && !target.closest('.size-list')) {
		Array.from(document.querySelectorAll('.size-list')).forEach(el => {
			el.classList.remove('activator-list')
		})
    }
})

// 9) AOS анимации инициализация (https://michalsnik.github.io/aos/)

AOS.init();

// removeCardSize()
function removeCardSize() {
	const cardElems = document.querySelectorAll('.new-product__item')
	
	for (card of cardElems) {
		const sizeList = card.querySelector('.size-list')
		card.addEventListener('mouseleave', () => {
			sizeList.classList.remove('activator-list')
		})
	}
}