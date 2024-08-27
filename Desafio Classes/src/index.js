class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }


atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usando magia';
        break;
      case 'guerreiro':
        ataque = 'usando espada';
        break;
      case 'monge':
        ataque = 'usando artes marciais';
        break;
      case 'ninja':
        ataque = 'usando shuriken';
        break;
      default:
        ataque = 'fez um ataque desconhecido';
    }

    console.log(`O ${this.tipo} atacou ${ataque}`);
  }
}

const mago = new Heroi('Anderson', 20, 'Ninja');
const guerreiro = new Heroi('Pedro', 18, 'Guerreiro');

mago.atacar(); 
guerreiro.atacar(); 