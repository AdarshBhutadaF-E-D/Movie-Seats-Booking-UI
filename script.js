
const form = document.getElementById("form");
const Username = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Password2 = document.getElementById("password2");

function checkEmail(input){
    // const re = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(input.value.match(re)){
       showSuccess(input); 
    }
    else{
     showError(input ,`This is an invalid Email `);
    }

}
// ------> Show Error Outline <---------
function showError(input , message){
   const formControl = input.parentNode;
   formControl.className = "form-control error";
   const Small = formControl.querySelector("small");
   Small.innerText = message;
}
// -------> Show success outline <---------
function showSuccess(input){
  const formControl = input.parentNode;
  formControl.className = "form-control success";
}
 
function checkRequired(inputArray){
  inputArray.forEach(function (input) {
      if(input.value.trim() === ""){
       showError(input , `${getUpper(input)} is required`)
      }
      else{
     showSuccess(input);
      }
  });
}
   // Convert first letter of input id to uppercase
  function getUpper(input){
   return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;

  }
    // check length of username and password

  function checkLength(input , min ,max){
      if(input.value.length < min){
          showError(input , `${getUpper(input)} must be at least ${min} characters` );
    }
    else if(input.value.length > max){
        showError(input , `${getUpper(input)} must be less than ${max} characters` );
    }
    else {
      showSuccess(input);
    }
  }

  // check passwords are matching or not

 function checkPassword (pswd1, pswd2){
   if(pswd1.value !==  pswd2.value){
       showError(pswd2 , "password do not match");
   }
 }



//  ------> Event listener <---------
form.addEventListener("submit" , function(e){
    e.preventDefault();

    checkRequired([Username , Email, Password , Password2]);
    checkLength(Username , 3 , 15);
    checkLength(Password , 6 , 20);
    checkEmail(Email);
    checkPassword(Password , Password2);
})