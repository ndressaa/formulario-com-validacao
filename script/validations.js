let usernameInfo = document.getElementById('username-info');
let phoneInfo = document.getElementById('phone-info');
let emailInfo = document.getElementById('email-info');
let cpfInfo = document.getElementById('cpf-info');

let submit = document.getElementById('submit');

function usernameValidation() {
  if (username.value.length == 0) {
    usernameInfo.innerHTML = 'Por favor insira seu Nome.'
    usernameInfo.classList.add('active');
    username.style.borderColor = '#D80000';
    return false;
  }

  usernameInfo.innerHTML = '';
  usernameInfo.classList.remove('active');
  username.style.borderColor = 'black';
  return true;
}

function phoneValidation() {
  if (phone.value.length == 0) {
    phoneInfo.innerHTML = 'Por favor insira seu Telefone.';
    phoneInfo.classList.add('active');
    phone.style.borderColor = '#D80000';
    return false;
  }

  if (phone.value.length < 15) {
    phoneInfo.innerHTML = 'Telefone inválido!';
    phoneInfo.classList.add('active');
    phone.style.borderColor = '#D80000';
    return false
  }

  phoneInfo.innerHTML = '';
  phoneInfo.classList.remove('active');
  phone.style.borderColor = 'black';
  return true;
}

function emailValidation() {
  if (email.value.length == 0) {
    emailInfo.innerHTML = 'Por favor insira seu E-mail.';
    emailInfo.classList.add('active');
    email.style.borderColor = '#D80000';
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
    emailInfo.classList.add('active');
    email.style.borderColor = '#D80000';
    return false;
  }

  emailInfo.innerHTML = '';
  emailInfo.classList.remove('active');
  email.style.borderColor = 'black';
  return true;
}

function cpfValidation() {
  if (cpf.value.length == 0) {
    cpfInfo.innerHTML = 'Por favor insira seu CPF.';
    cpfInfo.classList.add('active');
    cpf.style.borderColor = '#D80000';
    return false;
  }

  if (cpf.value.length < 14) {
    cpfInfo.innerHTML = 'CPF inválido!';
    cpfInfo.classList.add('active');
    cpf.style.borderColor = '#D80000';
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
      cpfInfo.classList.add('active');
      cpf.style.borderColor = '#D80000';
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
    cpfInfo.classList.remove('active');
    cpf.style.borderColor = 'black';
  }
  else {
    cpfInfo.innerHTML = 'CPF inválido!';
    cpfInfo.classList.add('active');
    cpf.style.borderColor = '#D80000';
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
    cpfInfo.classList.remove('active');
    cpf.style.borderColor = 'black';
  }
  else {
    cpfInfo.innerHTML = 'CPF inválido!';
    cpfInfo.classList.add('active');
    cpf.style.borderColor = '#D80000';
    return false;
  }

  cpfInfo.innerHTML = '';
  cpfInfo.classList.remove('active');
  cpf.style.borderColor = 'black';
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
  let validateUsername,
      validatePhone,
      validateEmail,
      validateCpf;

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