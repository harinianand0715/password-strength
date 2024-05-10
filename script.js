function check(){
var password = document.getElementById("password");
var weak = document.getElementById("weak") ;
var medium = document.getElementById("medium");
var strong = document.getElementById("strong");
var res = document.getElementById("result");
const uppercase = /[A-Z]/;
const lowercase = /[a-z]/;
const number = /[0-9]/;
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;



if(!password==""){
  weak.style.backgroundColor = "red";
  res.innerHTML = "Your password is weak";
} else if(password.length>6){
  weak.style.backgroundColor = "red";
  medium.style.backgroundColor = "yellow";
  res.innerHTML = "Your password is medium";
} else if(specialChar.test(password) && uppercase.test(password) && lowercase.test(password) && number.test(password)){
  weak.style.backgroundColor = "red";
  medium.style.backgroundColor = "yellow";
  strong.style.backgroundColor = "green";
  res.innerHTML = "Your password is strong";
} else {
  res.innerHTML = "";
}
}
  
      
      