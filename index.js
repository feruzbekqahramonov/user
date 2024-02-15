const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const email = document.getElementById('email');

let nameEnter = prompt('Ismingizni kiriting')
let surnameEnter = prompt('Familyangizni kiriting')
let ageEnter = +prompt('Yoshingizni kiriting')
let emailEnter = prompt('Email kiriting')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
function Validate() {
    if(!name) {
        alert('Ismingizni kiritmadingiz')
        return false;
    } 
    if(!surname) {
        alert('Familyangizni kiritmadingiz')
        return false;
    } 
    if(!age) {
        alert('Yosh sonlardan tashkil topgan bo`ladi!')
        return false;
    } 
    if(age <= 0 || age >= 150) {
        alert('Yosh bunday bo`lishi mumkin emase')
        return false;
    } 

    validateEmail() 
    return true;
}
name.innerHTML = nameEnter;
surname.innerHTML = surnameEnter;
age.innerHTML = ageEnter;
email.innerHTML = emailEnter

