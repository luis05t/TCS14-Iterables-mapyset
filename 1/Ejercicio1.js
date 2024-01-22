'use strict'
let arrayLike = {
    0: "Hola",
    1: "Mundo",
    length: 2
  };
  
  let arr = Array.from(arrayLike); 
  alert(arr.pop());
  /*Se declara una variable llamada arrayLike que contiene un objeto similar a un array.
   Este objeto tiene propiedades numéricas (0 y 1) que representan los elementos del "array" y una propiedad length que indica la longitud del "array".
  Se utiliza el método Array.from() para convertir el objeto arrayLike en un array real. Este método toma un objeto iterable
   y devuelve un nuevo array con los elementos del objeto iterable.
  El resultado de llamar a Array.from(arrayLike) se asigna a la variable arr. Ahora arr es un array que contiene los elementos del objeto arrayLike.
  Se utiliza el método pop() en el array arr. Este método elimina el último elemento del array y lo devuelve.
  El resultado de llamar a arr.pop() se pasa como argumento a la función alert(). Esto mostrará una ventana emergente con el valor del último elemento del array.*/
  