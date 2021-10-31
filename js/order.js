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