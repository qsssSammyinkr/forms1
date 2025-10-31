const container = document.querySelector('.container');
const signUpLink = document.querySelector('.SignUpLink');
const signInLink = document.querySelector('.SignInLink');

signUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('active');
});

signInLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('active');
});

/* Animação automática na entrada */
window.addEventListener('load', () => {
  document.querySelector('.container').classList.add('show');
});
