function calcularIntegralTrig() {
  // Obter os valores dos campos de entrada
  var func = document.getElementById("funcao").value;
  var limInf = parseFloat(document.getElementById("limite-inferior").value);
  var limSup = parseFloat(document.getElementById("limite-superior").value);
  var numSub = parseFloat(document.getElementById("num-subintervalos").value);

  // Calcular a largura de cada subintervalo
  var h = (limSup - limInf) / numSub;

  // Inicializar a soma da regra de Simpson
  var soma = 0;

  // Expressão regular para buscar as funções trigonométricas
  var pattern = /sin|cos|tan|sec|csc|cot/g;

  // Loop pelos subintervalos
  for (var i = 0; i <= numSub; i++) {
    // Calcular o valor de x para o subintervalo atual
    var x = limInf + i * h;

    // Substituir as funções trigonométricas por Math.sin, Math.cos, etc.
    var exp = func.replace(pattern, function(match) {
      return "Math." + match;
    });

    // Calcular o valor da função para x
    var fx = eval(exp);

    // Adicionar fx à soma com peso apropriado
    if (i == 0 || i == numSub) {
      soma += fx;
    } else if (i % 2 == 1) {
      soma += 4 * fx;
    } else {
      soma += 2 * fx;
    }
  }

  // Calcular o valor da integral
  var integral = (h / 3) * soma;

  // Exibir o resultado
  document.getElementById("resultado").innerHTML = "O valor da integral é: " + integral;
}