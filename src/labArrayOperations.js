//1.ARRAY OPERATIONS

//Head. Implemente una función, tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const names = ["Paloma", "Fernando", "Carlos"];

const firstElement = ([first]) => first; //como argumento directamente paso un destructuring y luego, lo devuelvo.

console.log (firstElement(names));




//Tail. Implementa una función, tal que, dado un array como entrada devuelva todos menos el primer elemento. Utilizar operador rest.

const lastElements = ([,...otherNames]) => otherNames;

console.log (lastElements(names));




//Init. Implementa una función, tal que, dado un array como entrada devuelva todos los elementos menos el último. Usar métodos de Array.prototype.

const deleteLastElement = (array) => {
    array.pop(); //no olvidar los paréntesis que van después de pop.
    return array;
}
console.log(deleteLastElement(names));



//Last. implementa una función, tal que, dado un array como entrada devuelva el último elemento.
    //Uso array.prototype.length

const animals = ["tiger", "lion", "fish"];

const lastElement = (array) => {
 return array[array.length-1];
}

console.log(lastElement(animals));








