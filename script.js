

/* Arquivo script.js */
document.addEventListener('DOMContentLoaded', ()=>{
const form = document.getElementById('authForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const switchForm = document.getElementById('switchForm');
const formTitle = document.getElementById('formTitle');
const submitBtn = form.querySelector('button[type="submit"]');
let isLogin = true;


function setError(el,msg){
const target = document.querySelector(`.error[data-for="${el.id}"]`);
if(target) target.textContent = msg || '';
}


function validate(){
let ok = true;
setError(email,''); setError(password,'');
if(!email.value) { setError(email,'E-mail é obrigatório'); ok=false; }
else if(!/^\S+@\S+\.\S+$/.test(email.value)) { setError(email,'E-mail inválido'); ok=false; }
if(!password.value) { setError(password,'Senha é obrigatória'); ok=false; }
else if(password.value.length < 6) { setError(password,'Senha muito curta'); ok=false; }
return ok;
}


form.addEventListener('submit',(e)=>{
e.preventDefault();
if(!validate()) return;


const users = JSON.parse(localStorage.getItem('users')||'{}');
const key = email.value.toLowerCase();


if(isLogin){
if(users[key] && users[key]===password.value){
alert('Login bem-sucedido!');
} else {
setError(password,'Credenciais incorretas');
}
} else {
if(users[key]){
setError(email,'Usuário já existe');
} else {
users[key] = password.value;
localStorage.setItem('users',JSON.stringify(users));
alert('Conta criada com sucesso! Agora faça login.');
toggleMode(true);
}
}
});


switchForm.addEventListener('click',(e)=>{
e.preventDefault();
toggleMode(!isLogin);
});


function toggleMode(loginMode){
isLogin = loginMode;
formTitle.textContent = isLogin?'Entrar':'Cadastrar';
submitBtn.textContent = isLogin?'Entrar':'Criar Conta';
switchForm.parentElement.innerHTML = isLogin
?'Não tem conta? <a href="#" id="switchForm">Cadastre-se</a>'
:'Já tem conta? <a href="#" id="switchForm">Entrar</a>';
document.getElementById('switchForm').addEventListener('click',(e)=>{
e.preventDefault();
toggleMode(!isLogin);
});
}
});