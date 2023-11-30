function signup(e){
  event.preventDefault():


var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

var user = {
  email: email,
  username: username;
  password: pass;
};

var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added');

}


function login(e){
event.preventDefault();
  console.log(123);
}
