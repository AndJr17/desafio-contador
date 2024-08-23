function saldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas

    let nivel;
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo <= 50) {
        nivel = "Prata";
    } else if (saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }


    return {
        saldo: saldo,
        nivel: nivel
    }
}


let numeroDeVitorias = 88
let numeroDeDErrotas = 26
let ranking = saldoVitorias(numeroDeVitorias,numeroDeDErrotas)
console.log(`O Herói tem um saldo de ${ranking.saldo} e está no nível ${ranking.nivel}`);