class Projects {
	constructor() {
		this.main = document.querySelector('main');
		this.cardsContainer = document.createElement('section');
		this.cardsContainer.setAttribute('class', 'cardsContainer');
		this.main.append(this.cardsContainer);
	}

	buildShowcase = () => {
		console.log('hi');
	};

	createCard = (cardSection) => {
		const card = document.createElement('article');
		card.setAttribute('class', 'projectCard');
		this.projectContainer.appendChild(card);
		this.addCardTitle(cardSection);

		return card;
	};

	addCardTitle = () => {
		const title = document.createElement('h3');
		title.setAttribute('class', 'projectCard');
	};
}

const projectShowcase = new Projects();
projectShowcase.buildShowcase();

const projectCards = [
	{
		title: 'Professional Portfolio',
		description: `A portfolio website that highlights Cordet and her professional expereince. 
        The Professional portfolio utilizes multiple stacks within web development including
        HTML, javascript, and CSS. Part of the implementation features a navbar, about section, 
        previous work section, projects page, and contact page. `,
		link: 'hi'
	}
];
