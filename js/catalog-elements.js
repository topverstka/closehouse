var swiper = new Swiper('.catalog-swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
	  },
});

// Открыть фильтр по категориям
find('.catalog-button__setting-category p').addEventListener('click', () => {
	if(find('.catalog-button__setting-category div').classList.contains('active')){
		find('.catalog-button__setting-category div').classList.remove('active')
		find('.bg-swiper-container').classList.remove('active')
	} else {
		find('.catalog-button__setting-category div').classList.add('active')
		find('.catalog-button__setting-filter div').classList.remove('active')
		find('.catalog-button__setting-sort div').classList.remove('active')
		find('.bg-swiper-container').classList.add('active')
	}
})

// Открыть фильтры
find('.catalog-button__setting-filter p').addEventListener('click', () => {
	if(find('.catalog-button__setting-filter div').classList.contains('active')){
		find('.catalog-button__setting-filter div').classList.remove('active')
		find('.bg-swiper-container').classList.remove('active')
	} else {
		find('.catalog-button__setting-filter div').classList.add('active')
		find('.catalog-button__setting-category div').classList.remove('active')
		find('.catalog-button__setting-sort div').classList.remove('active')
		find('.bg-swiper-container').classList.add('active')
	}
})

// Отрыть соритровку
find('.catalog-button__setting-sort p').addEventListener('click', () => {
	if(find('.catalog-button__setting-sort div').classList.contains('active')){
		find('.catalog-button__setting-sort div').classList.remove('active')
		find('.bg-swiper-container').classList.remove('active')
	} else {
		find('.catalog-button__setting-sort div').classList.add('active')
		find('.catalog-button__setting-filter div').classList.remove('active')
		find('.catalog-button__setting-category div').classList.remove('active')
		find('.bg-swiper-container').classList.add('active')
	}
})


