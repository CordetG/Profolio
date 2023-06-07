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
	$(document).on('click', '.nav-link', function (event) {
		if (!$(this).hasClass('active')) {
			$('.nav-link').removeClass('active');
			$(this).addClass('active');
		}
		event.preventDefault();
	});
};

const navActiveOnLoad = () => {
	$(document).ready('.nav-link', function () {
		if (!$(this).hasClass('active')) {
			$('.nav-link').removeClass('active');
			$(this).addClass('active');
		}
	});
};

window.addEventListener('load', () => {
	fetchHeader(headerPath);
	navActiveOnLoad();
	navToggle();
});
