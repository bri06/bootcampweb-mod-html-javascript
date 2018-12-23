export function formValidator() {
  const MAX = 150;
  const form = document.querySelector('#contact-form');
  const others = document.querySelector('#others');
  const errorContainer = document.querySelector('#error');
  const defaultValidator = target => target.value.trim().length !== 0 && target.checkValidity();
  const textareaValidator = (target, MAX = MAX) => {
    const numWords = target.value.split(' ').filter(word => word).length;
    return numWords <= MAX;
  }
  others.addEventListener("change", function () {
    if (others.checked) {
      return document.querySelector('#aditionalText').className = 'showLabel';
    }
    return document.querySelector('#aditionalText').className = 'hiddenLabel';
  }, false);

  const errorTemplate = (message) => `<p>${message}</p>`;
  const counterTemplate = (count, MAX) => `<span>${count} of ${MAX} characters</span>`;

  const inputs = document.querySelectorAll('.contact-input input');
  const textarea = document.querySelector('#textarea');
  [...inputs, textarea].forEach(input => input.addEventListener('keyup', (e) => {
    input.classList.remove('error');
    errorContainer.classList.remove('showError');
    if (input.name === 'textarea') {
      const count = e.target.value.split(' ').filter(word => word).length;
      document.querySelector('.countCarac').innerHTML = counterTemplate(count, MAX);
    } 
  }));

  const send = (e) => {
    e.preventDefault();
    errorContainer.classList.remove('showError');
    if (!defaultValidator(e.target.name)) {
      return errorHandling(errorContainer, e.target.name, 'Name is required');
    }
    if (!defaultValidator(e.target.email)) {
      return errorHandling(errorContainer, e.target.email, 'Email is required and must be a valid email (example@email.com)');
    }
    if (!defaultValidator(e.target.phone)) {
      return errorHandling(errorContainer, e.target.phone, 'Phone is required. Please fill with correct format (+34 612345678)');
    }
    if (!textareaValidator(e.target.textarea)) {
      return errorHandling(errorContainer, e.target.textarea, `Message must have less than ${MAX} characters`);
    }
    alert('enviado')
  }

  function errorHandling (errorContainer, element, message) {
    errorContainer.classList.add('showError');
    element.classList.add('error');
    errorContainer.innerHTML = errorTemplate(message);
    return element.focus();
  }

  form.addEventListener("submit", send);




}
