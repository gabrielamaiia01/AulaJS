// Definição de um objeto "pessoa"
let pessoa = {
    nome: "Gabriela", 
    //idade: 19, 
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


//Exercícios 
let carro = {
    marca: "Fiat", 
    modelo: "Palio", 
    ano: 2016
}

const { marca, modelo } = carro; 
console.log(marca); //Fiat 

let person = {
    nome: "Gabriela", 
    cargo: "Cronicamente Online", 
    endereco: {
        Rua: "Rua Bom Jesus",
        Cidade: "Recife", 
        Estado: "Pernambuco" 
    }
}
                        //Desentruturação aninhada: Desestruturação para extrair cidade e estado diretamente do objeto endereco
const {nome:nomeUsuario, cargo, endereco:{Rua,Cidade}} = person;
console.log(nomeUsuario)
console.log(Rua)

let configuracao = {
   tema: "Dark"
}

const {tema , modoEscuro = false } = configuracao
console.log(tema) //dark 
console.log(modoEscuro) //false 

//Exercícios Array 
let frutas = ["Maça", "banana", "uva"]; 
const {0:Elemento1, 1:Elemento2} = frutas
console.log(Elemento1, Elemento2)

let numeros = [10, 20, 30, 40]; 
const {2:terceiroNumero} = numeros; 
console.log(terceiroNumero)

let a = 5;
let b = 10;

[a, b] = [b, a]; // Troca de valores usando desestruturação


