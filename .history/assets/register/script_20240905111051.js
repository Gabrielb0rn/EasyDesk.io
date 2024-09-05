const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin= document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const obj = {
        user: user,
        password: password
    };

   const objString = JSON.stringify(obj);

   localStorage.setItem('login', objString);
    
   console.log(objString);
  console.log(obj);

};