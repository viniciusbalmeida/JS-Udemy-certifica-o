
console.log("Olá mundo!2")

alert("Amém")


 let numeroInteiro = 100;
 let numeroDecimal = 5.38;
 let numetoNegativo = -200.99;

 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);

 let operaçõesBasicas = " + , - , * , / "

let ola = "Olá";
let mundo = "mundo";
let olaMundo = ola + mundo
let olaMundo2 = ola.concat(mundo);
let olaMundo3 = ola.concat(mundo,"de Deus", ola);
let olaMundo4 = `${ola} ${mundo} ${1+1}`;
let verdadeiro = true;
let falso = false;
let comparacao = 1 == 1;

//Array//
let vetor = [1,22,0,100];
//exibira 22//
console.log(vetor[1]);


let array = [ 'apple', 'banana', 'cherry' ];
console.log( array[0] ); // Output: 'apple'

array.forEach( element => {
    console.log( element );
});

//Objeto//
let carro = {
    rodas: 4,
    portas:2,
    nome:"um carro",
    aVenda: true
};

//Objeto vazio //
let carro2 = {};
//add novo//
carro.portas = 2;
carro ["portas"] = 2;


//Funções//

let olaMundo5 = function(){
    console.log("Olá mundo!");
    console.log("Olá mundo novamente!");
    console.log("Olá mundo mais uma vez!"); 
}

olaMundo5();

let somar = function(valor1,valor2 ){
    let resultado = valor + valor2;
    console.log(resultado);
}

somar(1,2)
somar(4+4)
somar(99,1)








