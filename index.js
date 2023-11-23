//defino constantes para que objetengo de los id y clases del HTML

const mainScreen = document.getElementById('main_screen');
const calcScreen = document.getElementById('calc_screen');
const numButton = document.querySelectorAll('.number');  // seleccina la clase
const operatorButton = document.querySelectorAll ('.operator');


// defino clase para funciones de calculo
class Calculator {  
         plus (num1, num2){
            return num1 + num2;
        };

         minus (num1, num2){
            return num1 - num2;
        };
         divide (num1, num2){
            return num1 / num2;
        };
         multi (num1, num2){
            return num1 * num2;
        };
         rest (num1, num2){
            return num1 % num2;
        };

    };

const calculator = new Calculator();


console.log(calculator.plus(1, 2));
// console.log(calculator.minus(1, 2));
// console.log(calculator.divide(1, 2));
// console.log(calculator.multi(1, 2));
// console.log(calculator.rest(1, 2));

const btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    console.log ('presion boton')
})