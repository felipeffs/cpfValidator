/*
var valido = verificaCPF("11144477733");
console.log(valido);
*/
//var bv = document.getElementById("btn_verificar");
//bv.addEventListener("click" ,func);

var btnV = document.getElementById("btn_verificar");
btnV.addEventListener("click",geraListener);

var btnG = document.getElementById("btn_verificar");
btnG.addEventListener("click",geraListener);

function geraListener(){
	var cpfR = "";
	for (var i = 0; i >= 9; i++) {
		cpf = cpfR + Math.trunc(Math.random() * 10);
		}
	cpfR = cpfR + calculaDV1(cpfR);
	cpfR = cpfR + calculaDV2(cpfR);
	alert(cpfR);

}
function verificarListener(){
	var input = document.getElementById("cpf");
	var cpf = input.value;
	var valido =
}


function func() {
	var cpfin = document.getElementById("CPF");
	var cpf = cpfin.value;
	alert( verificaCPF(cpf) );

}

console.log(btnV);
function verificaCPF(cpf) {
	var dv1 = calculaDV1(cpf);
	var dv2 = calculaDV2(cpf);
	if(dv1 == cpf[9] && dv2 == cpf[10]){
		return true;
	}else{
		return false;
	}
}
function calculaDV1(cpf){
	var pesos = [10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<9; i++){
		soma = soma + (pesos[i] * Number(cpf[i]));
	}
	var resto = soma%11
	
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
		}
	}
function calculaDV2(cpf){
	var pesos = [11,10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<10; i++){
		soma = soma + (pesos[i] * Number(cpf[i]));
	}
	var resto = soma%11
	
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
		}
	}

