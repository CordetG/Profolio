const headerPath = '../header.html';
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

window.addEventListener('load', () => {
	fetchHeader(headerPath);
});
