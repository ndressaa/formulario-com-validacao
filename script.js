let cpf;

window.onload = function() {
  cpf = document.getElementById('cpf');
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