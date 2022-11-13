// 6)Desenvolva uma função que retorna os dados das pessoas 
// para quem tem idade suficiente para tirar a primeira habilitação.

const pessoas = [     
    {id: 1, name: "Fabiana Araújo", age: 33 },     
    {id: 2, name: "Gabriel Gomes", age: 25 },     
    {id: 3, name: "Fernando Henrique", age: 17 },     
    {id: 4, name: "Ana Luiza", age: 2 },     
    {id: 5, name: "Geralda do Nascimento", age: 93 },     
    {id: 6, name: "Miguel Souza", age: 70 },     
    {id: 7, name: "Antonio Miguel", age: 69 },     
];      

const maiorDeIdade = pessoas.filter(maior => maior.age >= 18);          

console.log("Pessoas com idade suficiente para tirar a primeira habilitação:", maiorDeIdade)