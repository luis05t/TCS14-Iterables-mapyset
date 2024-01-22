'use strict'
let user = {
    sayHi() { 
      alert("Hello");
    },
    [Symbol("id")]: 123, 
    something: undefined 
  };
  
  alert( JSON.stringify(user) );
  /*En este caso, se tiene un objeto llamado user con las siguientes propiedades y métodos:
sayHi(): una función que muestra una alerta con el mensaje "Hello".
[Symbol("id")]: una propiedad con un símbolo como clave y el valor 123.
something: una propiedad con el valor undefined.
El código utiliza el método JSON.stringify() para convertir el objeto user en una cadena de texto JSON.
 El método JSON.stringify() toma un objeto como argumento y devuelve una cadena de texto JSON que representa ese objeto.
Luego, se muestra el resultado de la conversión utilizando la función alert().
 Esto mostrará la cadena de texto JSON que representa el objeto user.
El resultado de ejecutar este código sería mostrar una alerta con el siguiente contenido:
{"something":null}
Observa que la propiedad [Symbol("id")] no se incluye en la cadena de texto JSON resultante.
 Esto se debe a que las propiedades con símbolos como claves no se incluyen en la representación JSON de un objeto.*/
