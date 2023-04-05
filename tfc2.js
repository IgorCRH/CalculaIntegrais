function calcularIntegralInd() {
const input = prompt("Entre com a função a ser integrada:");
const x = 'x';
const expr = nerdamer(input).symbol;
const integral = nerdamer.integrate(expr, x).text('x') + ' + C';
document.getElementById("resultadoind").innerHTML = "A integral de " + input + " é igual a " + integral;
}