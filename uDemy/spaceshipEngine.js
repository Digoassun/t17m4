export default class {
    constructor(spaceship) {
        this.spaceship = spaceship
    }

    liga() {
        this.checarBateria().then(capacidadeAtual=> {
            console.log(`(${this.spaceship.nome}) Partida autorizada: carga atual ${capacidadeAtual}%`)
        }).catch(capacidadeAtual =>{
            console.log(`(${this.spaceship.nome}) Partida não autorizada: carga atual ${capacidadeAtual}%`)
        })
    }

    checarBateria() {
        return new Promise((resolve, reject) => {
            let capacidadeAtual = this.spaceship.porcent()
            if (capacidadeAtual >= 30) {
                resolve(capacidadeAtual)
            } else {
                reject(capacidadeAtual)
            }
        })
    }
}