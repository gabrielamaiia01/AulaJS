// Spread Operator (Operador de Espalhamento)

// Criando um array com três elementos
let primeiros = [1, 2, 3];

// Tentativa de adicionar um array dentro de outro (sem usar spread)
let numeros = [primeiros, 4, 5, 6];
console.log(numeros); 
// Saída: [[1, 2, 3], 4, 5, 6] → O array "primeiros" foi adicionado como um único elemento dentro de "numeros"

// Agora, usando o Spread Operator para espalhar os valores do array dentro de outro array
let numerosCorretos = [...primeiros, 4, 5, 6];
console.log(numerosCorretos); 
// Saída: [1, 2, 3, 4, 5, 6] → Os elementos de "primeiros" foram espalhados dentro do novo array


// Prática 1: Spread Operator com Objetos

let pessoa = {
    nome: "Gabriela",
    idade: 14
};

// Criando um novo objeto que herda as propriedades do objeto "pessoa" e adiciona uma nova propriedade
let sobrenome = {
    ...pessoa,  // Copia todas as propriedades do objeto "pessoa"
    LastName: "Maia" // Adiciona uma nova propriedade ao objeto
};

console.log(sobrenome);
// Saída: { nome: "Gabriela", idade: 14, LastName: "Maia" }


// Prática 2: Criando um novo objeto dentro de uma função usando Spread Operator

function novoobjeto(info) {
    let data = {
        ...info,  // Copia todas as propriedades do objeto passado como argumento
        sobrenome: "Maia",
        cargo: "Desenvolvedora",
        status: "ativo"
    };

    console.log(data);
}

// Chamando a função e passando um objeto com informações básicas
novoobjeto({ nome2: "Gabriela", idade2: 12 });
// Saída: { nome2: "Gabriela", idade2: 12, sobrenome: "Maia", cargo: "Desenvolvedora", status: "ativo" }
// O objeto original foi expandido com novas propriedades

//Exercícios
let frutas1 = ["maçã", "banana", "uva"];
let frutas2 = [...frutas1, "laranja", "manga"];
console.log(frutas2);  
// Saída esperada: ["maçã", "banana", "uva", "laranja", "manga"]

let numero = [1, 2, 3];
let letras = ["a", "b", "c"];

// Seu código aqui
let tudoJunto = [...numero, ...letras]

console.log(tudoJunto);  
// Saída esperada: [1, 2, 3, "a", "b", "c"]

let original = ["azul", "verde", "amarelo"];

// Seu código aqui
let copia = [...original]

console.log(copia); // Saída esperada: ["azul", "verde", "amarelo"]

let pessoa1 = { nome: "Gabriela", idade: 20 };

// Seu código aqui
let pessoaCompleta = {
    ...pessoa1,
    cidade: "Recife",
    cargo: "Desenvolvedora"
}

console.log(pessoaCompleta);  
// Saída esperada: { nome: "Gabriela", idade: 20, cidade: "Recife", profissão: "Desenvolvedora" }

//Exercicio
function adicionarInfo(obj) {

    let novoObjeto1 = {
        ...obj,
        status: "Ativo",
        anoEntrada: 2024
    }
    
    console.log(novoObjeto1)
 }
 
 // Testando a função
 let aluno = { nome: "João",
     curso: "ADS" };
 adicionarInfo(aluno)
 // Saída esperada: { nome: "João", curso: "ADS", status: "ativo", anoEntrada: 2024 }
 
