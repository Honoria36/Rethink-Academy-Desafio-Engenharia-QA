// 4)  E então, desenvolva uma função que retorna um vetor com os nomes das pessoas. 
// Bônus: Retornar somente o primeiro nome. 
//OBS: Bônus OK.

var nomes = "Gabriel Gomes, Fernando Henrique, Ana Luiza, Geralda Nascimento, Miguel Souza, Antônio Miguel";   

/*variavel para tranforma espaço em virgula*/  
var primeironome = nomes.split(" ");  

/*Repetição de numeros pares*/  
for(i = 0; i < 11; i++){      
    console.log(primeironome[i++])
}