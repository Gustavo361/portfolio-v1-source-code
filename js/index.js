const toggleButton = document.getElementsByClassName('toggle-menu-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const btnBackTop = document.getElementById('btn-back-top')
const dataHabBtns = document.querySelectorAll('[data-hab-btns]')
const dataHabContents = document.querySelectorAll('[data-hab-contents]')
const btnContainer = document.getElementById('btn-container')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log('clicked')
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        btnBackTop.classList.add('active-top-btn')
    } else {
        btnBackTop.classList.remove('active-top-btn')
    }
})

btnBackTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

dataHabBtns.forEach(dataHabBtn => {
    dataHabBtn.addEventListener('click', () => {
        const target = document.querySelector(dataHabBtn.dataset.habBtns)
        dataHabContents.forEach(dataHabContent => {
            dataHabContent.classList.remove('active')
        })
        dataHabBtns.forEach(dataHabBtn => {
            dataHabBtn.classList.remove('active')
        })
        target.classList.add('active')
        dataHabBtn.classList.add('active')
    })
})