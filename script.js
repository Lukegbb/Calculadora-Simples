function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        // Substitui `x` por `*` para compatibilidade com eval
        expression = expression.replace(/x/g, '*');
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Erro";
    }
}
