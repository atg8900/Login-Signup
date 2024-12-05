// ----------------Variable of signup---------------


// ----------------Variable of login---------------
let loginInputEmail = document.getElementById("loginInputEmail")
let loginInputPassword = document.getElementById("loginInputPassword")
let btnLogin = document.getElementById("btnLogin")
let paragraph= document.querySelectorAll(".paragraph")
let arr=[];
getLOcalStorage()

btnLogin.addEventListener( 'click' , function(){
    existUser();
    
   
}  )


function existUser(){
    let emailUser = loginInputEmail.value;
    let passwordUser = loginInputPassword.value;
   
    for(let i = 0 ; i< arr.length ; i++){
        if(emailUser== arr[i].email && passwordUser == arr[i].password){
          localStorage.setItem("userName", arr[i].name )
          location.href="home.html"
          clearInput();
        }
        
    }
   
      loginInputEmail.classList.add("is-invalid");
      loginInputPassword.classList.add("is-invalid");
      paragraph.forEach(function(paragraphElement) {
        paragraphElement.classList.remove("d-none");
    });
       return false
   
}
function getLOcalStorage(){
    if( localStorage.getItem( "users")!=null){
        arr=JSON.parse(localStorage.getItem("users"))
    }
   
 }
 function clearInput(){
  loginInputEmail.value =null;
  loginInputPassword.value  =null;
 }
 iconHide.addEventListener('click', function(){
  showPasswod();
})
iconShow.addEventListener('click', function(){
  hidePasswod();
})
function showPasswod(){
  iconHide.classList.add("d-none")
  iconHide.nextElementSibling.classList.remove("d-none")
  loginInputPassword.type ="text"
}
function hidePasswod(){
  iconHide.classList.remove("d-none")
  iconShow.classList.toggle("d-none")
  loginInputPassword.type ="password"

}
new FinisherHeader({
    "count": 100,
    "size": {
      "min": 2,
      "max": 8,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0,
        "max": 0.4
      },
      "y": {
        "min": 0,
        "max": 0.6
      }
    },
    "colors": {
      "background": "#201e30",
      "particles": [
        "#fbfcca",
        "#d7f3fe",
        "#ffd0a7"
      ]
    },
    "blending": "overlay",
    "opacity": {
      "center": 1,
      "edge": 0
    },
    "skew": 0,
    "shapes": [
      "c"
    ]
  });