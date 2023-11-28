
let homeCountEl = document.getElementById('home-count-el')
let guestCountEl = document.getElementById('guest-count-el')

let homeOneIncrementBtn = document.getElementById('home-one-increment-btn')
let homeTwoIncrementBtn = document.getElementById('home-two-increment-btn')
let homeThreeIncrementBtn = document.getElementById('home-three-increment-btn')
let guestOneIncrementBtn = document.getElementById('guest-one-increment-btn')
let guestTwoIncrementBtn = document.getElementById('guest-two-increment-btn')
let guestThreeIncrementBtn = document.getElementById('guest-three-increment-btn')
let resetBtnEl = document.getElementById('reset-btn-el')
let winnerEl = document.getElementById('winner-el')
let homeCount = 0
let guestCount = 0


/* HOME */
homeOneIncrementBtn.addEventListener('click', function() {
    homeCount += 1
    homeCountEl.textContent = homeCount
    highlight()
})

homeTwoIncrementBtn.addEventListener('click', function () {
    homeCount += 2
    homeCountEl.textContent = homeCount
    highlight()
})

homeThreeIncrementBtn.addEventListener('click', function () {
    homeCount += 3
    homeCountEl.textContent = homeCount
    highlight()
})

/* GUEST */

guestOneIncrementBtn.addEventListener('click', function () {
    guestCount += 1
    guestCountEl.textContent = guestCount
    highlight()
})

guestTwoIncrementBtn.addEventListener('click', function () {
    guestCount += 2
    guestCountEl.textContent = guestCount
    highlight()
})

guestThreeIncrementBtn.addEventListener('click', function () {
    guestCount += 3
    guestCountEl.textContent = guestCount
    highlight()
})

/* FUNCTION */ 

function highlight() {
    if (homeCount > guestCount) {
        homeCountEl.classList.add('highlight')
        guestCountEl.classList.remove('highlight')
        let homeScore = homeCount - guestCount
        winnerEl.textContent = `Home won by ${homeScore} score`
    } else if (homeCount === guestCount) {
        homeCountEl.classList.remove('highlight')
        guestCountEl.classList.remove('highlight')
        winnerEl.textContent = ''
        winnerEl.textContent = `Draw Game`
    } else {
        homeCountEl.classList.remove('highlight')
        guestCountEl.classList.add('highlight')
        let guestScore = guestCount - homeCount
        winnerEl.textContent = `Guest won by ${guestScore} score`
    }
}

resetBtnEl.addEventListener('click', function () {
    guestCount = 0
    homeCount = 0
    homeCountEl.textContent = 0
    guestCountEl.textContent = 0
    homeCountEl.classList.remove('highlight')
    guestCountEl.classList.remove('highlight')
    winnerEl.textContent = 'No one'
})




