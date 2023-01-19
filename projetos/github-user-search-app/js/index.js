const darkClearMode = document.getElementById('dark-clear-mode')
const searchBtn = document.getElementById('search-btn')
const image = document.getElementById('image')
const userName = document.getElementById('user-name')
const userA = document.getElementById('user-a')
const joinedDate = document.getElementById('joined-date')
const contactSpan = document.getElementsByClassName('contact-span')
const userInfoSummary = document.getElementById('user-info-summary')
const repositoriesNum = document.getElementById('repositories-num')
const followersNum = document.getElementById('followers-num')
const followingNum = document.getElementById('following-num')
const userCity = document.getElementById('user-city')
const userGithub = document.getElementById('user-github')
const userTwitter = document.getElementById('user-twitter')
const userBusiness = document.getElementById('user-business')
const userCityContent = document.getElementById('user-city-content')
const userGithubContent = document.getElementById('user-github-content')
const userTwitterContent = document.getElementById('logo-twitter-content')
const userBusinessContent = document.getElementById('business-outline-content')
const userCityIcon = document.getElementById('pin-outline')
const userGithubContentIcon = document.getElementById('link-outline')
const userTwitterContentIcon = document.getElementById('logo-twitter')
const userBusinessContentIcon = document.getElementById('business-outline')
const darkBrightBtn = document.getElementById('dark-clear-mode')
const body = document.getElementById('body')
const userRFFTitle = document.getElementsByClassName('user-rff-title')
const searchAppTitle = document.getElementById('search-app-title')
const searchAppInfo = document.getElementById('search-app-info')
const mainTitle = document.getElementById('main-title')
const searchAppArea = document.getElementById('search-app-area')
const sunny = document.getElementById('sunny')
const moon = document.getElementById('moon')
const userRFF = document.getElementById('user-rff')
const userRFFNumbers = document.getElementsByClassName('user-rff-numbers')
const searchInput = document.querySelector('input[type=search]')

darkBrightBtn.addEventListener('click', () => {

    searchInput.classList.toggle('bright')
    body.classList.toggle('bright')
    searchAppTitle.classList.toggle('bright')
    darkBrightBtn.classList.toggle('bright')
    searchAppArea.classList.toggle('bright')
    searchAppInfo.classList.toggle('bright')
    mainTitle.classList.toggle('bright')
    sunny.classList.toggle('bright')
    moon.classList.toggle('bright')
    userName.classList.toggle('bright')
    joinedDate.classList.toggle('bright')
    userRFF.classList.toggle('bright')
    searchInput.classList.toggle('bright')
    searchInput.classList.toggle('bright')

    for (let i of userRFFTitle) {
        i.classList.toggle('bright')
    }

    for (let i of userRFFNumbers) {
        i.classList.toggle('bright')
    }

    for (let i of contactSpan) {
        i.classList.toggle('bright')
    }
})

searchBtn.addEventListener('click', () => {
    let searchValue = document.getElementById('search-input').value

    const url = `https://api.github.com/users/${searchValue}`

    async function getUrl() {
        const response = await fetch(url)
        const data = await response.json()
        const dadeData = data.created_at.slice(0, data.created_at.length - 10)

        userName.innerHTML = data.name
        image.src = data.avatar_url
        userA.innerHTML = `@${data.login}`
        userA.href = data.html_url

        joinedDate.innerHTML = `Joined ${data.created_at.slice(0, 10).split('-').join('/')}`

        userInfoSummary.innerHTML = data.bio
        repositoriesNum.innerHTML = data.public_repos
        followersNum.innerHTML = data.followers
        followingNum.innerHTML = data.following

        userCityContent.innerHTML = data.location
        userCityContent.href = data.location
        userGithubContent.innerHTML = data.blog

        let userGithubLink = userGithub.href = data.blog
        userGithubContent.setAttribute('href', userGithubLink)
        userGithubContent.setAttribute('target', '_blank')

        userTwitterContent.innerHTML = `@${data.twitter_username}`
        let twitterLink = userTwitter.href = `https://twitter.com/${data.twitter_username}`
        userTwitterContent.setAttribute('href', twitterLink)
        userTwitter.setAttribute('target', '_blank')

        // console.log(data.twitter_username)
        userBusinessContent.innerHTML = data.company
        let userBusinessLink = userBusiness.href = data.company
        userBusinessContent.setAttribute('href', userBusinessLink)
        userBusinessContent.setAttribute('target', '_blank')

        let bodyColor = window.getComputedStyle(body, null)
        let bodyBgColor = bodyColor.getPropertyValue('background-color');
        const darkMode = 'rgb(20, 28, 48)'

        if (userInfoSummary.innerHTML == '' || userInfoSummary.innerHTML == null) {
            userInfoSummary.innerHTML = 'The profile has no bio.'
        }

        if (userCityContent.innerHTML == '' || userCityContent.innerHTML == null || userCityContent.innerHTML == '@null') {
            userCityContent.innerHTML = 'Not Available'

            if (bodyBgColor == darkMode) {
                userCityContent.style.color = 'white'
                userCityIcon.style.color = 'white'
            } else {
                userCityContent.style.color = '#8F95A5'
                userCityIcon.style.color = '#8F95A5'
            }
        }

        if (userGithubContent.innerHTML == '' || userGithubContent.innerHTML == null) {
            userGithubContent.innerHTML = 'Not Available'
            userGithubContent.removeAttribute('href')
            userGithubContent.removeAttribute('target', '_blank')


            if (bodyBgColor == darkMode) {
                userGithubContent.style.color = 'white'
                userGithubContentIcon.style.color = 'white'
            } else {
                userGithubContent.style.color = '#8F95A5'
                userGithubContentIcon.style.color = '#8F95A5'
            }
        }

        if (userTwitterContent.innerHTML == '' || userTwitterContent.innerHTML == '@null') {
            userTwitterContent.innerHTML = 'Not Available'
            userTwitter.removeAttribute('href')
            userTwitter.removeAttribute('target', '_blank')
            // userTwitterContentIcon.style.color = '#8F95A5'
            if (bodyBgColor == darkMode) {
                userTwitterContent.innerHTML = 'Not Available'
                userTwitterContent.style.color = 'white'
                userTwitterContentIcon.style.color = 'white'
            } else {
                userTwitterContent.innerHTML = 'Not Available'
                userTwitterContent.style.color = '#8F95A5'
                userTwitterContentIcon.style.color = '#8F95A5'
            }
        }

        if (userBusinessContent.innerHTML == '' || userBusinessContent.innerHTML == "null") {
            userBusinessContent.innerHTML = 'Not Available'
            userBusinessContent.style.color = '#8F95A5'
            userBusinessContent.removeAttribute('href')
            userBusinessContent.removeAttribute('target', '_blank')
            userBusinessContentIcon.style.color = '#8F95A5'
            if (bodyBgColor == darkMode) {
                userBusinessContent.innerHTML = 'Not Available'
                userTwitterContent.style.color = 'white'
                userBusinessContentIcon.style.color = 'white'
            } else {
                userBusinessContent.innerHTML = 'Not Available'
                userTwitterContent.style.color = '#8F95A5'
                userBusinessContentIcon.style.color = '#8F95A5'
            }
        }
    }
    console.log(getUrl())
})