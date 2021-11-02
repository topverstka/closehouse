// Служебные переменные
const d = document;
const body = d.querySelector('body');

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

let allInput = document.querySelectorAll('.order-form__ordering-input input')

document.querySelector('.order-button').addEventListener('click', function(){
    Array.from(allInput).forEach((allInput) => {
        if(document.querySelector('#mailrus').checked || document.querySelector('#sdek').checked) {
            if(allInput.value == "") {
                document.querySelector('.order-alert').classList.remove('active');
                document.querySelector('body').style.overflowY = 'inherit'
            } else {
                document.querySelector('.order-alert').classList.add('active');
                document.querySelector('body').style.overflowY = 'hidden'
            }
        }
    })
})

// Открыть поисковое меню
btnHeaderSearch.addEventListener('click', () => {
	if(document.querySelector('.saearch-header').classList.contains('open')){
		document.querySelector('.saearch-header').classList.remove('open')
	}else {
		document.querySelector('.saearch-header').classList.add('open')
	}
})

var menuBurger = document.querySelector('.burger__container');
menuBurger.addEventListener('click', function(e){
	e.preventDefault();
	if (body.classList.contains('_lock')) {
        body.classList.remove('_lock');
    } else {
        body.classList.add('_lock');
    }
	if(this.classList.contains('header__burger--active')){
		this.classList.remove('header__burger--active');
		d.querySelector('.header__nav').classList.remove('header__nav--active');
		find('.header__logo').style.opacity = '1'
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '1'
		})
		find('header').style.zIndex = '4'
	}else{
		this.classList.add('header__burger--active');
		d.querySelector('.header__nav').classList.add('header__nav--active');
		find('.header__logo').style.opacity = '0'
		Array.from(findAll('.header__button')).forEach(el => {
			el.style.opacity =  '0'
		})
		find('header').style.zIndex = '5'
	}
})