// Перключение отображения
let vizualButton = document.querySelectorAll('.catalog-visualization__button a')
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
	$inputTo.prop("min", from);
	$inputFrom.prop("max", to);
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

	document.querySelector('.catalog-descr__all').innerHTML = ''
	document.querySelector('.catalog-descr__all').innerHTML = ''
	document.querySelector('.catalog-descr__all').innerHTML = ''

	Array.from(checkedColor).forEach(el => {
		el.checked = false;
	});

	Array.from(checkedSize).forEach(el => {
		el.checked = false;
	});
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.catalog-button__setting-category') && !target.closest('.list-category')) {
        document.querySelector('.list-category').classList.remove('active')
    }

	if (!target.closest('.catalog-button__setting-filter') && !target.closest('.filter-form')) {
        document.querySelector('.filter-form').classList.remove('active')
    }

	if (!target.closest('.catalog-button__setting-sort') && !target.closest('.list-sort')) {
        document.querySelector('.list-sort').classList.remove('active')
    }

	if(!target.closest('.catalog-button__setting-category') && !target.closest('.catalog-button__setting-filter') && !target.closest('.catalog-button__setting-sort') && !target.closest('.product-button__contain')){
		document.querySelectorAll('.bg-swiper-container').forEach(el => {
			el.classList.remove('active')
		})
	}

	if(target.closest('.list-category')){
		let categoryCheck = document.createElement('div');
		let imgCategoryCheck = document.createElement('img');
		let textCategoryCheck = document.createElement('p');

		categoryCheck.setAttribute('class', 'categoryItem')
		categoryCheck.classList.add('catalog__item')
		imgCategoryCheck.setAttribute('src', './img/delete.svg')

		if (target.value != undefined) {
			textCategoryCheck.innerHTML = target.value

			if (target.checked) {
				document.querySelector('.catalog-descr__all').append(categoryCheck)
				categoryCheck.append(textCategoryCheck)
				categoryCheck.append(imgCategoryCheck)

				if (target.value == 'Все категории') {
					document.querySelectorAll('.list-category ul li label input').forEach(el => {
						
						if (el.value != 'Все категории') {
							el.checked = false
							Array.from(document.querySelectorAll('.catalog-descr__all div')).forEach(el => {
								
								if (el.childNodes[0].innerHTML != 'Все категории') {
									el.remove()
								}
							})
						}
					})
				} else {
					document.querySelectorAll('.list-category ul li label input').forEach(el => {
						
						if (el.value == 'Все категории') {
							el.checked = false
						}
						Array.from(document.querySelectorAll('.catalog-descr__all div')).forEach(el => {
							if(el.childNodes[0].innerHTML == 'Все категории'){
								el.remove()
							}
						})
					})
				}
			} else {
				Array.from(document.querySelectorAll('.catalog-descr__all div')).forEach(el => {
					if(target.value == el.childNodes[0].innerHTML){
						el.remove()
					}
				})
			}
		}
	}

	if(target.closest('.filter-form__size')){
		let categoryCheck = document.createElement('div');
		categoryCheck.setAttribute('class', 'sizeItem')
		categoryCheck.classList.add('catalog__item')
		let imgCategoryCheck = document.createElement('img');
		imgCategoryCheck.setAttribute('src', './img/delete.svg')
		let textCategoryCheck = document.createElement('p');
		if(target.value != undefined){
			textCategoryCheck.innerHTML = target.value
			if(target.checked){
				document.querySelector('.catalog-descr__all').append(categoryCheck)
				categoryCheck.append(textCategoryCheck)
				categoryCheck.append(imgCategoryCheck)
				
			} else {
				Array.from(document.querySelectorAll('.catalog-descr__all div')).forEach(el => {
					if(target.value == el.childNodes[0].innerHTML){
						el.remove()
					}
				})
			}
		}
	}

	if(target.closest('.filter-form__color')){
		let categoryCheck = document.createElement('div');
		categoryCheck.setAttribute('class', 'colorItem')
		categoryCheck.classList.add('catalog__item')
		let imgCategoryCheck = document.createElement('img');
		imgCategoryCheck.setAttribute('src', './img/delete.svg')
		let textCategoryCheck = document.createElement('p');
		if(target.value != undefined){
			textCategoryCheck.innerHTML = target.value
			if(target.checked){
				document.querySelector('.catalog-descr__all').append(categoryCheck)
				categoryCheck.append(textCategoryCheck)
				categoryCheck.append(imgCategoryCheck)
				
			} else {
				Array.from(document.querySelectorAll('.catalog-descr__all div')).forEach(el => {
					if(target.value == el.childNodes[0].innerHTML){
						el.remove()
					}
				})
			}
			
		}
	}

	if(target.closest('.catalog-descr__all')){
		if(target.tagName != 'IMG') return;

		Array.from(document.querySelectorAll('.catalog__item')).forEach((categoryItem, categoryItemId) => {
			Array.from(document.querySelectorAll('.catalog__category label input')).forEach((input, inputId) => {
				if(input.value == target.closest('.catalog__item').innerText){
					input.checked = false
				}
			})
		})

		let removeElement = target.closest('.catalog__item');
		removeElement.remove();
	}

	// if(target.closest('.catalog-descr__all')){
	// 	if(target.tagName != 'IMG') return;

	// 	Array.from(document.querySelectorAll('.sizeItem')).forEach(categoryItem => {
	// 		Array.from(document.querySelectorAll('.filter-form__size-button label input')).forEach(input => {
	// 			if(input.value == target.closest('.sizeItem').innerText){
	// 				input.checked = false
	// 			}
	// 		})
	// 	})

	// 	let removeElement = target.closest('.sizeItem');
	// 	removeElement.remove();
	// }

	// if(target.closest('.catalog-descr__all')){
	// 	if(target.tagName != 'IMG') return;

	// 	Array.from(document.querySelectorAll('.colorItem')).forEach(categoryItem => {
	// 		Array.from(document.querySelectorAll('.filter-form__color-button label input')).forEach(input => {
	// 			if(input.value == target.closest('.colorItem').innerText){
	// 				input.checked = false
	// 			}
	// 		})
	// 	})

	// 	let removeElement = target.closest('.colorItem');
	// 	removeElement.remove();
	// }

	let lengthCategory = document.querySelectorAll('.catalog-descr__all div').length;
	let lengthColor = document.querySelectorAll('.catalog-descr__all div').length;
	let lengthSize = document.querySelectorAll('.catalog-descr__all div').length;

	if(lengthCategory == 0 && lengthColor == 0 && lengthSize == 0){
		document.querySelector('.catalog-descr__result p').style.display = 'none'
	} else {
		document.querySelector('.catalog-descr__result p').style.display = 'flex'
	}
})

