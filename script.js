let cpf, cpfInfo;

window.onload = function() {
  cpf = document.getElementById('cpf');
  cpfInfo = document.getElementById('cpf-info');
}

function cpfInputMask(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    return false;
  }

  if (cpf.value.length == 3) {
    cpf.value += '.'; 
  }

  if (cpf.value.length == 7) {
    cpf.value += '.';
  }

  if (cpf.value.length == 11) {
    cpf.value += '-';
  }
}

function cpfValidation() {
  if (cpf.value.length == 0) {
    cpfInfo.innerHTML = 'Por favor insira seu CPF.';
    return false;
  }

  if (cpf.value.length < 14) {
    cpfInfo.innerHTML = 'CPF inválido!';
    return false;
  }

  var cpfArray = cpf.value.split('');
  cpfArray.splice(3, 1);
  cpfArray.splice(6, 1);
  cpfArray.splice(9, 1);
  cpfArray = cpfArray.map(x => parseInt(x));

  for(let i=0; i<11; i++) {
    if(cpfArray[i] == cpfArray[i+1] &&
       cpfArray[i+1] == cpfArray[i+2] && 
       cpfArray[i+2] == cpfArray[i+3]) {
      cpfInfo.innerHTML = 'CPF inválido!';
      return false;
    }
  }

  var num = 10;
  var sum = 0;
  var result = 0;

  for(let i=0; i<9; i++) {
    sum += cpfArray[i] * num;
    num--;
  }

  result = (sum * 10) % 11;

  if (result == 10) {
    result = 0;
  }

  if (result == cpfArray[9]) {
    cpfInfo.innerHTML = '';
  }
  else {
    cpfInfo.innerHTML = 'CPF inválido!';
    return false;
  }

  var num = 11;
  var sum = 0;
  var result = 0;

  for(let i=0; i<10; i++) {
    sum += cpfArray[i] * num;
    num--;
  }

  result = (sum * 10) % 11;

  if (result == 10) {
    result = 0;
  }

  if (result == cpfArray[10]) {
    cpfInfo.innerHTML = '';
  }
  else {
    cpfInfo.innerHTML = 'CPF inválido!';
    return false;
  }

  cpfInfo.innerHTML = '';
}