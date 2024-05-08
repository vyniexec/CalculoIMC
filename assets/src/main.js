// Recuperar dados do formulário
// Criar a função de soma
// Imprimir o resultado na tela do usúario
/*
const form = document.querySelector('#form1')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#input_peso');
    const inputAltura = e.target.querySelector('#input_altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResult('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResult('Altura Inválida', false);
        return;
    }
});

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createP();
    p.innerHTML = msg;
    result.appendChild(p);
} */

// Capturar evento de submit do formulário
const form = document.querySelector('#form1');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#input_peso');
  const inputAltura = e.target.querySelector('#input_altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#result');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('result-paragraph');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
