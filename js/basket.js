// Активация/деактивация меню размеров
let allButtonSize = document.querySelectorAll('.button-size')
let allLineSize = document.querySelectorAll('.line-size')
let allBg = document.querySelectorAll('.basket-content__item-bg')
let allSettingSize = document.querySelectorAll('.setting-size')
let allButtonColor = document.querySelectorAll('.button-color')
let allLineColor = document.querySelectorAll('.line-color')
let allSettingColor = document.querySelectorAll('.setting-color')

Array.from(allButtonSize).forEach((el, id) => {
    el.addEventListener('click', function(event) {
		Array.from(allLineSize).some((lineSize, number, allLinesizes) => {
			if(allLinesizes[id].classList.contains('active')){
                // allLinesizes[id].addEventListener('mouseleave', function(){
                //     console.log(123123)
                // })
				allLinesizes[id].classList.remove('active')
                Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                    allSettingSize[id].style.zIndex = '2'
                });
                Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                    allSettingColor[id].style.opacity = '1'
                    allSettingColor[id].style.pointerEvents = 'auto'
                });
			} else {
                allLinesizes[id].addEventListener('mouseleave', function(){
                    allLinesizes[id].classList.remove('active')
                    Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                        allSettingSize[id].style.zIndex = '2'
                    });
                    Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                        allSettingColor[id].style.opacity = '1'
                        allSettingColor[id].style.pointerEvents = 'auto'
                    });
                })
				allLinesizes[id].classList.add('active')
                Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                    allSettingSize[id].style.zIndex = '3'
                });
                Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                    allSettingColor[id].style.opacity = '0.5'
                    allSettingColor[id].style.pointerEvents = 'none'
                });
			}



			return allLinesizes[id]
		});
    });
});

// Активация/деактивация меню цвета

Array.from(allButtonColor).forEach((el, id) => {
    el.addEventListener('click', function(event) {
		Array.from(allLineColor).some((lineSize, number, allLineColor) => {
			if(allLineColor[id].classList.contains('active')){
				allLineColor[id].classList.remove('active')
                Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                    allSettingSize[id].style.opacity = '1'
                    allSettingSize[id].style.pointerEvents = 'auto'
                });
                Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                    allSettingColor[id].style.zIndex = '2'
                });
			} else {
                allLineColor[id].addEventListener('mouseleave', function(){
                    allLineColor[id].classList.remove('active')
                    Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                        allSettingSize[id].style.opacity = '1'
                        allSettingSize[id].style.pointerEvents = 'auto'
                    });
                    Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                        allSettingColor[id].style.zIndex = '2'
                    });
                })
				allLineColor[id].classList.add('active')
                Array.from(allSettingSize).forEach((lineSize, number, allBg) => {
                    allSettingSize[id].style.opacity = '0.5'
                    allSettingSize[id].style.pointerEvents = 'none'
                });
                Array.from(allSettingColor).forEach((lineSize, number, allBg) => {
                    allSettingColor[id].style.zIndex = '3'
                });
			}

			return allLineColor[id]
		});
    });
});

// Поставляем значения выбранные пользователем по размеру
let allBasketItem = document.querySelectorAll('.basket-content__item')
Array.from(allBasketItem).forEach((basketItem) => {
    let allRadioSize = basketItem.querySelectorAll('.size-radio')

    Array.from(allRadioSize).forEach((radioSize) => {
        radioSize.addEventListener('click', function(event) {
            basketItem.childNodes[5].childNodes[1].childNodes[1].innerHTML = radioSize.value
            basketItem.childNodes[1].classList.remove('active')
            basketItem.childNodes[5].childNodes[1].childNodes[3].classList.remove('active')
        })
    });

    basketItem.addEventListener('click', function(){
        let selectRadioSize = this.querySelectorAll('.size-radio')
        let selectButtonSize = this.querySelectorAll('.button-size')

        Array.from(selectRadioSize).forEach((el) => {
            if(el.value == selectButtonSize[0].innerHTML){
                el.checked = true
            }
        })
    })
});

