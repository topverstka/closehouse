// Открыть фильтр по категориям
find('.catalog-button__setting-category p').addEventListener('click', () => {
	if(find('.catalog-button__setting-category div').classList.contains('active')){
		find('.catalog-button__setting-category div').classList.remove('active')
	} else {
		find('.catalog-button__setting-category div').classList.add('active')
		find('.catalog-button__setting-filter div').classList.remove('active')
		find('.catalog-button__setting-sort div').classList.remove('active')
	}
})

// Открыть фильтры
find('.catalog-button__setting-filter p').addEventListener('click', () => {
	if(find('.catalog-button__setting-filter div').classList.contains('active')){
		find('.catalog-button__setting-filter div').classList.remove('active')
	} else {
		find('.catalog-button__setting-filter div').classList.add('active')
		find('.catalog-button__setting-category div').classList.remove('active')
		find('.catalog-button__setting-sort div').classList.remove('active')
	}
})

// Отрыть соритровку
find('.catalog-button__setting-sort p').addEventListener('click', () => {
	if(find('.catalog-button__setting-sort div').classList.contains('active')){
		find('.catalog-button__setting-sort div').classList.remove('active')
	} else {
		find('.catalog-button__setting-sort div').classList.add('active')
		find('.catalog-button__setting-filter div').classList.remove('active')
		find('.catalog-button__setting-category div').classList.remove('active')
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

	if(target.closest('.list-category')){
		let categoryCheck = document.querySelector('.catalog-descr__result-category')
		let imgCategoryCheck = document.createElement('img');
		if(target.value != undefined){
			document.querySelector('.catalog-descr__result-category').classList.add('active')
			categoryCheck.innerHTML = `<div class="categoryItem"><p>${target.value}</p> <img src="./img/delete.svg"></div>`
		}
	}

	if(target.closest('.filter-form__size')){
		let categoryCheck = document.createElement('div');
		categoryCheck.setAttribute('class', 'sizeItem')
		let imgCategoryCheck = document.createElement('img');
		imgCategoryCheck.setAttribute('src', './img/delete.svg')
		let textCategoryCheck = document.createElement('p');
		if(target.value != undefined){
			textCategoryCheck.innerHTML = target.value
			if(target.checked){
				document.querySelector('.catalog-descr__result-size').append(categoryCheck)
				categoryCheck.append(textCategoryCheck)
				categoryCheck.append(imgCategoryCheck)
				
			} else {
				Array.from(document.querySelectorAll('.catalog-descr__result-size div')).forEach(el => {
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
		let imgCategoryCheck = document.createElement('img');
		imgCategoryCheck.setAttribute('src', './img/delete.svg')
		let textCategoryCheck = document.createElement('p');
		if(target.value != undefined){
			textCategoryCheck.innerHTML = target.value
			if(target.checked){
				document.querySelector('.catalog-descr__result-color').append(categoryCheck)
				categoryCheck.append(textCategoryCheck)
				categoryCheck.append(imgCategoryCheck)
				
			} else {
				Array.from(document.querySelectorAll('.catalog-descr__result-color div')).forEach(el => {
					if(target.value == el.childNodes[0].innerHTML){
						el.remove()
					}
				})
			}
			
		}
	}

	if(target.closest('.catalog-descr__result-category')){
		if(target.tagName != 'IMG') return;

		
		let removeElement = target.closest('.categoryItem');
		removeElement.remove();
	}

	if(target.closest('.catalog-descr__result-size')){
		if(target.tagName != 'IMG') return;

		
		let removeElement = target.closest('.sizeItem');
		removeElement.remove();
	}

	if(target.closest('.catalog-descr__result-color')){
		if(target.tagName != 'IMG') return;

		
		let removeElement = target.closest('.colorItem');
		removeElement.remove();
	}

	let lengthCategory = document.querySelectorAll('.catalog-descr__result-category div').length;
	let lengthColor = document.querySelectorAll('.catalog-descr__result-size div').length;
	let lengthSize = document.querySelectorAll('.catalog-descr__result-color div').length;

	if(lengthCategory == 0 && lengthColor == 0 && lengthSize == 0){
		document.querySelector('.catalog-descr__result p').style.display = 'none'
	} else {
		document.querySelector('.catalog-descr__result p').style.display = 'block'
	}
})

let lengthCategory = document.querySelectorAll('.catalog-descr__result-category div').length;
let lengthColor = document.querySelectorAll('.catalog-descr__result-size div').length;
let lengthSize = document.querySelectorAll('.catalog-descr__result-color div').length;

if(lengthCategory <= 0 && lengthColor <= 0 && lengthSize <= 0){
	document.querySelector('.catalog-descr__result p').style.display = 'none'
}


