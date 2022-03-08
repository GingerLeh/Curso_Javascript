console.log("Olá Mundo");

const idade = 24; //nao pode mudar
let nome = "Alessa"; //pode mudar
console.log(idade);
//comentário

//conversão de tipos
console.log("Alessa tem" + idade + "anos");
console.log(parseInt("2") + parseInt("4")); //conversão de tipos, de str para int
console.log("10" / "2"); //nesse caso nao precisa do parse pq ele vai fazer a conversão automaticamente. 

//atribuição de variáveis
const sobrenome = "Santos";
console.log(nome,sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

//lista em javascript 
const listaDeLugares = new Array(
        `Salvador`,
        `Bahia`,
        `Acre`,
);
listaDeLugares.push(`Curitiba`) //adicionando

console.log(listaDeLugares);

listaDeLugares.splice(2,1) //tirar um item 
console.log(listaDeLugares[1]);

const idadeComprador = 15; 

if (idadeComprador >= 18){
    console.log("Comprador maior de idade")
}else{
    console.log("Menor de idade")
}

for (let cont = 0 ; cont < 3; cont++){
    console.log(listaDeLugares[cont])
}