// Преобразуем rgb в hex
let hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
        
function convertToHex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

// Поставляем значения выбранные пользователем по цвету
Array.from(allBasketItem).forEach((basketItem) => {
    let allRadioColor = basketItem.querySelectorAll('.color-radio')

    Array.from(allRadioColor).forEach((radioColor) => {
        radioColor.addEventListener('click', function(event) {
            basketItem.childNodes[5].childNodes[3].childNodes[1].childNodes[0].style.background = radioColor.value
            basketItem.childNodes[1].classList.remove('active')
            basketItem.childNodes[5].childNodes[3].childNodes[3].classList.remove('active')
        })
    });

    basketItem.addEventListener('click', function(){
        let selectRadioColor = this.querySelectorAll('.color-radio')
        let selectColorProduct = this.querySelectorAll('.button-color span')

        Array.from(selectRadioColor).forEach((el) => {
            if(el.value == convertToHex(selectColorProduct[0].style.backgroundColor)){
                el.checked = true
            }
        })
    })
});

var countProduct = document.querySelector('.basket-content__title p span')
// Удаление элемента из корзины
Array.from(allBasketItem).forEach((basketItem, basketItemId, basketItemArray) => {
    let allDeleteElement = basketItem.querySelectorAll('.basket-content__item-close img')

    Array.from(allDeleteElement).forEach((deleteElement) => {
        deleteElement.addEventListener('click', function(event) {
            basketItem.style.display = 'none'
            countProduct.innerHTML = --basketItemArray.length

            // Выводим сообщение об отсутствии товаров
            if(countProduct.innerHTML == 0){
                document.querySelector('.basket-content__alert').style.display = 'block'
                document.querySelector('.basket-buttons').style.display = 'none'
            }
        })
    })
});

// Кол-во товаров в корзине
Array.from(allBasketItem).forEach((basketItem, basketItemId, basketItemArray) => {
    countProduct.innerHTML = basketItemArray.length

    // Выводим сообщение об отсутствии товаров
    if(countProduct.innerHTML == 0){
        document.querySelector('.basket-content__alert').style.display = 'block'
        document.querySelector('.basket-buttons').style.display = 'none'
    }
});

// // открытие модального окна
// document.querySelector('.open-modal').addEventListener('click', function(){
//     document.querySelector('.modal').classList.add('active')
//     document.querySelector('body').style.overflowY = 'hidden'
// })


// window.addEventListener('click', e => {
//     if (!e.target.closest('.modal-content') && !e.target.closest('.open-modal')) {
//         document.querySelector('.modal').classList.remove('active')
//         document.querySelector('body').style.overflowY = 'auto'
//     }
// })

window.addEventListener('click', e => {
	const target = e.target
	if (!target.closest('.button-size') && !target.closest('.line-size')) {
		Array.from(document.querySelectorAll('.line-size')).forEach(el => {
			el.classList.remove('active')
		})
        Array.from(document.querySelectorAll('.setting-size')).forEach(el => {
			el.style.zIndex = '2'
		})
       
        Array.from(document.querySelectorAll('.setting-color')).forEach((el) => {
            el.style.opacity = '1'
            el.style.pointerEvents = 'auto'
        });
    }


    if (!target.closest('.button-color') && !target.closest('.line-color')) {
		Array.from(document.querySelectorAll('.line-color')).forEach(el => {
			el.classList.remove('active')
		})
        Array.from(document.querySelectorAll('.setting-color')).forEach(el => {
			el.style.zIndex = '2'
		})

        Array.from(document.querySelectorAll('.setting-size')).forEach((el) => {
            el.style.opacity = '1'
            el.style.pointerEvents = 'auto'
        });
    }

    if (!target.closest('.button-color') && !target.closest('.line-color') && !target.closest('.button-size') && !target.closest('.line-size')){
        Array.from(document.querySelectorAll('.basket-content__item-bg')).forEach(el => {
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
			const bg = card.querySelector('.bg-swiper-container')
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