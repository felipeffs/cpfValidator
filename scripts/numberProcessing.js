var urlParams= new URLSearchParams(window.location.search);
var dIni = urlParams.get('data_inicial');
var dFin = urlParams.get('data_final');
alert(dIni + dFin);
var n1 = new Date();
console.log(0);
var n2 = getDias(dFin);
var diasPassados = n2 + n1
document.write("total de dias passados = " + diasPassados)


function getDias(data) {
	var campos = data.split("-");
	var anos = Number(campos[0]);
		var meses = Number(campos[1]);
		var dias = Number(campos[2]);
		var totalDias = anos*365 + meses*30+ dias;
		return totalDias;
}