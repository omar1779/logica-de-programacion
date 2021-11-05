/*1) Programa una función que cuente el número de caracteres de una cadena de texto
, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto
caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo */


function contar() {
    let x = "aprendiendo a programar con Jon Mircha"
    console.log("esta cadena de texto tiene "+x.length+" caracteres");
}
const contar2 =() => {
    let x = "aprendiendo a programar con Jon Mircha"
    console.info("esta cadena de texto tiene "+x.length+" caracteres");
}
/*contar()
resultado 38 caracteres*/

function dividirCaracteres() {
    let miCadena = "aprendiendo a programar con Jon Mircha";
    let divisiones = miCadena.split(" ", 1);
    console.log(divisiones)
}
const dividirCaracteres2 =() => {
    let miCadena = "aprendiendo a programar con Jon Mircha";
    let divisiones = miCadena.split(" ", 1);
    console.log(divisiones)
}
/*dividirCaracteres() devuelve la primera palabra*/

function archivar () {
    let arreglo = "aprendiendo a programar con Jon Mircha"
    let divisiones = arreglo.split( " " );
    console.log(divisiones)
}
const archivar2 = () => {
    let arreglo = "aprendiendo a programar con Jon Mircha"
    let divisiones = arreglo.split( " " );
    console.log(divisiones)
}
/*archivar() devuelve un array con las palabras definidas en la variable arreglo*/

function repetir() {
    let miCadena = "aprendiendo a programar con Jon Mircha ";
    let repeticiones = miCadena.repeat(3);
    console.log(repeticiones)
}
const repetir =() => {
    let miCadena = "aprendiendo a programar con Jon Mircha ";
    let repeticiones = miCadena.repeat(3);
    console.log(repeticiones)
}
/*repetir() devuelve 3 veces la oracion*/

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas")
devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
devolverá  "1, 2, 3, 4 y 5.*/