import * as Masks from './masks.js';
import * as Validations from './validations.js';

let phone = document.getElementById('phone');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');

phone.onkeypress = Masks.phoneInput;
phone.onblur = Validations.fullPhone;

email.onkeypress = Masks.emailInput;
email.onblur = Validations.fullEmail;

cpf.onkeypress = Masks.cpfInput;
cpf.onblur = Validations.fullCpf;