window.addEventListener("scroll", ()=>{
    let header = document.querySelector("nav");
    header.classList.toggle("greenNav" , window.scrollY > 0)
})



AOS.init();


let active = false
$("#menu").click(()=>{
  active = !active
  let home = document.getElementById("home");
  let about = document.getElementById("about");
  let contact = document.getElementById("contact");
  let applyM = document.getElementById("applyM");
  if(active){
    home.classList.replace("d-none", "d-block")
    about.classList.replace("d-none", "d-block")
    contact.classList.replace("d-none", "d-block")
    applyM.classList.replace("d-none", "d-block")
  }else{
    home.classList.replace("d-block", "d-none")
    about.classList.replace("d-block", "d-none")
    contact.classList.replace("d-block", "d-none")
    applyM.classList.replace("d-block", "d-none")
  }
  
})