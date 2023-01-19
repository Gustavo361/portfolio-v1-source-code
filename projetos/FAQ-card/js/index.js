const questions = document.querySelectorAll('[data-question]')
const answers = document.querySelectorAll('[data-answer]')

// console.log(typeof answers)
// console.log(answers)

questions.forEach(question => {
    question.addEventListener('click', () => {

        const target = document.querySelector(question.dataset.question)
        // const target = document.querySelector(tab.dataset.tabTarget)

        questions.forEach(question => { //funciona
            question.classList.remove('active')
        })


        answers.forEach(answer => { //funciona
            answer.classList.remove('active')
        })


        question.classList.add('active') //funciona
        target.classList.add('active') //nao ta adcionando a class active

        // console.log(target.classList())
        console.log(typeof target)
    })
})


































// const questions = document.querySelector('a'),
//     answers = document.querySelector('')


// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         const targetQuestion = document.querySelector(question.dataset.targetQuestion) //pega a unica questao clicada
//         // let targetAnswer

//         answers.forEach(answer => {
//             answer.classList.remove('active')
//         })

//         questions.forEach(question => {
//             question.classList.remove('active')
//         })

//         targetQuestion.classList.add('active')
//         question.classList.add('active')

//         console.log(targetQuestion)
//         console.log(answers)
        
//     })
// })


// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const targetTab = document.querySelector(tab.dataset.tabTarget)
//         tabs.forEach(tab => {
//             tab.classList.remove('active')
//         })
//         tabContent.forEach(content => {
//             content.classList.remove('active')
//         })
//         targetTab.classList.add('active')
//         tab.classList.add('active')
//     })
// })

// data-tab-target.dataset.tabTarget
// topico - pega o VALOR do D.A. - tabs (data-tab-target) = #home / #pricing / #about
