// import fetch from 'node-fetch';

// function geraUsuarios(usersNum) {
//     let url = `https://randomuser.me/api/?results=${usersNum}`
//     usersNum = Math.floor(Math.random * (10))
//     fetch(url)
//         .then((resposta) => {
//             return resposta.json();
//         })
//         .then((dados) => {
//             console.log(dados);
//         });
// }

// geraUsuarios()

import fetch from "node-fetch";
import chalk from 'chalk';

function geraUsuarios() {
    let userNum = Math.floor(Math.random() * 5)
    console.log(userNum)
    let url = `https://randomuser.me/api/?results=${userNum}`
    fetch(url)
        .then((resposta) => {
            return resposta.json()
        })
        .then((dados) => {
            dados.results.forEach((element) => {
                console.log(chalk.green(element.name.first), chalk.green(element.name.last))
            })
        })
        .catch((e)=>{
            console.log(chalk.red(e))
        })
}

geraUsuarios();