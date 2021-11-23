// let vizualButton = document.querySelectorAll('.favorite-visualization__button button')
// Array.from(vizualButton).forEach((el, id, lems) => {
//     lems[0].addEventListener('click', function(event) {
//         if(lems[1].classList.contains('active')){
// 			lems[1].classList.remove('active')
// 		} else {
// 			lems[0].classList.add('active')
// 		}
//     });

// 	lems[1].addEventListener('click', function(event) {
//         if(lems[0].classList.contains('active')){
// 			lems[0].classList.remove('active')
// 		} else {
// 			lems[1].classList.add('active')
// 		}
//     });
// });

// visualizationThree.addEventListener('click', () => {
// 	find('.product-cards').style.gridTemplateColumns = '32% 32% 32%'
// })
// visualizationTwo.addEventListener('click', () => {
// 	find('.product-cards').style.gridTemplateColumns = '49.5% 49.5%'
// })

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

// Array.from(document.querySelectorAll('.open-modal')).forEach(el => {
// 	el.addEventListener('click', function(){
// 		document.querySelector('.modal').classList.add('active')
//     	document.querySelector('body').style.overflowY = 'hidden'
// 	})
// })


// window.addEventListener('click', e => {
//     if (!e.target.closest('.modal-content') && !e.target.closest('.open-modal')) {
//         document.querySelector('.modal').classList.remove('active')
// 		document.querySelector('body').style.overflowY = 'auto'
//     }
// })

// Открыть поисковое меню
btnHeaderSearch.addEventListener('click', () => {
	if(document,querySelector('.saearch-header').classList.contains('open')){
		document,querySelector('.saearch-header').classList.remove('open')
	}else {
		document,querySelector('.saearch-header').classList.add('open')
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

var swiperProductCard = new Swiper('.favorite-sper-content', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
	  },
});


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

window.addEventListener('click', e => {
	let target = e.target
	if(!target.closest('.product-button__size')){
		document.querySelectorAll('.bg-favorite').forEach(el => {
			el.classList.remove('active')
		})
	}
})

if (document.querySelector('.size-list')) { removeCardSize() }
function removeCardSize() {
	const cardElems = document.querySelectorAll('.new-product__item, .product-card')
	
	for (let i = 0; i < cardElems.length; i++) {
		const card = cardElems[i];
		card.addEventListener('mouseleave', () => {
			const sizeList = card.querySelector('.size-list')
			const bg = card.querySelector('.bg-swiper-container, .bg-favorite')
			sizeList.classList.remove('activator-list')

			if (bg) {
				bg.classList.remove('active')
			}
		})
	}
}

// window.addEventListener('keyup', function(e){
// 	if(e.key === "Escape") {
//         document.querySelector('.modal').classList.remove('active')
//         document.querySelector('body').style.overflowY = 'auto'
//     }
// })