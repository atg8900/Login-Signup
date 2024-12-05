let helloName = document.getElementById("helloName")
let cartona= localStorage.getItem("userName")
helloName.innerHTML=` <h1>WElCOME ${cartona}</h1>`
let logOutBtn = document.getElementById("logOutBtn")

logOutBtn.addEventListener('click', function(){
    location.href="index.html"
})