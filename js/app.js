//Declaramos variables
var operandoa = 0;
var operandob = 0;
var operacion;
var numero;
var indicador = 0;
var indicadorigual = 0;
var operacionigual="";
var operandobigual = 0;

function click_teclas(elemento) {
	var tecla = 0;
	var no_display = document.getElementById("display").textContent;
	
	if (no_display == "0") {

		document.getElementById("display").textContent = numero;
	} else {
		
		if (document.getElementById("display").textContent.length <= 7) {
			document.getElementById("display").textContent = no_display + numero;
		}
	}


}



  document.getElementById("1").onclick = function(e){
	numero = "1";
	click_teclas(document.getElementById("1"));
  }
  document.getElementById("1").onmousedown = function(e) {
	document.getElementById("1").style.transform = 'scale(0.9)';
  }
  document.getElementById("1").onmouseup = function(e) {
	document.getElementById("1").style.transform = 'scale(1)';
  }

  document.getElementById("2").onclick = function(e){
	numero = "2";
      click_teclas(document.getElementById("2"));
  }
  document.getElementById("2").onmousedown = function(e) {
	document.getElementById("2").style.transform = 'scale(0.9)';
  }
  document.getElementById("2").onmouseup = function(e) {
	document.getElementById("2").style.transform = 'scale(1)';
  }

  document.getElementById("3").onclick = function(e){
	numero = "3";
      click_teclas(document.getElementById("3"));
  }
  document.getElementById("3").onmousedown = function(e) {
	document.getElementById("3").style.transform = 'scale(0.9)';
  }
  document.getElementById("3").onmouseup = function(e) {
	document.getElementById("3").style.transform = 'scale(1)';
  }

  document.getElementById("4").onclick = function(e){
	numero = "4";
      click_teclas(document.getElementById("4"));
  }
  document.getElementById("4").onmousedown = function(e) {
	document.getElementById("4").style.transform = 'scale(0.9)';
  }
  document.getElementById("4").onmouseup = function(e) {
	document.getElementById("4").style.transform = 'scale(1)';
  }

  document.getElementById("5").onclick = function(e){
	numero = "5";
      click_teclas(document.getElementById("5"));
  }
  document.getElementById("5").onmousedown = function(e) {
	document.getElementById("5").style.transform = 'scale(0.9)';
  }
  document.getElementById("5").onmouseup = function(e) {
	document.getElementById("5").style.transform = 'scale(1)';
  }

  document.getElementById("6").onclick = function(e){
	numero = "6";
      click_teclas(document.getElementById("6"));
  }
  document.getElementById("6").onmousedown = function(e) {
	document.getElementById("6").style.transform = 'scale(0.9)';
  }
  document.getElementById("6").onmouseup = function(e) {
	document.getElementById("6").style.transform = 'scale(1)';
  }

  document.getElementById("7").onclick = function(e){
	numero = "7";
      click_teclas(document.getElementById("7"));
  }
  document.getElementById("7").onmousedown = function(e) {
	document.getElementById("7").style.transform = 'scale(0.9)';
  }
  document.getElementById("7").onmouseup = function(e) {
	document.getElementById("7").style.transform = 'scale(1)';
  }

  document.getElementById("8").onclick = function(e){
	numero = "8";
      click_teclas(document.getElementById("8"));
  }
  document.getElementById("8").onmousedown = function(e) {
	document.getElementById("8").style.transform = 'scale(0.9)';
  }
  document.getElementById("8").onmouseup = function(e) {
	document.getElementById("8").style.transform = 'scale(1)';
  }

  document.getElementById("9").onclick = function(e){
	numero = "9";
      click_teclas(document.getElementById("9"));
  }
  document.getElementById("9").onmousedown = function(e) {
	document.getElementById("9").style.transform = 'scale(0.9)';
  }
  document.getElementById("9").onmouseup = function(e) {
	document.getElementById("9").style.transform = 'scale(1)';
  }

  document.getElementById("0").onclick = function(e){
	numero = "0";
      click_teclas(document.getElementById("0"));
  }
  document.getElementById("0").onmousedown = function(e) {
	document.getElementById("0").style.transform = 'scale(0.9)';
  }
  document.getElementById("0").onmouseup = function(e) {
	document.getElementById("0").style.transform = 'scale(1)';
  }


//Tecla Reset
document.getElementById("on").onclick = function(e) {
	resetear();
}
  document.getElementById("on").onmousedown = function(e) {
	document.getElementById("on").style.transform = 'scale(0.9)';
  }
  document.getElementById("on").onmouseup = function(e) {
	document.getElementById("on").style.transform = 'scale(1)';
  }


//Tecla de signo
document.getElementById("sign").onclick = function(e) {
	var num_mos = "";
	num_mos = document.getElementById("display").textContent.toString();
	if (num_mos.charAt(0)=="-") {
		document.getElementById("display").textContent = num_mos.substring(1, num_mos.length);
	} else {
		document.getElementById("display").textContent = "-" + num_mos;
	}
}
  document.getElementById("sign").onmousedown = function(e) {
	document.getElementById("sign").style.transform = 'scale(0.9)';
  }
  document.getElementById("sign").onmouseup = function(e) {
	document.getElementById("sign").style.transform = 'scale(1)';
  }


