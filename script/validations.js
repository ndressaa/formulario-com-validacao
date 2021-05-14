let usernameInfo = document.getElementById('username-info');
let phoneInfo = document.getElementById('phone-info');
let emailInfo = document.getElementById('email-info');
let cpfInfo = document.getElementById('cpf-info');

let submit = document.getElementById('submit');

function usernameValidation() {
  if (username.value.length == 0) {
    usernameInfo.innerHTML = 'Por favor insira seu Nome.'
    return false;
  }

  usernameInfo.innerHTML = '';
  return true;
}

function phoneValidation() {
  if (phone.value.length == 0) {
    phoneInfo.innerHTML = 'Por favor insira seu Telefone.';
    return false;
  }

  if (phone.value.length < 15) {
    phoneInfo.innerHTML = 'Telefone inválido!';
    return false
  }

  phoneInfo.innerHTML = '';
  return true;
}

function emailValidation() {
  if (email.value.length == 0) {
    emailInfo.innerHTML = 'Por favor insira seu E-mail.';
    return false;
  }

  if (email.value.indexOf('@') == -1 ||
      email.value.indexOf('@') == 0 ||
      email.value.indexOf('@') == email.value.length - 1 ||
      email.value.split('@').length >= 3 ||
      email.value.indexOf('.') == 0 ||
      email.value.indexOf('.') == email.value.length - 1 ||
      email.value.indexOf('_') == email.value.length - 1) {
    emailInfo.innerHTML = 'E-mail inválido!';
    return false;
  }

  emailInfo.innerHTML = '';
  return true;
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
  return true;
}

function fullUsername() {
  usernameValidation();
  formValidation();
}

function fullPhone() {
  phoneValidation();
  formValidation();
}

function fullEmail() {
  emailValidation();
  formValidation();
}

function fullCpf() {
  cpfValidation();
  formValidation();
}

function formValidation() {
  let validateUsername;
  let validatePhone;
  let validateEmail;
  let validateCpf;

  if (username.value.length != 0) {
    validateUsername = usernameValidation();
  }

  if (phone.value.length != 0) {
    validatePhone = phoneValidation();
  }

  if (email.value.length != 0 ) {
    validateEmail = emailValidation();
  }
  if (cpf.value.length != 0) {
    validateCpf = cpfValidation();
  }

  if (validateUsername && 
    validatePhone && 
    validateEmail && 
    validateCpf) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
}

export { fullUsername, fullPhone, fullEmail, fullCpf };