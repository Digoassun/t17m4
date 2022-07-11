class Spaceship{
    constructor(nome, capacidadeAtual, capacidadeMax) {
        this.nome = nome,
        this.capacidadeAtual = capacidadeAtual,
        this.capacidadeMax = capacidadeMax
    }
    porcent() {
        return this.capacidadeAtual * 100 / this.capacidadeMax
    }
}

export default Spaceship

