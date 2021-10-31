let vizualButton = document.querySelectorAll('.favorite-visualization__button button')
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
	find('.product-cards').style.gridTemplateColumns = '32% 32% 32%'
})
visualizationTwo.addEventListener('click', () => {
	find('.product-cards').style.gridTemplateColumns = '49.5% 49.5%'
})

document.querySelector('.favorite-count span').innerHTML = document.querySelectorAll('.product-card').length



document.querySelector('.product-cards').addEventListener('click', (event) => {
	if (event.target.className != 'product-button__like') return;

	if (event.target.className == 'product-button__like'){
		document.querySelector('.favorite-count span').innerHTML--

		if(document.querySelector('.favorite-count span').innerHTML == 0){
			document.querySelector('.favorite-alert').style.display = 'block'
			document.querySelector('.favorite-visualization').style.display = 'none'
		} else {
			document.querySelector('.favorite-visualization').style.display = 'flex'
		}
	}

	let product = event.target.closest('.product-card');
    product.remove();
})
