import { navBar } from './navbar.js';
import { formValidator } from './form.js';
import { scrollSpy } from './scrollspy.js';

function app() {
  navBar();
  formValidator();
  scrollSpy();
}

document.addEventListener('DOMContentLoaded', app)
