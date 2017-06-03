/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function() {
    document.getElementById("Register").onclick = Validate;
    
};
function Validate(){
    
    var firstName=document.getElementById("firstName").value;
    
    var lastName=document.getElementById("lastName").value;
    
    var email=document.getElementById("email").value;
    
    var phone= document.getElementById("phone").value;

    var street=document.getElementById("street").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;
     var zip=document.getElementById("zip").value;
     
     if(firstName === "")
     {
         alert("First name cannot be empty.");
     }
     if(lastName === "")
     {
         alert("Last name cannot be empty.");
     }
    //var re="\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"; 
    //if(email === ""|| !email.match(re)){
      //  alert("")
    //}


}