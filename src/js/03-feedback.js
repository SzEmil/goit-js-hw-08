'use strict';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
let formData = {
  email: ' ',
  message: ' ',
};
const handleImputer = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  formData = {
    email: email.value,
    message: message.value,
  };
  console.log(formData);

  // localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const savedInputTrottle = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const siteReload = () => {
  const {
    elements: { email, message },
  } = form;

  const savedInformation = localStorage.getItem('feedback-form-state');

  try {
    const parsedInformation = JSON.parse(savedInformation);
    if (parsedInformation === null) {
      return;
    } else {
      email.value = parsedInformation.email;
      message.value = parsedInformation.message;
    }
  } catch (error) {
    console.log('zapis do local storage:', error.name);
    console.log(error.message);
  }
};

const handlerSubmiter = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' && message.value === '') {
    alert('Należy podać wiadomość i email');
  } else {
    const savedInformation = localStorage.getItem('feedback-form-state');
    try {
      const parsedInformation = JSON.parse(savedInformation);
      console.log('Obiekt danych formularza: ', parsedInformation);
      event.currentTarget.reset();
      localStorage.removeItem('feedback-form-state');
    } catch (error) {
      console.log('zapis do consoli:', error.name);
      console.log(error.message);
    }
  }
};

form.addEventListener('input', handleImputer);
form.addEventListener('input', throttle(savedInputTrottle, 500));
form.addEventListener('submit', handlerSubmiter);
window.addEventListener('load', siteReload);
