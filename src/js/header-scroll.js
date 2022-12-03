window.onscroll = function () {
  scrollY <= 70
    ? document.getElementById('header').classList.remove('header-scroll')
    : document.getElementById('header').classList.add('header-scroll');
};
