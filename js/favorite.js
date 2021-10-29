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
