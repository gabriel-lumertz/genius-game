let order = []
let clickedOrder = []
let score = 0

// 0 => verde
// 1 => vermelho
// 2 => amarelo
// 3 => azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

// cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order) {
        let elementColor = creatColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

// acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('.selected')
    }, number - 250)

    setTimeout(() => {
        element.classList.remove('.selectd')
    })
}

// checa os botões clicacos
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLevel()
    }
}

// click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    creatColorElement(color).classList.add('.selected')

    setTimeout(() => {
        creatColorElement(color).classList.remove('.selected')
        checkOrder()
    }, 250)
}

// criar cor
let creatColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue
    }
}

// criar próxima rodada
let nextLevel = () => {
    score++
    shuffleOrder()
}

// encerrar jogo
let gameOver = () => {
    alert(`Pontução: ${score}!\nVocê perdeu\nClique em OK para iniciar um novo jogo.`)
    order = []
    clickedOrder = []

    // playGame()
}

// iniciar jogo
let playGame = () => {
    alert('Bem-vindo ao Genius')
    score = 0
    nextLevel()
}

green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

playGame()