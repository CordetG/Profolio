// Class Hello builds main -> bioContainer -> img; main -> bioContainer -> bioText
class Hello {
	constructor() {
		this.main = document.querySelector('main');
		this.bioContainer = document.createElement('section');
		this.bioContainer.setAttribute('class', 'bioContainer');
		this.main.append(this.bioContainer);
	}

	// Call member functions to setup the bio
	setupBio = () => {
		this.bioContainer.append(this.addPictureToContainer());
		this.bioContainer.append(this.addBioToContainer());
	};

	// Include an image in <img> element
	addPictureToContainer = () => {
		const bioPic = document.createElement('img');
		bioPic.setAttribute('class', 'bioContainer-pic');
		bioPic.setAttribute('src', '../images/Cordet-Gula-About-Me.png');
		bioPic.setAttribute('alt', 'Picture of the Author, Cordet');
		return bioPic;
	};

	// Include the bio in <p> element
	addBioToContainer = () => {
		const myBio = document.createElement('div');
		myBio.setAttribute('class', 'bioContainer-bio');
		const bioArray = [
			`Cordet Gula is an aspiring deep-learning researcher with a unique background 
            in mechanical engineering, psychology, computer science, and neuroscience. 
            Currently pursuing a Master of Science degree in artificial intelligence 
            and machine learning at the Maseeh College of Engineering and Computer Science at 
            Portland State University, Cordet's research interests included studying 
            the functionality of the brain through computer science. One of her current 
            projects involves developing a machine learning program inspired by both Winamp 
            and chromesthesia, which combines her growing skills in music with 
            her knowledge of computer science and neuroscience.`,

			`In addition to her academic pursuits, Cordet is also involved in a range of 
            extracurricular activities. As a volunteer IT Support Technician with the 
            Computer Action Team, she is constantly expanding her knowledge of different 
            operating systems, hardware, software, and administration. She is also an active 
			member of the Security Club, where she completes exercises on platforms such 
			as tryhackme.com and hackthebox.com to deepen her understanding of cybersecurity.`,

			`Ms. Gula’s leadership skills are also evident in her work as a technical laboratory 
            assistant, where she helps other students learn key computer science concepts. She 
            has held various leadership roles, including Vice President of Fellowship for two 
            consecutive years at Clatsop Community College for the Phi Theta Kappa Honor Society.`,

			`To compliment her academic and leadership experience, Cordet developed a strong 
			technical stack. She has demonstrated proficiency in Python, C++, C, Bash, Javascript, and CSS.
			Using Python, she leverages her coding skills to build projects with artificial intelligence
			and machine learning algorithms as well as manipulating sound data. Within web development, 
			Cordet utilized Javascript and CSS both academically and in a professional organization setting
			to build and maintain website functionality demostrating her skills working with an API. 
			Cordet used C in her studies with registers, while C++ was used to implement data 
			structures and object oriented programming for various software projects. Additionally, 
			Cordet employed Bash to automate repetitive tasks showcasing her ability to optimize
			efficiency in her technical endeavers.`,

			`Outside of academia and work, Cordet enjoys a range of creative pursuits, including 
            painting, photography, and baking. Her dog Roux, named after the famous sauce, is always 
            eager to help in the kitchen! Cordet's enthusiasm for novelty extends to other areas of 
            her life as well - she is interested in traveling, learning new languages, and even making 
			her own clothes. Looking to the future, Cordet hopes to use her deep learning research to 
			make a positive impact in the field. Her ultimate goal is to develop AI systems that can 
			assist with learning about the complexity of cognitive processes.`
		];

		// Seperate each paragraph with a break-line
		for (const paragraph in bioArray) {
			const bioText = document.createElement('p');
			const htmlBreak = document.createElement('br');
			bioText.setAttribute('class', 'bioText');
			bioText.textContent = bioArray[paragraph];
			myBio.appendChild(bioText);
			myBio.appendChild(htmlBreak);
		}
		return myBio;
	};
}

// Load the bio
const sayHello = new Hello();
sayHello.setupBio();

// Print to console for loaded page elements
// Code used from CS563 hw1
window.addEventListener('load', loadPage);

// Load the page and print info to the console
function loadPage(event) {
	const altPic = document.querySelector('img');
	console.log(
		`The 'about me' page has loaded successfully.` +
			`\nPicture alt text: ${altPic.getAttribute('alt')}`
	);
}
