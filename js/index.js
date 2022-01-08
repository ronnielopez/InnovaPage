window.addEventListener("scroll", ()=>{
    let header = document.querySelector("nav");
    header.classList.toggle("greenNav" , window.scrollY > 0)
})



AOS.init();