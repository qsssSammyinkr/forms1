const container = document.querySelector('.container');

const SignUpLinks = document.querySelectorAll('.SignUpLink');
SignUpLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    container.classList.add('active');
  });
});

const SignInLinks = document.querySelectorAll('.SignInLink');
SignInLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    container.classList.remove('active');
  });
});
