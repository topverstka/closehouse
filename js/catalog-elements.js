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

visualizationThree.addEventListener('click', () => {
	// let allSwiperSlide = findAll('.swiper-slide')
	// let widthContainer = find('.catalog-swiper-container').offsetWidth
	find('.product-cards').style.gridTemplateColumns = '32% 32% 32%'

	// Array.from(allSwiperSlide).forEach(el => {
	// 	el.style.width = `${widthContainer}px`
	// });
})

visualizationTwo.addEventListener('click', () => {
	// let allSwiperSlide = findAll('.swiper-slide')
	// let widthContainer = find('.catalog-swiper-container').offsetWidth
	find('.product-cards').style.gridTemplateColumns = '49.5% 49.5%'

	// Array.from(allSwiperSlide).forEach(el => {
	// 	el.style.width = `${widthContainer}px`
	// });
})