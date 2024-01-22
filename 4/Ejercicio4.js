'use strict'
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(rest[0]); 
alert(rest[1]); 
alert(rest.length); 
/*En este caso, se tiene un array de nombres ["Julius", "Caesar", "Consul", "of the Roman Republic"]. 
El objetivo es extraer los primeros dos nombres y almacenar el resto de los elementos en un nuevo array.
El código utiliza la sintaxis de desestructuración para asignar los primeros dos elementos del array a 
las variables name1 y name2, respectivamente. Luego, utiliza el operador de propagación (...) para asignar 
el resto de los elementos a la variable rest, que se convierte en un nuevo array.
A continuación, se utilizan las funciones alert() para mostrar los valores del primer y segundo elemento 
del array rest, así como la longitud del array rest.
El resultado de ejecutar este código sería mostrar las siguientes alertas:
"Consul" (primer elemento del array rest)
"of the Roman Republic" (segundo elemento del array rest)
2 (longitud del array rest)*/