let lengthCategory = document.querySelectorAll('.catalog-descr__all div').length;
let lengthColor = document.querySelectorAll('.catalog-descr__all div').length;
let lengthSize = document.querySelectorAll('.catalog-descr__all div').length;

if(lengthCategory <= 0 && lengthColor <= 0 && lengthSize <= 0){
	document.querySelector('.catalog-descr__result p').style.display = 'none'
}

// Устанавливаем минимальное значение
document.querySelector('.irs-handle.from').addEventListener('mouseup', ()=> {
	document.querySelector('.js-input-to').setAttribute('min', document.querySelector('.js-input-from').value)
})
// Устанавливаем максимальное значение
document.querySelector('.irs-handle.to').addEventListener('mouseup', ()=> {
	document.querySelector('.js-input-from').setAttribute('max', document.querySelector('.js-input-to').value)
})

document.querySelector('.js-input-to').addEventListener('keypress', function(e){
	var allowedChars = '0123456789';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1;
    }
    var invalidKey = e.key.length === 1 && !contains(allowedChars, e.key);
    invalidKey && e.preventDefault();
})
document.querySelector('.js-input-to').addEventListener('keyup', function(e){
	console.log(typeof document.querySelector('.js-input-to').getAttribute('min'))
	if(+document.querySelector('.js-input-to').value < +document.querySelector('.js-input-to').getAttribute('min')){
		document.querySelector('.js-input-to').value = document.querySelector('.js-input-to').getAttribute('min')
	}
})

document.querySelector('.js-input-from').addEventListener('keypress', function(e){
	var allowedChars = '0123456789';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1;
    }
    var invalidKey = e.key.length === 1 && !contains(allowedChars, e.key);
    invalidKey && e.preventDefault();
})
document.querySelector('.js-input-from').addEventListener('keyup', function(e){
	console.log(document.querySelector('.js-input-from').value)
	if(+document.querySelector('.js-input-from').value > +document.querySelector('.js-input-from').getAttribute('max')){
		document.querySelector('.js-input-from').value = document.querySelector('.js-input-from').getAttribute('max')
	}
})

let allProductCard = document.querySelectorAll('.product-card')

Array.from(allProductCard).forEach((basketItem, basketItemId, basketItemArray) => {
    let allbuttonSize = basketItem.querySelectorAll('.product-button__size')

    Array.from(allbuttonSize).forEach((deleteElement) => {
        deleteElement.addEventListener('click', function(event) {
			if(basketItem.childNodes[1].childNodes[1].childNodes[1].classList.contains('active')){
				basketItem.childNodes[1].childNodes[1].childNodes[1].classList.remove('active')
			} else {
				basketItem.childNodes[1].childNodes[1].childNodes[1].classList.add('active')
			}
        })
    })
});


window.addEventListener('keyup', function(e){
	if(e.key === "Escape") {
		document.querySelector('.filter-form').classList.remove('active')
		document.querySelector('.list-sort').classList.remove('active')
		document.querySelector('.list-category').classList.remove('active')
		document.querySelectorAll('.bg-swiper-container').forEach(el => {
			el.classList.remove('active')
		})
    }
})