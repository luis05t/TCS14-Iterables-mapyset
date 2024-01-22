'use strict'
let today = new Date();

today.setHours(0);
alert(today); 
today.setHours(0, 0, 0, 0);
alert(today);
/*A continuación, se utiliza el método setHours() para establecer las horas en 0. 
Esto significa que se establecerá la hora a las 00:00:00 de la fecha actual. Luego, se muestra el valor de today utilizando la función alert(),
 lo que mostrará la fecha y hora actualizada con las horas establecidas en 0.
Después, se utiliza nuevamente el método setHours() para establecer las horas, minutos, segundos y milisegundos en 0.
 Esto significa que se establecerá la hora a las 00:00:00:000 de la fecha actual. Luego, se muestra el valor de today utilizando la función alert(),
  lo que mostrará la fecha y hora actualizada con todas las partes de tiempo establecidas en 0.*/