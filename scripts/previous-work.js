// Class Resume builds main -> resumeCards
class Resume {
	constructor() {
		this.main = document.querySelector('main');
		this.resumeContainer = document.createElement('section');
		this.resumeContainer.setAttribute('class', 'resumeContainer');
		this.main.append(this.resumeContainer);
	}

	setupResume = () => {
		const articleToChange = document.getElementsByClassName('resumeCard');
		const titleList = [
			'Cordet Gula',
			'Professional Experience',
			'Education',
			'Extracurricular Activities',
			'Achievements'
		];
		const previousWorkSections = [
			'Technical Laboratory Assistant',
			'Mechanical Process Engineer',
			'Assistant Natural Sciences Laboratory Technician'
		];
		const educationSections = [
			'Master of Science | Computer Science',
			'Bachelor of Science | Psychology',
			'Associate of Arts Transfer Degree | Biology'
		];
		const contentList = ['stuff', previousWorkSections, educationSections];

		for (let i = 0; i < 5; ++i) {
			this.resumeContainer.append(
				this.createCard(titleList[i], contentList[i])
			);
		}
		articleToChange[0].appendChild(this.addAccentCard());
		articleToChange[0].classList.add('resumeCard--accentCard');
	};

	addAccentCard = () => {
		const accentPic = document.createElement('img');

		accentPic.setAttribute('class', 'resumeCard-pic');
		accentPic.setAttribute('src', 'http://placekitten.com/200/300');
		accentPic.setAttribute('alt', 'Picture of Cordet and her Achievements');

		return accentPic;
	};

	createCard = (cardTitle, textToAdd) => {
		const card = document.createElement('article');
		const cardHeader = document.createElement('h3');
		const cardDiv = document.createElement('div');
		const cardText = document.createElement('p');
		const cardSubText = document.createElement('span');

		card.setAttribute('class', 'resumeCard');
		cardHeader.setAttribute('class', 'resumeCard-title');
		cardDiv.setAttribute('class', 'resumeCard-section');
		cardText.setAttribute('class', 'resumeCard-content');
		cardSubText.setAttribute('class', 'content-subHeading');

		cardHeader.textContent = `${cardTitle}`;
		this.addCardSection(cardDiv, textToAdd);

		card.appendChild(cardHeader);
		card.appendChild(cardDiv);
		cardDiv.appendChild(cardText);
		cardText.appendChild(cardSubText);

		return card;
	};

	addCardSection = (cardContent, textToAdd) => {
		const thisCard = document.querySelector('.resumeCard');

		for (const text in textToAdd) {
			cardContent.textContent = `${textToAdd[text]}`;
		}
	};
}

const buildResume = new Resume();
buildResume.setupResume();

const cardData = [
	{
		title: 'Cordet Gula',
		affiliation: '',
		details: ''
	}
];
