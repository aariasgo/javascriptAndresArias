const obtenerMenor = (numeros) =>{
    let menor = Infinity;
    for (let i = 0; i < numeros.length; i++){
        if (numeros [i]<=menor){
            menor = numeros [i];
        }
    }
    return (menor);
}
console.log(obtenerMenor([56465,125,44,796,2,14,75,1]))

const sumarNumeros = (numero) =>{
    let final =""
    for (let i = 0; i<numero.length; i++){
        final = parseInt(final+numero[i])
    }
    return final
}
console.log(sumarNumeros([2,2,2,2]))

/* ejercicio3*/
const contieneIndice = (numero,numeros) =>{
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]===numero){
            return true    
        }
    }
    return false
}
console.log(contieneIndice(54,[14,5,13,26,47,54]))//true
console.log(contieneIndice(1,[2,5,8,9,7,5,45,36]))//false

/**ejercicio 4 */
const separarPyG = (string)=>{
    const arrEmoji = string.sort().reverse();
    return arrEmoji
}
console.log(separarPyG(['😀','🍆','😀','🍆','😀','😀','😀','🍆']))

/**ejercicio 5 */
const estanJuntos = (personajes) =>{
    let frodo;
        if(personajes.indexOf('Frodo')===-1){
            frodo= Infinity
        } else{
            frodo= personajes.indexOf('Frodo')
        }
    let sam;
    if(personajes.indexOf('Sam')===-1){
        sam = Infinity
    }else{
        sam= personajes.indexOf('Sam')
    }
    return sam - frodo === 1 || sam - frodo === -1;
}
console.log(estanJuntos(['Sam','Frodo','legolas']));
console.log(estanJuntos(['Sam','legolas','Frodo']));
console.log(estanJuntos(['Frodo','Sam','Orco','legolas']));

/**ejercicio6 */
const obtenerIndice = (valor,array) =>{
    return array.indexOf(valor);
}
console.log(obtenerIndice(5,[47,89,2,6,7,1,6]))
console.log(obtenerIndice(5,[6,3,8,74,5,9,1]))

/**ejercicio7 */
const repetir = (valor, cantidad) =>{
    let arr=[]
    for (let i=0; i<cantidad; i++){
        arr.push(valor);
    }
    return arr;
}
console.log(repetir(5,6));

/**ejercicio 8 */
