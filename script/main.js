import * as Masks from './masks.js';
import * as Validations from './validations.js';

let email = document.getElementById('email');
let cpf = document.getElementById('cpf');

email.onkeypress = Masks.emailInput;
email.onblur = Validations.fullEmail;

cpf.onkeypress = Masks.cpfInput;
cpf.onblur = Validations.fullCpf;