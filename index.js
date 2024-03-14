console.log("done");

let navbar=document.getElementById("scnav");
let Triangle=document.querySelector(".triangle");


// console.log(data);
window.addEventListener("scroll",function(){
    let Yscrool=Math.round(window.scrollY);
    if(Yscrool>153&window.innerWidth>991){
        navbar.classList.add("fixed-top");
        navbar.classList.add("fixed-top-data");

    }
    else{
        navbar.classList.remove("fixed-top");
        navbar.classList.remove("fixed-top-data");

    }
    
    if(Yscrool>772){
        Triangle.style.display="block";
    }
    else{
        Triangle.style.display="none";
    }
   
})
let btn=document.querySelector("#up-down-btn");
btn.addEventListener("click",()=>{
    document.documentElement.scrollTop=0;
})

let smnav=document.querySelector(".sm-nav");
smnav.addEventListener("click",()=>{
   if(smnav.classList.contains("show")){
    smnav.classList.remove("show");
   }
   else{
    smnav.classList.add("show");
   }
})