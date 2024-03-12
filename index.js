console.log("done");

let navbar=document.getElementById("scnav");

// console.log(data);
window.addEventListener("scroll",function(){
    let Yscrool=Math.round(window.scrollY);
    if(Yscrool>153&window.innerWidth>991){
        navbar.classList.add("fixed-top");
    }
    else{
        navbar.classList.remove("fixed-top");
 
    }
})
