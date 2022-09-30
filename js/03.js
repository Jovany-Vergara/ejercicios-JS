// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = "";

do{
  let texto = prompt("Introduzca una cadena");

  if (cadena == ""){
    cadena = cadena + texto
  }

  else{
    cadena = cadena + "-" + texto
  }
}while(confirm ("Desea seguir?"))

alert(cadena)
