
const accordion = document.querySelectorAll('.accordionbx');

console.log(accordion);
for(i = 0; i < accordion.length; i++){
	console.log(accordion[i])

	const newAccord = accordion[i];
	console.log(newAccord);
	newAccord.addEventListener('click', ()=>{
		newAccord.classList.toggle('active');
		// console.log('clicked!')
	})
}


// navgation link code

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
	navLinks.classList.toggle('nav-active');

	// burger animation
	burger.classList.toggle('toggle')
});

  