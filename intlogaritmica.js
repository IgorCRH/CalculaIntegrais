function calculaIntegral() {
  // Obtem os valores de entrada, declarando as variáveis
  var funcao = document.getElementById("funcao").value;
  var variavel = document.getElementById("variavel").value;
  var limiteInferior = parseFloat(document.getElementById("limite-inferior").value);
  var limiteSuperior = parseFloat(document.getElementById("limite-superior").value);
  var numSubintervalos = parseInt(document.getElementById("num-subintervalos").value);

  // Calcula o tamanho de cada subintervalo
  var h = (limiteSuperior - limiteInferior) / numSubintervalos;

  // Calcula a integral usando a Regra do Trapézio
  var integral = 0;
  for (var i = 1; i <= numSubintervalos; i++) {
    var x0 = limiteInferior + (i-1) * h;
    var x1 = limiteInferior + i * h;
    var f0 = eval(funcao.replace(new RegExp(variavel, "g"), x0));
    var f1 = eval(funcao.replace(new RegExp(variavel, "g"), x1));
    integral += (f0 + f1) / 2 * h;
  }

  // Exibe o resultado na página
  document.getElementById("resultado").innerHTML = "A integral de " + funcao + " entre " + limiteInferior + " e " + limiteSuperior + " é igual a " + integral;
}