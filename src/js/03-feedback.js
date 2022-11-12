'use strict';

const form = document.querySelector('.feedback-form');

const handleimputer = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    message: message.value,
  };
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const siteReload = event => {
  const {
    elements: { email, message },
  } = form;

  const savedInformation = localStorage.getItem('feedback-form-state');
  const parsedInformation = JSON.parse(savedInformation);
  console.log(parsedInformation);

  if (parsedInformation.email === '' || parsedInformation.message === '') {
    return;
  } else {
    email.value = parsedInformation.email;
    message.value = parsedInformation.message;
  }
};

form.addEventListener('input', handleimputer);

window.addEventListener('load', siteReload);
