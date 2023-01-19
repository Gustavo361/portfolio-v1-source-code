const clientCVC = document.getElementById('client-cvc')
const clientNumber = document.getElementById('client-number')
const clientName = document.getElementById('client-name')
const clientMonth = document.getElementById('client-month')
const clientYear = document.getElementById('client-year')

const form = document.getElementById('form-id')
const inputName = document.querySelector('[data-input-name]')
const inputCardNumber = document.querySelector('[data-input-number]')
const inputMonth = document.querySelector('[data-input-mm]')
const inputYear = document.querySelector('[data-input-yy]')
const inputCVC = document.querySelector('[data-input-cvc]')
const completeSection = document.getElementById('complete-section')
const errors = document.getElementsByClassName('error')

let errorCount = []

inputName.addEventListener('keyup', (e) => {
    let value = inputName.value
    clientName.innerText = value.trim()

    let RegExpLettersOnly = /^[a-zA-Z\s]*$/
    let res = RegExpLettersOnly.test(value)

    if (res && value != null && value != '') {
        inputName.classList.remove('error-border')
        errorCount = 0

        errors[1].classList.remove('active')
    } else {
        inputName.classList.add('error-border')

        errors[1].classList.add('active')
    }
})

inputCardNumber.addEventListener('keyup', (e) => {
    let value = inputCardNumber.value.trim()

    let RegNumbersOnly = /^[0-9 ]+$/;
    let res = RegNumbersOnly.test(value)

    let formatedValue = value.match(/.{1,4}/g)
    clientNumber.innerText = formatedValue.join(' ')

    if (res) {
        inputCardNumber.classList.remove('error-border')

        errorCount = 0
        errors[2].classList.remove('active')
    } else {
        inputCardNumber.classList.add('error-border')

        errorCount = errorCount + 1
        errors[2].classList.add('active')
    }
})

inputMonth.addEventListener('keyup', (e) => {
    let value = inputMonth.value
    clientMonth.innerText = value

    let RegNumbersOnly = /^[0-9]+$/;
    let res = RegNumbersOnly.test(value)

    if (res && value != '' && value != null) {
        inputMonth.classList.remove('error-border')
        errors[3].classList.remove('active')
        errorCount = 0
    } else {
        errors[3].classList.add('active')
        errorCount = errorCount + 1
        inputMonth.classList.add('error-border')
    }
})

inputYear.addEventListener('keyup', (e) => {
    let value = inputYear.value
    clientYear.innerText = value

    let RegNumbersOnly = /^[0-9]+$/;
    let res = RegNumbersOnly.test(value)

    if (res && value != '' && value != null) {
        errors[3].classList.remove('active')
        inputYear.classList.remove('error-border')

        errorCount = 0
    } else {
        errors[3].classList.add('active')
        inputYear.classList.add('error-border')
        errorCount = errorCount + 1
    }
})

inputCVC.addEventListener('keyup', (e) => {
    let value = inputCVC.value
    clientCVC.innerText = value

    let RegNumbersOnly = /^[0-9]+$/;
    let res = RegNumbersOnly.test(value)

    if (res) {
        errorCount = 0
        errors[4].classList.remove('active')
        inputCVC.classList.remove('error-border')
    } else {
        errorCount = errorCount + 1
        errors[4].classList.add('active')
        inputCVC.classList.add('error-border')
    }
})

form.addEventListener('submit', (e) => {
    let nameValue = inputName.value
    let numberValue = inputCardNumber.value
    let monthValue = inputMonth.value
    let yearValue = inputYear.value
    let cvcValue = inputCVC.value

    if (
        errorCount > 0 ||
        nameValue == null || nameValue == '' ||
        numberValue == null || numberValue == '' ||
        monthValue == null || monthValue == '' ||
        yearValue == null || yearValue == '' ||
        cvcValue == null || cvcValue == ''
    ) {
        e.preventDefault()
        errors[0].classList.add('active')
    } else {
        e.preventDefault()
        errors[0].classList.remove('active')
        form.style.display = 'none'
        completeSection.classList.add('active')
    }
})