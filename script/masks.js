export function emailInput(event) {
  if (event.keyCode >= 97 && event.keyCode <= 122) {
    return true;
  }
  else if (event.keyCode >= 48 && event.keyCode <= 57) {
    return true;
  }
  else if (event.keyCode == 46 || event.keyCode == 64 || event.keyCode == 95) {
    return true;
  }
  else {
    return false;
  }
}

export function cpfInput(event) {
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