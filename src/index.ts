



import { Passaro } from './Passaro';


//Object sem a interface
let papagaio = new Passaro(true, 'masculino')
console.log(papagaio)

//Object com a interface
//let papagaio = new Passaro()
console.log(papagaio.velocidadeAtual())

console.log(papagaio.passaroAnda())




/* //instânciar a classe Carro - criando Object Fusca
let fusca = new Carro("Fusca", 2);
console.log(fusca);

let gol = new Carro("Gol", 4);
console.log(gol);

let ge = new Pessoa("Geysa", "Gol");
console.log(ge);

let concess = new Concessionaria("sete de stembro", [
  "tl-1971",
  "lamborguine",
  "brasilia"
]);
console.log(concess); */
