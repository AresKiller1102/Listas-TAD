let hashMap = new Map([
    //primera pareja de valores, 1 es la llave, 'Primero' es el valor que almacena
    [1,'Primero'],
     //segunda pareja de valores, 2 es la llave, 'Segundo' es el valor que almacena
    [2,'segundo'],
     //tercera pareja de valores, 3 es la llave, 'Tercero" es el valor que almacena
    [3,'Tercero']
])

console.log(hashMap);
console.log('tamaño del HashMap ='+hashMap.size);
console.log('valor de la key '+1+' = ' + hashMap.get(1));
console.log('contiene la key 3 =' + hashMap.has(2));
console.log(hashMap.set(9,'metodo set'));
console.log("borrar la pareja con la key 9 "+hashMap.delete(9));
console.log("el metodo .clear() "+hashMap.clear());
console.log(hashMap);