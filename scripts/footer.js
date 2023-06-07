const footerPath = '../src/footer.html';
const footerElement = document.querySelector('.body-footer');

// Fetch the footer html to import to each html page
const fetchFooter = (path) => {
	fetch(path)
		.then((response) => {
			if (response.ok) {
				console.log('Footer loaded successfully!');
			}
			// Add throw error?
			return response.text();
		})
		.then((html) => {
			let docObj = new DOMParser();
			const docFooter = docObj.parseFromString(html, 'text/html');
			const footer = docFooter.querySelector('footer');
			footerElement.appendChild(footer);
		})
		.catch((error) => {
			console.error('Error: could not load footer.', error);
		});
};

window.addEventListener('load', () => {
	fetchFooter(footerPath);
});
