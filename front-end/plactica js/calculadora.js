const numero1 = document.getElementById('num1')
const operacion = document.getElementById('operador')
const numero2 = document.getElementById('num2')
const calculo = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

// btnCalcular.addEventListener('Click',calcular)

function calcular(){
    const operador = operacion.value
    const n1 = parseFloat(numero1.value)
    const n2 = parseFloat(numero2.value)

    if ((operador == "+" || operador == "-" || operador == "*" || operador == "/")
     && !isNaN(n1) && !isNaN(n2) ){
        let solucion
        switch (operador) {
            case "+":
                solucion= n1+ n2
                break;
            case "-":
                solucion= n1 - n2
                break;
            case "*":
                solucion= n1 * n2
                break;
            case "/":
                solucion= n1 / n2
                break;
        }
        resultado.innerText = n1 + operador + n2+" = " + solucion
        alert(solucion)
    }else{
        resultado.innerText = "Valor invalido"
    }
}