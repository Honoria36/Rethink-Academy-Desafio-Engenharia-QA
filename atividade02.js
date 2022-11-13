// 2) Com os dados abaixo, precisamos que você os manipule com a 
// linguagem de programação da sua preferência: 

const pessoas = [     
{ name: "Fabiana Araújo", age: 33 },     
{ name: "Gabriel Gomes", age: 25 },     
{ name: "Fernando Henrique", age: 17 },     
{ name: "Ana Luiza", age: 2 },     
{ name: "Geralda do Nascimento", age: 93 },     
{ name: "Miguel Souza", age: 70 },     
{ name: "Antonio Miguel", age: 69 },     
];  

// Variavel cadastros utilizando map para manipulação de array. 
var cadastros = pessoas.map(function(pessoas) {     
    return "Nome: " + pessoas.name + " Idade: " + pessoas.age; 
});  

//imprimir manipulação do array  
console.log(cadastros)
