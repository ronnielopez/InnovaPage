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


/* animacion */

if (document.body.animate) {
  document.querySelector('#button').addEventListener('mouseenter', pop);
}

function pop (e) {
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector('#button').getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // As we need the coordinates of the mouse, we pass them as arguments
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle (x, y) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  
  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(181, 49%, 100%)`;
  
  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Store the animation in a variable as we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    // Set a random duration from 500 to 1500ms
    duration: Math.random() * 1000 + 500,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    // Delay every particle with a random value of 200ms
    delay: Math.random() * 200
  });
  
  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}

 /*------------------
	Preloder
--------------------*/
function loader() {
	$(window).on('load', function() { 
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	});
}
(function($) {
	// Call all functions
	loader();

})(jQuery);