const container = document.querySelector('.container');
const SignUpLink = document.querySelector('.SignUpLink');
const SignInLink = document.querySelector('.SignInLink');

SignUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('active');
});

SignInLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('active');
});
