
function soma (){
let a = 10;
let b = 20;
let c = 30 + a + b;  
let d = 60;          
return c;
}

function calculoSalario(salarioBase,adicionalSalario,auxilioAlimentacao){
let salarioFinal = salarioBase + salarioBase*adicionalSalario + auxilioAlimentacao;
return salarioFinal;
}

function imprima(){
texto = calculoSalario(1000,0.1,500);
document.write(texto);

}
function imprimaSoma(){
texto2 = soma();
document.write(texto2);
}
