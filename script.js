/* -----------------------------
Arquivo: script.js
Coloque este conteúdo em script.js (mesma pasta de index.html)
----------------------------- */


document.addEventListener('DOMContentLoaded', ()=>{
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const toggle = document.getElementById('togglePwd');


// Alterna visibilidade da senha
toggle.addEventListener('click', ()=>{
const type = password.type === 'password' ? 'text' : 'password';
password.type = type;
toggle.textContent = type === 'password' ? '👁️' : '🙈';
});


// Função simples para mostrar erro
function setError(el, msg){
const target = document.querySelector(`.error[data-for="${el.id}"]`);
if(target) target.textContent = msg || '';
}


// Validação simples
function validate(){
let ok = true;
setError(email, ''); setError(password, '');


if(!email.value) { setError(email,'E‑mail é obrigatório'); ok=false; }
else if(!/^\S+@\S+\.\S+$/.test(email.value)) { setError(email,'E‑mail inválido'); ok=false; }


if(!password.value) { setError(password,'Senha é obrigatória'); ok=false; }
else if(password.value.length < 6) { setError(password,'Senha muito curta (mín 6)'); ok=false; }


return ok;
}


// Simula autenticação (demo)
form.addEventListener('submit', (e)=>{
e.preventDefault();
if(!validate()) return;


// bloqueia o botão
const submit = form.querySelector('button[type="submit"]');
submit.disabled = true; submit.textContent = 'Entrando...';


// Simula requisição ao servidor
setTimeout(()=>{
// demo: aceita apenas usuário demo@demo.com com senha 123456
if(email.value.toLowerCase() === 'demo@demo.com' && password.value === '123456'){
alert('Login bem‑sucedido — redirecionando...');
// aqui faria window.location = '/app'
} else {
setError(password, 'Credenciais incorretas (use demo@demo.com / 123456)');
}
submit.disabled = false; submit.textContent = 'Entrar';
}, 900);
});


});