const menuBtn = document.getElementsByClassName("menu")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const header = document.querySelector("header");
const body = document.querySelector("html");
menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active-btn");
    navbar.classList.toggle("active-nav");
    header.classList.toggle("active-head");
    body.classList.toggle("active-body");
})
// it is used when user click outside of navbar while opening menu of navbar then 
//navbar automatically closed due outside clicking

document.onclick = (e)=>{ 
    if(!navbar.contains(e.target) && !menuBtn.contains(e.target)){
        menuBtn.classList.remove("active-btn");
        navbar.classList.remove("active-nav");
        header.classList.remove("active-head");
        body.classList.remove("active-body");
    }
}  

// it is used to retype text in section no 1
var typed = new Typed(".text-change",{
strings:["Frontend","Web","Developer"],
typeSpeed:100,
backSpeed:100,
backDelay:800,
loop:true
}
)
// it is used to retype text in section no 2
var typer = new Typed(".text-change-sec2",{
strings:["is my Services","i provide you"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
})

// it is used to make counter
let numbers = document.querySelectorAll(".num");
let intervals = 1000;
function numb(){
    numbers.forEach((count)=>{
        let startValue = 0;   //parseInt() is used to convert string into numbers 
                              // because value is string
        let endValue = parseInt(count.getAttribute("data-set"));
        let duration = Math.floor(intervals / endValue); 
        let counter = setInterval(function(){
            startValue += 1;
            count.innerHTML = startValue + "<sup>+</sup>";
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration);
    })
}

let percentages = document.querySelectorAll(".perc");
 let intervals2 = 2000;
function numb2(){
    percentages.forEach((count)=>{
        let startValue = 0; 
        let endValue = parseInt(count.getAttribute("data-to"));
        let duration = Math.floor(intervals2 / endValue);
        let counter = setInterval(function(){
            startValue += 1;
            count.textContent = `${startValue}%`;
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration);
    })
}

const underlin = document.querySelectorAll(".underline-sec4");
const sec4 = document.querySelector(".sec-4")
const sec3 = document.getElementsByClassName("sec-3")[0];
const obser = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {  
        if (entry.isIntersecting) {
            numb();
        }
    })
},
   { threshold: 0.2  /*A threshold of 0.5 means that when 50% of the target is visible
    within the element specified by the root option, the callback is invoked.*/
   });
   obser.observe(sec3);// it is used when sec3 reaches on screen then 
                       // obser is invoked 
  

   const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            sec4.classList.add("newskills");
             numb2();
        }
            else {
                sec4.classList.remove("newskills")
            }
        
    })
},
   { threshold: 0.1 });
   observer.observe(sec4);


   let animations = document.querySelectorAll(".animation-2")
   const the_animation = document.querySelectorAll('.animation-1')
   let animation3 = document.querySelectorAll(".animation-3")
   const observer1 = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.classList.add('scroll-animation')
           }
           else{
            entry.target.classList.remove('scroll-animation')
           }
           
       })
   },
      { threshold: 0.2
      });
   //
     for (let i = 0; i < the_animation.length; i++) {
      const elements = the_animation[i];
       observer1.observe(elements);
       const elements2 = animations[i];
       observer1.observe(elements2)
       const element3 = animation3[i];
       observer1.observe(element3)
     } 
   
    



      // it is validation form

    // validation of name
      function validatename(){
        let nameError = document.getElementById("ferror"); // it shows errors
         let nameField = document.getElementById("fname").value; // it is namefield
         if(nameField.length == 0){
            nameError.innerText = "name is required";
           return false;
         }
         if(!nameField.match(/[a-zA-Z]/)){
            nameError.innerText = "Just letters";
            return false;
         }            // it is img of tick that shows when user fills field correctly
         nameError.innerHTML =  "<img src='images/tick-circle-svgrepo-com.svg'>";
        return true;

      }

      function validatephone(){
        let phoneError = document.getElementById("Perror");
         let phoneField = document.getElementById("phone").value;
         if(phoneField.length == 0){
             phoneError.innerText = "Phone no is required";
             return false;
         }
         if(!phoneField.match(/^\d+$/)){
             phoneError.innerText = "Only digits";
             return false;
         }
         
         phoneError.innerHTML = "<img src='images/tick-circle-svgrepo-com.svg'>";
        return true;
            
      }
      function validateemail(){
        let emailError = document.getElementById("emailerror");
         let emailField = document.getElementById("email").value;
         if(emailField.length == 0){
             emailError.innerText = "Email is required";
             return false;
         }
         if(!emailField.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
             emailError.innerText = "Email invalid";
             return false;
         }
         emailError.innerHTML = "<img src='images/tick-circle-svgrepo-com.svg'>";
         return true;
      }


  // it is end of validation where all validations will be true then it will continue procedure
  // other wise it shows errorss
  function validateform(){
      if(validatename() && validatephone() && validateemail()){
        let submit = document.getElementById("submit");
        form.action = "https://formspree.io/f/mrgnkwed"
     submit.innerHTML = "<box-icon name='loader-circle' animation='spin' color='#ffffff' ></box-icon>";
    } else{
        alert("Please fix error in this form");
    }
   
  }
