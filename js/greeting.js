const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden"
const USERNAME_KEY="username"

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);  
    paintGreeting(username);
}
function paintGreeting(username){
    greeting.innerText=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit',onLoginSubmit)

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
else{
    paintGreeting(savedUsername);
}