window.onscroll = function () {
  scrollY <= 70
    ? document.getElementById('header').classList.remove('header-scroll')
    : document.getElementById('header').classList.add('header-scroll');
  scrollY <= 250
    ? document.getElementById('up-button').classList.remove('up-button-visible')
    : document.getElementById('up-button').classList.add('up-button-visible');
};
