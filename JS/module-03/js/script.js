'use strict'


const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const login = prompt ('Type your Login');

function checkLoginValidity(login) {
  let lengthLogin;
  lengthLogin = login.length >= 4 && login.length <= 16;

  if (lengthLogin) {
    return true;
  } else {
    return false;
  }
}

function checkIfLoginExists(logins, login) {
  if (logins.includes(login)) {
    return true;
  } else {
    return false;
  }
}

function addLogin(logins,login) {
  if (!checkLoginValidity(login)){
    return alert ('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (checkIfLoginExists(logins, login)) {
    return alert ('Такой логин уже используется!');
  } else {
    return logins.push(login);
  }
}

const addLogIn = addLogin(logins,login);
console.log(logins);
