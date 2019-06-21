export function scrollSpy() {

  const menuScroll = () => {
    const pageYOffset = window.pageYOffset;
    const whoiamSection = document.querySelector('#whoIam');
    const studiesdSection = document.querySelector('#studies');
    const experienceSection = document.querySelector('#experience');
    const aboutSection = document.querySelector('#about');
    const contactSection = document.querySelector('#contact');
    const elementsMenu = document.querySelectorAll('.sidenav ul li a.menu');
    const progressBar = document.querySelectorAll('.bar');
    let position = null;
    if (pageYOffset >= whoiamSection.offsetTop && pageYOffset < studiesdSection.offsetTop) {
      position = 0;
    }
    if (pageYOffset >= studiesdSection.offsetTop && pageYOffset < experienceSection.offsetTop) {
      position = 1;
    }
    if (pageYOffset >= experienceSection.offsetTop && pageYOffset < aboutSection.offsetTop) {
      position = 2;
    }
    if (pageYOffset >= aboutSection.offsetTop - aboutSection.offsetHeight && pageYOffset < contactSection.offsetTop) {
      progressBar.forEach(item => item.classList.add('animate'));
    }
    if (pageYOffset >= aboutSection.offsetTop && pageYOffset < contactSection.offsetTop) {
      position = 3;
    }
    if (pageYOffset >= contactSection.offsetTop) {
      position = 4;
    }

    elementsMenu.forEach((item, index) => {
      if (position === index) {
        return item.classList.add('active-scroll');
      }
      return item.classList.remove('active-scroll');
    });
  };

  window.addEventListener('scroll', menuScroll);
}