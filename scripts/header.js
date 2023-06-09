const headerPath = '../src/header.html';
const headerElement = document.querySelector('.body-header');

// Fetch the header html to import into every html page
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
	const currentUrl = window.location.href;
	const activeNav = currentUrl.split('/').pop();
	const elements = document.querySelectorAll('a');
	const linksToToggle = Array.from(elements);
	let linksToSearch = [];
	for (const link in linksToToggle) {
		linksToSearch.push(linksToToggle[link].href.split('/').pop());
	}
	const index = linksToSearch.indexOf(activeNav);
	elements[index].classList.add('active');
};

window.addEventListener('load', () => {
	fetchHeader(headerPath);
	/* Due to incredibly slow loading in chrome, add check to 
	increase loading time of the header
	https://codepedia.info/detect-browser-in-javascript */
	if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
		setTimeout(navToggle, 600);
	} else {
		setTimeout(navToggle, 100);
	}
});
