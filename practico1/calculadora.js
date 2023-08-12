function calcular() {
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    let operando = document.getElementById("operando").value;

    // validación de los operandos
    if (isNaN(num1) || isNaN(num2)) {
        alert("solo se admiten valores numéricos");
        return;
    }

    if (operando == "division" && num2 == 0) {
        alert("NO SE PUEDE DIVIDIR POR CERO");
        return;
    }

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