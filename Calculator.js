function addition() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let result = a + b;
    display(result);
}
function subtraction() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let result = a - b;
    display(result);
}
function multiplication() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let result = a * b;
    display(result);
}
function division() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let result = a / b;
    display(result);
}
function power() {
    let a = parseFloat(document.getElementById("first").value);
    let b = parseFloat(document.getElementById("second").value);
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    display(result);
}
function clear_cal() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.color = "";
}
function display(result) {
    let output = document.getElementById("result");
    output.innerHTML = String(result);
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "";
    }
}