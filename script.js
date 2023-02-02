const body = document.querySelector('body');
const fieldset = document.querySelector('fieldset');
const form = document.querySelector('form');
const btn = document.querySelector('button');

var arr = [];

function submitClicked(){
    for(let i of arr){
        if(i.value.length == 0){
            i.required = true;
        }
    }
}

btn.addEventListener('click', submitClicked);

function addInput(node, type, id, placeholder, labelName){
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelName;

    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
    arr.push(input);

    node.appendChild(label);
    node.appendChild(input);
}

// User Name
let nameInfo = document.createElement('div');
nameInfo.classList.add('row');

let firstName = document.createElement('div');
firstName.classList.add('formElement');
addInput(firstName, 'text', 'first_name', 'John...', 'FIRST NAME');

let lastName = document.createElement('div');
lastName.classList.add('formElement');
addInput(lastName, 'text', 'last_name', 'Doe...', 'LAST NAME')

nameInfo.appendChild(firstName);
nameInfo.appendChild(lastName);

fieldset.appendChild(nameInfo);

// User Contact Info
let contactInfo = document.createElement('div');
contactInfo.classList.add('row');

let email = document.createElement('div');
email.classList.add('formElement');
addInput(email, 'email', 'email_info', 'johndoe@example.com', 'EMAIL');

let phone = document.createElement('div');
phone.classList.add('formElement');
addInput(phone, 'tel', 'phone_info', '123-456-7890', 'PHONE NUMBER');
phone.lastChild.setAttribute('pattern', pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}');

contactInfo.appendChild(email);
contactInfo.appendChild(phone);

fieldset.appendChild(contactInfo);

// User Password
let passwordInfo = document.createElement('div');
passwordInfo.classList.add('row');

let password = document.createElement('div');
password.classList.add('formElement');
addInput(password, 'password', 'pass_info', '', 'PASSWORD');

let confirmPass = document.createElement('div');
confirmPass.classList.add('formElement');
addInput(confirmPass, 'password', 'confirm_pass', '', 'CONFIRM PASSWORD');

let message = document.createElement('div');
message.setAttribute('visibility', 'hidden');
message.textContent = "*Passwords do not match.";
message.style.color = 'red';
message.style.fontSize = '12px';

let passTextBox = password.lastChild;
let confirmTextBox = confirmPass.lastChild;

confirmPass.lastChild.addEventListener('keyup', () => {

    let pw = passTextBox.value;
    let check = confirmTextBox.value;

    if(pw != check){
        message.setAttribute('visibility', 'visible');
        confirmTextBox.setAttribute('isvalid', 'false');
    } else {
        message.setAttribute('visibility', 'hidden');
        confirmTextBox.setAttribute('isvalid', 'true');
    }
});

password.appendChild(message);

passwordInfo.appendChild(password);
passwordInfo.appendChild(confirmPass);

fieldset.appendChild(passwordInfo);