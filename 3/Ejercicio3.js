let user = {
    name: "John",
    age: 30
  };
  

  for (let value of Object.values(user)) {
    alert(value); 
  }
  /*Se define un objeto llamado user con dos propiedades: name y age
  Se utiliza el bucle for...of para iterar sobre los valores del objeto user.
  Object.values(user) devuelve un array que contiene los valores de las propiedades del objeto user. En este caso, el array resultante sería ["John", 30].
En cada iteración del bucle, la variable value toma el valor de cada elemento del array, es decir, "John" y luego 30.
Dentro del cuerpo del bucle, se muestra el valor utilizando alert(value). En este caso, se mostraría "John" y luego 30 en la ventana emergente.*/