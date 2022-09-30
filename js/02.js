//BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA calificacion
do {
	//PIDE UNA calificacion POR TECLADO Y LA GUARDA EN LA VARIABLE calificacion
	let calificacion = prompt("Introduce tu calificacion");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(calificacion) == calificacion) {
		//SI LA calificacion ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (calificacion > 0 && calificacion <= 10) {
			if (calificacion < 3) {
				alert("Usted es un alumno Muy deficiente");
			}
			else if (calificacion < 5) {
				alert("Usted es un alumno Insuficiente");
			}
			else if (calificacion < 6) {
				alert("Usted es un alumno Suficiente");
			}
			else if (calificacion < 7) {
				alert("Usted es un alumno Bien");
			}
			else if (calificacion < 9) {
				alert("Usted es un alumno calificacionble"); 5
			}
			else if (calificacion >= 9) {
				alert("Usted es un alumno Sobresaliente");
			}
		}
		//SI LA calificacion NO ES ENTRE 0 Y 10
		else {
			alert("Ingreso una calificacion errónea");
		}
	}
	//SI LA calificacion INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (calificacion != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (calificacion != undefined);	//Undefined es cuando se pulsa Cancelar.
