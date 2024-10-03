function Calcular() {
  var nota1 = document.getElementsByName("camponota")[0].value;
  var nota2 = document.getElementsByName("camponota2")[0].value;
  var nota3 = document.getElementsByName("camponota3")[0].value;
  var nota4 = document.getElementsByName("camponota4")[0].value;
  var nota5 = document.getElementsByName("camponota5")[0].value;

  var x1 = document.getElementsByName("peso1")[0].value;
  var x2 = document.getElementsByName("peso2")[0].value;
  var x3 = document.getElementsByName("peso3")[0].value;
  var x4 = document.getElementsByName("peso4")[0].value;
  var x5 = document.getElementsByName("peso5")[0].value;

  var nota1 = parseFloat(nota1);
  var nota2 = parseFloat(nota2);
  var nota3 = parseFloat(nota3);
  var nota4 = parseFloat(nota4);
  var nota5 = parseFloat(nota5);

  var x1 = parseFloat(x1);
  var x2 = parseFloat(x2);
  var x3 = parseFloat(x3);
  var x4 = parseFloat(x4);
  var x5 = parseFloat(x5);

  var soma = parseFloat(soma);
  var peso = parseFloat(peso);
  var resultado = parseFloat(resultado);

  var peso = x1 * nota1 + x2 * nota2 + x3 * nota3 + x4 * nota4 + x5 * nota5;
  var soma = x1 + x2 + x3 + x4 + x5;

  var resultado = peso / soma;

  resultado = parseFloat(resultado.toFixed(2));
  document.querySelector("#resultado").innerHTML = resultado;
}
