let singin = document.getElementById("signin");
let singup = document.getElementById("signup");
let title = document.getElementById("title");
let namefield = document.getElementById("namefield");
let password = document.getElementById("password");
let lost = document.getElementById("lost");

lost.style.display = 'none';
signin.onclick =  function (){
    namefield.style.maxHeight='0';
    title.innerHTML="Sign In"
    singup.classList.add("disable")
    singin.classList.remove("disable")
    lost.style.display = "block";
    password.style.maxHeight='60px';
}


signup.onclick =  function (){
    namefield.style.maxHeight='60px';
    title.innerHTML="Sign Up"
    singin.classList.add("disable")
    singup.classList.remove("disable")
    lost.style.display = 'none';

}


lost1.onclick =  function (){
    password.style.maxHeight='0';
    lost.style.display ="none";                                                                        
}