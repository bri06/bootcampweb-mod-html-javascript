export function navBar() {

  const btnClose = document.querySelector('.closebtn');
  const btnOpen = document.querySelector('.openbtn');

  btnOpen.addEventListener('click', openNav);
  btnClose.addEventListener('click', closeNav);

  function openNav() {
    document.querySelector('.sidenav').style.width = '250px';
  }

  function closeNav() {
    document.querySelector('.sidenav').style.width = '0';
  }

}