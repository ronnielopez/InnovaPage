window.addEventListener("scroll", ()=>{
    let header = document.querySelector("nav");
    header.classList.toggle("greenNav" , window.scrollY > 0)
})

/*------------------
	Formulario
--------------------*/
$("#applybtn").click(function () {
	//nombres
	let firstname = document.getElementById("firstName").value;
	let lastname = document.getElementById("lastName").value;

	//Correo
	let mail = document.getElementById("email").value;
    
    //Phone
	let phone = document.getElementById("phone").value;

	//English Level
	let level = document.getElementById("englishLevel").value;

	//Job Experience
	let job = document.getElementById("jobExperience").value;


	//Curriculum
	if (firstname != "" && lastname != "" && level != "" && job != "" && mail != "" && phone != "") {
        var settings = {
            "url": `https://gmailapitest.herokuapp.com/api/sendEmail/?firstname=${firstname}&lastname=${lastname}&level=${level}&phone=${phone}&mail=${mail}&job=${job}`,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Great, your email has been send'
            })
          });
		}else {
            Swal.fire({
                icon: 'error',
                title: 'Complete all the fields'
            })
        }
	

});


AOS.init();