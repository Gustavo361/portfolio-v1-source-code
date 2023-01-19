const modalContainer = document.getElementById('modal-container')
const closeCircle = document.getElementsByName('close-circle-outline')[0]
const btnFechar = document.getElementById('fechar')
const name = document.getElementById('email_name')
const email = document.getElementById('email_id')
const message = document.getElementById('email_message')
const form = document.getElementById('form-id')
const errorElement = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    let errorMessage = [] 
    
    console.log('clicou no submit')

    if (name.value === '' || name.value == null) {
        errorMessage.push('nome inválido')
        e.preventDefault()
        name.style.borderColor = 'red'
    } else {
        e.preventDefault()
        name.style.borderColor = '#39FF14'
    }

    if (email.value === null || email.value === '') {
        errorMessage.push('e-mail inválido')
        e.preventDefault()
        email.style.borderColor = 'red'
    } else {
        e.preventDefault()
        email.style.borderColor = '#39FF14'
    }

    if (message.value == null || message.value === '') {
        errorMessage.push('sem mensagem alguma...')
        message.style.borderColor = 'red'
        e.preventDefault()
    } else {
        e.preventDefault()
        message.style.borderColor = '#39FF14'
    }

    if (errorMessage.length > 0) {
        e.preventDefault()
        errorElement.innerText = errorMessage.join(' | ')
    }

    if (errorMessage.length == 0) {

        // function sendEmail(e) {
        //     // e.preventDefault()
        //     Email.send({
        //         SecureToken: "5740105f-4137-42f7-830b-e7ae64c8fce3",
        //         To: 'gusatvofaustino361@gmail.com',
        //         From: email.value,
        //         Subject: "Contato com o Form",
        //         Body: message.value
        //     }).then(
        //         message => alert(message)
        //     );
        // }

        // sendEmail()
        // console.log('chegou sem erros')



        // var params = {
        //     from_name: document.getElementById('email_name').value,
        //     email_id: document.getElementById('email_id').value,
        //     message: document.getElementById('email_message').value
        // }

        // emailjs.send('service_eywy0hl', 'template_zpcjy2a', params).then(function () {
        //     modalContainer.classList.add('active')

        //     console.log(modalContainer)

        //     btnFechar.addEventListener('click', () => {
        //         modalContainer.classList.toggle('active')
        //     })

        //     closeCircle.addEventListener('click', () => {
        //         modalContainer.classList.toggle('active')
        //     })
        // })

        modalContainer.classList.add('active')

        // console.log(modalContainer)

        btnFechar.addEventListener('click', () => {
            modalContainer.classList.remove('active')
        })

        closeCircle.addEventListener('click', () => {
            modalContainer.classList.remove('active')
        })

        name.value = ''
        email.value = ''
        message.value = ''
    }
})