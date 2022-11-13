// 7) Cria uma função que retorne a média das idades das pessoas.

const pessoas = [
    {id: 1, name: "Fabiana Araújo", age: 33 },
    {id: 2, name: "Gabriel Gomes", age: 25 },
    {id: 3, name: "Fernando Henrique", age: 17 },
    {id: 4, name: "Ana Luiza", age: 2 },
    {id: 5, name: "Geralda do Nascimento", age: 93 },
    {id: 6, name: "Miguel Souza", age: 70 },
    {id: 7, name: "Antonio Miguel", age: 69 },
    ];

var soma = 0 

/* Constante que tras todas as idades. */
const idades = pessoas.map(total => total.age);

/* função soma e tira a media de todas as idades. */
function mediaDeIdades(){

/* Função de repetção (For) que soma todas as idades. */
for(var i = 0; i < idades.length; i++) {
    soma += idades[i];
}
console.log("Total de somas das idades é: "+soma)   

soma = soma / idades.length

console.log("Medidia de idades é: "+soma)
}

mediaDeIdades()