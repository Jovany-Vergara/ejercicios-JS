// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

var edad = prompt("Introduce tu edad");
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
	//SI ES MAYOR DE 18
	if (edad > 18) {
		//IMPRIME EN PANTALLA EL MENSAJE
		alert("Puedes conducir");
	}
//SINÓ
else {
	//MUESTRA UN MENSAJE
	alert("No tienes edad para conducir");
}
