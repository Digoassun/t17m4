import fetch from "node-fetch";

function geraUsuarios() {
  let userNum = Math.floor(Math.random() * 5);
  console.log(userNum);
  let url = `https://randomuser.me/api/?results=${userNum}`;
  fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((dados) => {
      dados.results.forEach((element) => {
        console.log(element.name.first, element.name.last);
      });
    });
}

geraUsuarios();
