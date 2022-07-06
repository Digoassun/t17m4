import fetch from 'node-fetch';

function geraUsuarios(usersNum) {
    let url = `https://randomuser.me/api/?results=${usersNum}`
    usersNum = Math.floor(Math.random * (10))
    fetch(url)
        .then((resposta) => {
            return resposta.json();
        })
        .then((dados) => {
            console.log(dados);
        });
}

geraUsuarios()