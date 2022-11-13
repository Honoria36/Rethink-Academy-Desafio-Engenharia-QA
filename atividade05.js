// 5) Desenvolva uma função que insira um id único para cada pessoa no vetor 

const pessoas = [     
    {name: "Fabiana Araújo", age: 33 },     
    {name: "Gabriel Gomes", age: 25 },     
    {name: "Fernando Henrique", age: 17 },     
    {name: "Ana Luiza", age: 2 },     
    {name: "Geralda do Nascimento", age: 93 },     
    {name: "Miguel Souza", age: 70 },     
    {name: "Antonio Miguel", age: 69 },     
];  

/* Variavel cadastros utilizando map para manipulação de array.*/ 
var cadastros = pessoas.map(function(pessoas) {           
    return" Nome: " + pessoas.name + " Idade: " + pessoas.age; }); 
    
    /* Função com repetição for, tamanho cadastros */ 
    function cadastroComId(){         
        for (i = 0; i < cadastros.length; i++){             
            console.log("Id:" , i+1, cadastros[i] );     
        }  
    } 
            
cadastroComId()