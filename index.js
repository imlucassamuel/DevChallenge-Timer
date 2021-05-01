const userDate = document.querySelector('input[type="datetime-local"]')
const startPressed = document.querySelector('.start-countdown')
const restartPressed = document.querySelector('.restart')
const infoDate = document.querySelector('.date-info')
const timer = document.querySelector('.container')
const countdown = document.querySelectorAll('.timer')


startPressed.addEventListener('click', startCountdown)
restartPressed.addEventListener('click', restartCountdown)

function startCountdown(){
    restartPressed.classList.remove('invisible')
    startPressed.classList.add('invisible')
    infoDate.classList.add('removed-date')
    timer.classList.remove('start') 
    showCountdown()

    setInterval(showCountdown, 1000)
}

function showCountdown(){
    const startTimer = setDate()

    countdown.forEach((count, index) => {
        count.innerHTML = startTimer[index]
    })
}

function restartCountdown(){
    startPressed.classList.remove('invisible')
    restartPressed.classList.add('invisible')
    infoDate.classList.remove('removed-date')
    timer.classList.add('start')

    clearInterval(startCountdown)
}

function setDate() {
    const now = new Date()
    const date = new Date(userDate.value)
    const sum = Math.abs(now.getTime() - date.getTime())

    const days = Math.floor(sum / (1000 * 3600 * 24))
    const hours = Math.floor((sum / (1000 * 3600)) % 24)
    const minutes = Math.floor((sum / (1000 * 60)) % 60)
    const seconds = Math.floor((sum / 1000) % 60)

    
    return [days, hours, minutes, seconds]  
}







