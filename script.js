


function displayDate(){
    console.log(document.getElementById('email').value);

    let password= document.getElementById('password').value;
    let confpass= document.getElementById('conf-pass').value;
    if(password== confpass){
        alert("Signed up Successfully") ;
    }
    else{
        alert('password is not same');
    }
  ;
   // document.getElementById('upbtn').style.display= 'none'
}
function handleLogin(){
    window.location.href = "/login.html"
}