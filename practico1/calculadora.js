function calcular() {
    console.log('Corriendo funcion "calcular"'); //verifica en consola que el programa corre

    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    let operando = document.getElementById("operando").value;

// validación de los operandos
    // /^[+-]?[0-9]+([.][0-9]+)?$/

    let exprRegulNumero = /^[+-]?[0-9]+([.][0-9]+)?$/;
    let esNumero = exprRegulNumero.test(num1) && exprRegulNumero.test(num2);

    if (!esNumero) {
        alert("solo se pueden ingresar valores numericos");
        return;
    }

    if (operando === "division" && num2 == 0) {
        alert("NO SE PUEDE DIVIDIR POR CERO");
        return;
    }
    
// luego de validar los operandos los convierto a numeros para poder calcular
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

// cálculo de las operaciones + resultado en display
    let resultado;
    switch (operando) {
        case ("suma"):
            resultado = num1 + num2;
            break;
        case ("resta"):
            resultado = num1 - num2;
            break;
        case ("multiplicacion"):
            resultado = num1 * num2;
            break;
        case ("division"):
            resultado = num1 / num2;
            break;
        default:
            alert("Se deben completar los 3 campos");
            return;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

document.getElementById("boton").addEventListener("click", calcular);




function borrar() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("operando").value = "";
    document.getElementById("resultado").innerHTML = "";
    return;
}

// operando1.reset();
// let operando1 = document.getElementById("laId")