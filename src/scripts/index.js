const container = document.getElementById('container');
const signUpLink = document.getElementById('SignUpLink');
const signInLink = document.getElementById('SignInLink');

signUpLink.addEventListener('click', () => {
  container.classList.add('active');
});

signInLink.addEventListener('click', () => {
  container.classList.remove('active');
});
