// Активация/деактивация меню размеров
document.querySelector('.button-size').addEventListener('click', () => {
    if(document.querySelector('.line-size').classList.contains('active')){
        document.querySelector('.line-size').classList.remove('active')
        document.querySelector('.basket-content__item-bg').classList.remove('active')
        document.querySelector('.setting-size').style.zIndex = '0'
    } else {
        document.querySelector('.line-size').classList.add('active')
        document.querySelector('.basket-content__item-bg').classList.add('active')
        document.querySelector('.setting-size').style.zIndex = '2'
    }
})

// Активация/деактивация меню цвета
document.querySelector('.button-color').addEventListener('click', () => {
    if(document.querySelector('.line-color').classList.contains('active')){
        document.querySelector('.line-color').classList.remove('active')
        document.querySelector('.basket-content__item-bg').classList.remove('active')
        document.querySelector('.setting-color').style.zIndex = '0'
    } else {
        document.querySelector('.line-color').classList.add('active')
        document.querySelector('.basket-content__item-bg').classList.add('active')
        document.querySelector('.setting-color').style.zIndex = '2'
    }
})

// Поставляем значения выбранные пользователем по размеру
let sizeProduct = document.querySelectorAll('.button-size')
let allRadioSize = document.querySelectorAll('.size-radio')
Array.from(allRadioSize).forEach(radioSize => {
    radioSize.addEventListener('click', function(event) {
       document.querySelector('.button-size').innerHTML = radioSize.value
    });

    Array.from(sizeProduct).forEach(el => {
        if(radioSize.value == el.innerHTML){
            radioSize.checked = true
        }
    });
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
let colorProduct = document.querySelectorAll('.color-prod')
let allRadioColor = document.querySelectorAll('.color-radio')
Array.from(allRadioColor).forEach(radioColor => {
    radioColor.addEventListener('click', function(event) {
       document.querySelector('.button-color span').style.background  = radioColor.value
    });

    Array.from(colorProduct).forEach(el => {
        if(radioColor.value == convertToHex(el.style.backgroundColor)){
            radioColor.checked = true
        }
    });
});