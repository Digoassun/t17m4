//console.log('hello world')

// setTimeout(() => {
// console.log('str')

// }, 1000);


const comunicacaoPerdida = function (boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolean == true) {
                resolve("Ok, todos vivos na estação")
            } else {
                reject("Comunicação perdida")
            }
        }, 2500)
    })
}

comunicacaoPerdida(false).then((resposta) => {
    console.log(`Sucesso: ${resposta}`)
}).catch((erro) => {
    console.log(`Falha:${erro}`)
})