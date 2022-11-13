let nome = "Ismael";
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
  nome: "Kevin",
  idade: 12,
  estaAprovado: true,
  sobrenome: "Freitas Mota",
  genero: "masculino",
  estudante: true,
  laser: "jogar futebol",
};

console.log(pessoa);

let familia = [true, 45, "Ismael", 22];
console.log(familia.length);
console.log(familia[2]);

let nomeDoColega = ["Kaio", 4, "Fortaleza"];
console.log(nomeDoColega);

let corSite = "azul";
function resetaCor(cor) {
  corSite = cor;
}

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

let numeroTeste = 5;
function alteraNumero(x) {
  numeroTeste = x;
}

console.log(numeroTeste);
alteraNumero(8);
console.log(numeroTeste);

const pessoa2 = {
  nome: "Ismael",
  idade: 38,
};

for (let chave in pessoa2) {
  console.log(pessoa2.idade);
}

const cores = ["vermelho", "azul", "verde"];
for (let indice in cores) {
  console.log(cores[1]);
}

const comidas = ["arroz", "feijao", "feijoada", "panelada", "hamburguer"];
for (let comida of comidas) {
  console.log(comida);
}

function maior(numero1, numero2) {
  if (numero1 > numero2) return numero1;
  else if (numero1 === numero2) return "numeros iguais";
  else return numero2;
  //return numero1 > numero2 ? numero1 : numero2;
}
console.log(maior(15, 16));
