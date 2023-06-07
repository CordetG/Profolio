// Print to console for loaded page elements
window.addEventListener('load', loadPage);

// Load the page and print info to the console
function loadPage(event) {
	const main = document.querySelector('main');
	main.appendChild(homeMessage());
	addInspirationPhoto();
}

// Welcome message to the user
homeMessage = () => {
	const message = document.createElement('p');
	message.setAttribute('class', 'homeMessage');
	message.textContent = `Welcome [Καλώς ήρθες] to my professional portfolio! \n
	You are currently on the 'Home' page. Feel free to checkout the 'About Me' 
	page to learn more about me, the 'Experience' page to view my résumé, 
	or the 'Projects' page to view my project showcase. \n
	To leave your contact info, visit 'Contact' and fill out the form provided. `;
	return message;
};

// Add background photo
addInspirationPhoto = () => {
	document.body.style.backgroundImage =
		"url('../images/rainbow-eucalyptus.jpg')";
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundPosition = 'left bottom';
};
