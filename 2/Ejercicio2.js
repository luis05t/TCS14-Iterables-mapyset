'use strict'
let map = new Map();

map.set('1', 'str1');  
map.set(1, 'num1');    
map.set(true, 'bool1'); 

alert( map.get(1)   ); 
alert( map.get('1') ); 

alert( map.size );
/*Se crea un nuevo objeto Map vacío utilizando la sintaxis new Map().
Se utilizan los métodos set() para agregar pares clave-valor al mapa.
map.set('1', 'str1') agrega la clave '1' con el valor 'str1'.
map.set(1, 'num1') agrega la clave 1 con el valor 'num1'.
map.set(true, 'bool1') agrega la clave true con el valor 'bool1'. El mapa ahora contiene tres pares clave-valor: '1' -> 'str1', 1 -> 'num1' y true -> 'bool1'.
Se utilizan los métodos get() para obtener los valores asociados a las claves especificadas.
map.get(1) devuelve 'num1', ya que la clave 1 está asociada con el valor 'num1'.
map.get('1') devuelve 'str1', ya que la clave '1' está asociada con el valor 'str1'.
Se utiliza la propiedad size para obtener el número de pares clave-valor en el mapa. En este caso, map.size devuelve 3, ya que hay tres elementos en el mapa.*/