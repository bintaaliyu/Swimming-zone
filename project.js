let heading = document.querySelectorAll(".hf");
let paragraph = document.querySelectorAll(".pf")
console.log(heading);
// console.log(paragraph);
let trigger = true;

for (let i = 0; i < heading.length; i++){
    heading[i].addEventListener("click", function(){
        if (trigger === true){
            paragraph[i].style.display = "block"; 
            trigger = false 
        } else{
            paragraph[i].style.display = "none";
            trigger = true;
        }

    });
}

let paragraphs = document.querySelectorAll("p");
let heading1 = document.querySelectorAll("h1");
let heading2 = document.querySelectorAll("h2");
let heading4 = document.querySelectorAll("h4");
let body = document.querySelector(".hero-section");
let body2 = document.querySelector(".about");
let body3 = document.querySelector(".faq");
let body4 = document.querySelector(".ending");
let body5 = document.querySelector(".container");
let body6 = document.querySelector(".task");
let body7 = document.querySelector(".solutions");
let body8 = document.querySelector(".faq-box");
let trigger2 = true;
let toggle = document.querySelector("#mode-switch");

toggle.addEventListener("click", function(){
    if (trigger2){
        trigger2 = false;
        toggle.setAttribute("src","dark.png");
         heading1[0].style.color="white";
         
         paragraphs[0].style.color= "white";
         paragraphs[1].style.color= "white";
         paragraphs[2].style.color= "white";
         paragraphs[3].style.color= "white";
         paragraphs[4].style.color= "white";
        

         for(let i = 1; i< heading1.length; i++){
            heading1[i].style.color= "black";
         }

            heading2[0].style.color= "white";
            heading2[1].style.color= "white";
        
        body.style.backgroundColor = "#023e8a";
        body2.style.backgroundColor = "#023e8a";
        body3.style.backgroundColor = "#023e8a";
        body4.style.backgroundColor = "#232736";
        body5.style.backgroundColor = "#023e8a";
        body6.style.backgroundColor = "#023e8a";
        body7.style.backgroundColor = "#023e8a";
        body8.style.backgroundColor = "#004a6f";


    }else{
        trigger2 = true;
        toggle.setAttribute("src", "light.png");
        heading1[0].style.color="black";
        for(let i = 1; i< heading1.length; i++){
            heading1[i].style.color= "white";
        }

        paragraphs[0].style.color= "black";
        paragraphs[1].style.color= "black";
        paragraphs[2].style.color= "black";
        paragraphs[3].style.color= "black";
        paragraphs[4].style.color= "black";


            heading2[0].style.color= "black";
            heading2[1].style.color= "black";

        
        body.style.backgroundColor = "#72ecff";
        body2.style.backgroundColor = "#72ecff";
        body3.style.backgroundColor = "#72ecff";
        body4.style.backgroundColor = "#023047";
        body5.style.backgroundColor = "#72ecff";
        body6.style.backgroundColor = "#72ecff";
        body7.style.backgroundColor = "#72ecff";
        body8.style.backgroundColor = "#023e8a";

    }
})