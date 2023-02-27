//Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.

function multiplicacion(a, b) {
    return a * b
}
console.log(multiplicacion(10, 3))



//Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor".

function edad(number) {
    if (number < 18) {
        console.log("Eres menor de edad")
    }
    else if (number >= 18 && number < 65) {
        console.log("Eres mayor de edad")
    }
    else {
        console.log("Eres un adulto mayor")
    }
}
console.log(edad(26))



//Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function sumaTresNumeros(num1, num2, num3) {
    if (typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != "number") {
        return 'Debo der ejecutada con números';
    }
    return num1 + num2 + num3;
}
console.log(sumaTresNumeros(10, 11, 12))


//Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

function primerosTresCaracteres(strin){
    if( typeof strin != "string"){
        return "Debo ser ejeutada con un string"
    }
    if(strin.length<3){
        return strin 
    }
    return strin.slice(0,3)
}
console.log(primerosTresCaracteres("Gonzalo"))


//Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.

function getPrecioMostrarIVA(precio){
    if(typeof precio != "number"){
        return "no es un formato correcto"
    }
    else{
    return precio =(precio + (precio * 0.21)).toFixed(2)
} 
}
console.log(getPrecioMostrarIVA(100.69))




//EXTRAS

//Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.

function penultimoCaracter(cadena){
    if(typeof cadena !== "string"){
        return "Debo ser ejecutada con un string";
    }
    else if(cadena.length < 2){
        return cadena.substring(0, 1);
    }
    else{
        return cadena.slice(-2, -1)
    }
}
console.log(penultimoCaracter("GONZALO"))


//Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".

function cuentaVocales(string){
    if(typeof string != "string"){
        return "Debo ser ejecutada con un string"
    }
    const vocales = "aeiou";
    let longitud = 0;
    for( let i=0; i< string.length; i++){
        for(let h=0; h< vocales.length; h++){
            if(string[i] === vocales[h]){
                longitud +=1;
            }
        }
    }
    return longitud;
}
console.log(cuentaVocales("Hola peñita"))


//Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.

function potencia(a, b){
    return a ** b;
}
console.log(potencia(2, 6))





//Ejercicios DOM

let botton = document.getElementById("boton");
console.log(botton)


//Crea una función que cuando se ejecute muestre un alert que diga “Hola”
function alerta(){
    alert("Hola!")
}
console.log(alerta())

//Investiga qué es addEventListener
document.getElementById("boton").addEventListener("Haz click", alerta)


