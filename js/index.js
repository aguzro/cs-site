window.addEventListener('scroll', function (e) {
  let nav = document.querySelector('nav');
  if (window.scrollY >= 150) {
          nav.classList.add('bg-grey');
          nav.classList.remove('nav-white');
      } else {
          nav.classList.add('nav-white');
          nav.classList.remove('bg-grey');
      }
});