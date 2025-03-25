// Definição de um objeto "pessoa"
let pessoa = {
    nome: "Gabriela", 
    idade: 19, 
    sobrenome: "Maia", 
    profissao: "DEV" 
};

// Acessando propriedades de um objeto de forma tradicional
// console.log(pessoa.nome);
// console.log(pessoa.idade);

// Desestruturação de objetos para evitar repetição
const { nome: nomePessoa, idade } = pessoa; // Criamos variáveis para acessar diretamente as propriedades

console.log("Nome da pessoa: " + nomePessoa); // Gabriela
console.log("Idade: " + idade); // 19

// Definição de um array de nomes
let nomes = ["Gabriela", "Giovanna", "Maria"];

// Desestruturação de array por índice
let { 0: primeiraPessoa, 2: terceiraPessoa } = nomes; 
console.log("Primeira pessoa: " + primeiraPessoa); // Gabriela 
console.log("Terceira pessoa: " + terceiraPessoa); // Maria 

// Outra forma de desestruturação, pegando diretamente pelo índice
let [nome1] = nomes; // Pega o primeiro elemento do array
console.log("Nome1: " + nome1); // Gabriela
