document.querySelector("#button").addEventListener("click", myfun);


function myfun(event){
 
    event.preventDefault();
     
    let email = document.querySelector(".email").value;


console.log(email)
   
}