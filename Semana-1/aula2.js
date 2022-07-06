import chalk from "chalk";

// const promise = new Promise((resolve, reject) => {
//     const temp = Math.floor(Math.random()*(45))
//     console.log(temp)
//         setTimeout(() => {
//             if (temp<37.5) {
//                 resolve("Paciente não febril")
//             } else {
//                 reject("Paciente febril")
//             }
//         })
//     })


// promise.then((resposta) => {
//     console.log(chalk.green(`[ALERTA]: ${resposta}`))
// }).catch((erro) => {
//     console.log(chalk.red(`[INFO]:${erro}`))
// })

function temperaturaPaciente() {
    const temp = Math.floor(Math.random() * 45);
    console.log(temp);
    return temp;
}

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (temperaturaPaciente() < 37) {
            resolve("Paciente não-febril");
        } else {
            reject("Paciente febril");
        }
    });
});

promessa
    .then((resposta) => {
        console.log(chalk.green(`[ALERTA]: ${resposta}`));
    })
    .catch((erro) => {
        console.log(chalk.red(`[INFO]: ${erro}`));
    });