// Tecla mas
 document.getElementById("mas").onclick = function(e) {
	indicadorigual = 0;
	operacion_matematica();
	operacion = "+";
	limpiar();
 }
  document.getElementById("mas").onmousedown = function(e) {
	document.getElementById("mas").style.transform = 'scale(0.9)';
  }
  document.getElementById("mas").onmouseup = function(e) {
	document.getElementById("mas").style.transform = 'scale(1)';
  }


//Tecla menos 
 document.getElementById("menos").onclick = function(e) {
	indicadorigual = 0;
	operacion_matematica();
	operacion = "-";
	limpiar();
}
  document.getElementById("menos").onmousedown = function(e) {
	document.getElementById("menos").style.transform = 'scale(0.9)';
  }
  document.getElementById("menos").onmouseup = function(e) {
	document.getElementById("menos").style.transform = 'scale(1)';
  }


//Tecla por
document.getElementById("por").onclick = function(e) {
	indicadorigual = 0;
	operacion_matematica();
	operacion = "*";
	limpiar();
}
  document.getElementById("por").onmousedown = function(e) {
	document.getElementById("por").style.transform = 'scale(0.9)';
  }
  document.getElementById("por").onmouseup = function(e) {
	document.getElementById("por").style.transform = 'scale(1)';
  }


//Tecla entre
document.getElementById("dividido").onclick = function(e) {
	indicadorigual = 0;
	operacion_matematica();
	operacion = "/";
	limpiar();
}
  document.getElementById("dividido").onmousedown = function(e) {
	document.getElementById("dividido").style.transform = 'scale(0.9)';
  }
  document.getElementById("dividido").onmouseup = function(e) {
	document.getElementById("dividido").style.transform = 'scale(1)';
  }


//Tecla igual
document.getElementById("igual").onclick = function(e) {
	//click_tecla(document.getElementById("igual"));
	resolver();
}
  document.getElementById("igual").onmousedown = function(e) {
	document.getElementById("igual").style.transform = 'scale(0.9)';
  }
  document.getElementById("igual").onmouseup = function(e) {
	document.getElementById("igual").style.transform = 'scale(1)';
  }


//Click punto
  document.getElementById("punto").onclick = function(e) {
	var ipunto = 0;
  	for (var i = 0; i< document.getElementById("display").textContent.length; i++) {
		var caracter = document.getElementById("display").textContent.charAt(i);
		if (caracter == ".") {
			ipunto = ipunto + 1;
		}
	}

	if (ipunto == 0) {
		if (document.getElementById("display").textContent.length <= 7) {
			document.getElementById("display").textContent = document.getElementById("display").textContent + ".";
		}
	}
}
  document.getElementById("punto").onmousedown = function(e) {
	document.getElementById("punto").style.transform = 'scale(0.9)';
  }
  document.getElementById("punto").onmouseup = function(e) {
	document.getElementById("punto").style.transform = 'scale(1)';
  }




function limpiar() {
	document.getElementById("display").textContent = "";
}

function resetear() {
	document.getElementById("display").textContent = "0";
	operandoa = 0;
	operandob = 0;
	operacion = "";
	indicador = 0;
	indicadorigual = 0;
	operandobigual = 0;
	operacionigual = "";
}


//Funcion en donde se realizan las operaciones
function operacion_matematica() {
	var res = 0;

	if (indicador == 0) {
		operandoa = document.getElementById("display").textContent;
		indicador = 1;
		if (indicadorigual != 0) {
			operandob = operandobigual;
			operacion = operacionigual;

			switch(operacion) {
				case "+":
					res = parseFloat(operandoa) + parseFloat(operandob);
					break;

				case "-":
					res = parseFloat(operandoa) - parseFloat(operandob);
					break;

				case "*":
					res = parseFloat(operandoa) * parseFloat(operandob);
					break;
			
				case "/":
					res = parseFloat(operandoa) / parseFloat(operandob);
					break;
			}

			operandoa = res;
		}
	}  else {
		
		operandob = document.getElementById("display").textContent;
		
		switch(operacion) {
			case "+":
				res = parseFloat(operandoa) + parseFloat(operandob);
				break;

			case "-":
				res = parseFloat(operandoa) - parseFloat(operandob);
				break;

			case "*":
				res = parseFloat(operandoa) * parseFloat(operandob);
				break;
			
			case "/":
				res = parseFloat(operandoa) / parseFloat(operandob);
				break;
		}
		operandoa = res;
	}
}



	

function resolver() {
	var res = 0;
	var resultado = "";
	var ipunto = 0;

	operacion_matematica();
	operacionigual = operacion;
	operandobigual = operandob;
	indicadorigual = 1;

	resultado = operandoa.toString();
	if(resultado.length > 8) {
		for (var i = 0; i<resultado.length; i++) {
			var caracter = resultado.charAt(i);
			if (caracter == ".") {
				ipunto = ipunto + 1
			}
		}
		if (ipunto == 0) {
		document.getElementById("display").textContent = resultado.substring(0,7) + "e" + (resultado.length-7).toString();
		} else {
		document.getElementById("display").textContent = resultado.substring(0,8);
		}
   	} else {
  
 		document.getElementById("display").textContent = resultado;
   	}
   	indicador = 0;
}
		
	
	
		

	