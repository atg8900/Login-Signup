let signupInputName = document.getElementById("signupInputName")
let signupInputEmail = document.getElementById("signupInputEmail")
let signupInputPassword = document.getElementById("signupInputPassword")
let btnsignup = document.getElementById("btnsignup")
let allInp = document.querySelectorAll(".inp")
let existEmail = document.getElementById("existEmail")
let iconHide = document.getElementById("iconHide")
let iconShow = document.getElementById("iconShow")
let userContainer = [];
getLOcalStorage()

btnsignup.addEventListener('click',function(){
    if(validateForm(signupInputName) &&validateForm(signupInputEmail) &&validateForm(signupInputPassword) &&  repeatEmail(signupInputEmail)){
        let user = {
            name : signupInputName.value ,
            email : signupInputEmail.value ,
            password : signupInputPassword.value
           }
           userContainer.push(user);
           setLocalStorage()
          clearInput() 
          location.href="index.html"
    }
})
function setLocalStorage(){
    localStorage.setItem("users", JSON.stringify(userContainer))
}

function clearInput(){
    signupInputName.value =null;
    signupInputEmail.value  =null;
    signupInputPassword.value =null;
    signupInputName.classList.remove("is-valid")
    signupInputEmail.classList.remove("is-valid")
    signupInputPassword.classList.remove("is-valid")
}
function getLOcalStorage(){
    if( localStorage.getItem( "users")!=null){
        userContainer=JSON.parse(localStorage.getItem("users"))
    }
   
 }

 for( let i = 0 ; i< allInp.length   ; i++   ){
    allInp[i].addEventListener('input',function(e){
     
     validateForm(e);
   })
   
 }
 
 
 function validateForm(e){
     let regex ={
        signupInputName :/^[a-zA-Z]{3,20}$/ , 
        signupInputEmail :  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
        signupInputPassword :  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
     }
    
     if ((e.target?.value ?e.target.value : e.value) === "" ||(e.target?.value ?e.target.value : e.value)== null) {
      
      (e.target?.classList? e.target?.classList : e.classList ).remove("is-valid") ;
      (e.target?.classList? e.target?.classList : e.classList ).add("is-invalid") ;
       e.target?.nextElementSibling?.classList.remove("d-none");
       existEmail.classList.add("d-none")

       return false;
    }
     if(regex[e.target?.id ?e.target.id : e.id].test(e.target?.value ?e.target.value : e.value)){
        //    console.log('match');
         (e.target?.classList? e.target?.classList : e.classList ).remove("is-invalid") ;
         (e.target?.classList? e.target?.classList : e.classList ).add("is-valid") ;
         
         return true;
     }
     else{
          console.log('no match');
         (e.target?.classList? e.target?.classList : e.classList ).remove("is-valid") ;
         (e.target?.classList? e.target?.classList : e.classList ).add("is-invalid") ;
          e.target?.nextElementSibling?.classList.remove("d-none");
          existEmail.classList.add("d-none")
          return false;
     }
   }

   function repeatEmail(emailInput) {
    
    for (let i = 0; i < userContainer.length; i++) {
        if (emailInput.value === userContainer[i].email) {
            console.log('Email already exists');
            emailInput.classList.add("is-invalid"); 
            emailInput.nextElementSibling.classList.add("d-none")
            existEmail.classList.remove("d-none")
            return false;  
        }
    }
    emailInput.classList.remove("is-invalid");  
    return true;  
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
  signupInputPassword.type ="text"
}
function hidePasswod(){
  iconHide.classList.remove("d-none")
  iconShow.classList.toggle("d-none")
  signupInputPassword.type ="password"

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