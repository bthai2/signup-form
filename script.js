const body = document.querySelector('body');
const fieldset = document.querySelector('fieldset');

function addInput(node, type, id, placeholder, labelName){
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelName;

    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);

    node.appendChild(label);
    node.appendChild(input);
}

let fullName = document.createElement('div');
fullName.classList.add('row');

let firstName = document.createElement('div');
firstName.classList.add('formElement');
addInput(firstName, 'text', 'first_name', 'John...', 'FIRST NAME');

let lastName = document.createElement('div');
lastName.classList.add('formElement');
addInput(lastName, 'text', 'last_name', 'Doe...', 'LAST NAME')

fullName.appendChild(firstName);
fullName.appendChild(lastName);

fieldset.appendChild(fullName);
