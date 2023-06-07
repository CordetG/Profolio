const headerPath = '../src/header.html';
const headerElement = document.querySelector('.body-header');

const fetchHeader = (path) => {
	fetch(path)
		.then((response) => {
			if (response.ok) {
				console.log('Header loaded successfully!');
			}
			return response.text();
		})
		.then((html) => {
			let docObj = new DOMParser();
			const docHeader = docObj.parseFromString(html, 'text/html');
			const headerToInsert = docHeader.querySelector('header');
			headerElement.appendChild(headerToInsert);
		})
		.catch((error) => {
			console.error('Error: could not load header.', error);
		});
};

// Toggle navbar link so that it appears disengaged while the user
// is on that page.
const navToggle = () => {
	const linkToToggle = document.getElementsByClassName('nav-link');
	console.log(linkToToggle);
	linkToToggle[0].classList.add('active');
};
window.addEventListener('load', () => {
	fetchHeader(headerPath);
});
/*document.addEventListener('DOMContentLoaded', function () {
	navToggle();
});*/
