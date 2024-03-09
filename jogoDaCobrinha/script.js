const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// Manipulando o canvas
const pixel = 30
const cobrinha = [
    {x: 200, y: 200},
    {x: 230, y: 200},
    {x: 260, y: 200}
]

let direction

const desenharCobrinha = () => {
    ctx.fillStyle = "#ddd"

    cobrinha.forEach((posicao, indice) => {

        if (indice == cobrinha.length -1){
            ctx.fillStyle = "#FFFFFF"
        }

        ctx.fillRect(posicao.x, posicao.y, pixel, pixel)
    })
}

const moverCobrinha = () => {
    const head = cobrinha[cobrinha.length - 1]

    cobrinha.shift()

    if(direction == "right"){
        cobrinha.push({ x: head.x+30, y: head.y })
    }
}

desenharCobrinha()