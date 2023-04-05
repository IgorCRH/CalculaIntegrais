function calcularIntegralexp() {
  const input = prompt("Entre com a função a ser integrada:");
  const varName = prompt("Entre com o nome da variável:");
  const expr = nerdamer(input).symbol;
  const integral = nerdamer.integrate(expr, varName).text(varName) + ' + C';
  document.getElementById("resultado").innerHTML = "A integral de " + expr + " é igual a " + integral;
}