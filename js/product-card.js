document.querySelector('.product-buttons__other-like').addEventListener('click', () => {
    if(document.querySelector('.product-buttons__other-like').classList.contains('active')){
        document.querySelector('.product-buttons__other-like').classList.remove('active')
    } else {
        document.querySelector('.product-buttons__other-like').classList.add('active')
    }
})

document.querySelector('.table-size__button').addEventListener('click', ()=> {
    if(document.querySelector('.table-size__table').classList.contains('active')){
        document.querySelector('.table-size__table').classList.remove('active')
    } else {
        document.querySelector('.table-size__table').classList.add('active')
    }
})

document.querySelector('.table-size__button').addEventListener('click', ()=> {
    if(document.querySelector('.bg-table').classList.contains('active')){
        document.querySelector('.bg-table').classList.remove('active')
        document.querySelector('body').style.overflowY = 'inherit'
    } else {
        document.querySelector('.bg-table').classList.add('active')
        document.querySelector('body').style.overflowY = 'hidden'
    }
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('table') && !target.closest('.table-size__button')) {
        document.querySelector('body').style.overflowY = 'auto'
        document.querySelector('.table-size__table').classList.remove('active')
        document.querySelector('.bg-table').classList.remove('active')
    }
})