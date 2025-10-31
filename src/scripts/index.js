const container = document.getElementById('container');
const signUpLink = document.getElementById('SignUpLink');
const signInLink = document.getElementById('SignInLink');

signUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('active');
});

signInLink.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('active');
});
