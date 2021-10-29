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

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
        
function convertToHex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

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