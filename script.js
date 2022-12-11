//Declaration
const toggleMenu = document.querySelector('.fa-bars');
const navCard = document.querySelector('.nav-card');
const loadingGif = document.querySelector('.loading-gif');

toggleMenu.addEventListener('click', () => {
  navCard.classList.toggle('open');
  console.log('hi');
});
//hiding loading gif
window.addEventListener('load', () => {
  loadingGif.style.display = 'none';
});

//fixed nav bar
const navBar = document.getElementById('nav');
const navHeight = navBar.getBoundingClientRect().height; //103px for pc
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }
  //top link
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
