// --- Array of projects to add to the projects page ---
const projectCards = [
	{
		image: '../images/ProfolioSite.JPG',
		title: 'Professional Portfolio',
		description: `A portfolio website that highlights Cordet and her professional experience. 
        The Professional portfolio utilizes multiple stacks within web development including
        HTML, javascript, and CSS. Part of the implementation features a navbar, about section, 
        previous work section, projects page, and contact page. `,
		link: 'https://github.com/CordetG/Profolio',
		other: 'https://cordetg.github.io/Profolio/',
		otherName: 'Deployed Website'
	},
	{
		image: '../images/AIChessPlayer.JPG',
		title:
			'Pawn Chess Optimization: \nEmpirical Comparison of Minimax Algorithms',
		description: `An implementation of minimax and alpha-beta pruning algorithms using
		an heuristic agent and a random agent. Pawn chess is the game played by both agents
		and the results determine how effective heuristics are in agent decisions and how
		much more effective the minimax algorithm is with alpha-beta pruning.`,
		link: 'https://github.com/CordetG/AIChessPlayer',
		other: '../files/AI_CS541_451_Final_Project.pdf',
		otherName: 'Project Report [pdf]'
	},
	{
		image: '../images/awerallusion-card-photo.jpg',
		title: 'Awerallusion:\nVisualizing the Beauty of Sound\n[In Progress]',
		description: `The overall objective of creating Awerallusion is to develop a graphical integration
		between different sounds and music. Awerallusion will mimic chromesthesia and provide a visual
		cue for people who are just learning about the physics of sound by representing components of
		sound, such as frequency and pitch, in correlation with color and shapes.`,
		link: 'https://github.com/CordetG/Awerallusion',
		other: '../files/CS510_Awerallusion_Proposal.pdf',
		otherName: 'Project Proposal [pdf]'
	},
	{
		image: '../images/tic-tac-toe-agent.JPG',
		title: 'Artificial Intelligence:\nTic-Tac-Toe Agent',
		description: `An agent [named: MINT] built to learn to play tic-tac-toe.
		The agent uses Q-learning as an extension of the temporal difference learning model
		to figure out the best way to play tic-tac-toe. The model uses a combination of
		exploration and exploitation as part of the epsilon greedy strategy.`,
		link: 'https://github.com/CordetG/tic-tac-toe-agent',
		other: '',
		otherName: ''
	}
];

// --- Class To build cards for projects ---
class Projects {
	constructor() {
		this.main = document.querySelector('main');
		this.cardsContainer = document.createElement('section');
		this.cardsContainer.setAttribute('class', 'cardsContainer');
		this.main.append(this.cardsContainer);
	}

	// function call for object
	buildShowcase = () => {
		for (const project in projectCards) {
			this.cardsContainer.appendChild(this.createCard(projectCards[project]));
		}
	};

	// Create the card to add to the container
	createCard = (oneProject) => {
		const card = document.createElement('article');
		card.setAttribute('class', 'projectCard');
		const imgDiv = document.createElement('div');
		imgDiv.setAttribute('class', 'imgSection');
		const txtDiv = document.createElement('div');
		txtDiv.setAttribute('class', 'txtSection');
		const linkDiv = document.createElement('div');
		linkDiv.setAttribute('class', 'linkSection');
		card.appendChild(imgDiv);
		card.appendChild(txtDiv);
		card.appendChild(linkDiv);
		this.cardsContainer.appendChild(card);

		this.addCardImage(imgDiv, oneProject.image);
		this.addCardTitle(txtDiv, oneProject.title);
		this.addCardDescription(txtDiv, oneProject.description);
		this.addCardBtn(linkDiv, oneProject.link);
		this.addOtherLink(linkDiv, oneProject.other, oneProject.otherName);

		return card;
	};

	// --- Add each individual attribute to a card ---
	addCardImage = (imgDiv, img) => {
		const projectImage = document.createElement('img');
		projectImage.setAttribute('class', 'projectImg');
		projectImage.setAttribute('src', img);
		projectImage.setAttribute(
			'alt',
			'Picture of author project' + `${img.split('/').pop()}`
		);

		imgDiv.appendChild(projectImage);
	};

	addCardTitle = (txtDiv, title) => {
		const projectTitle = document.createElement('h3');
		projectTitle.setAttribute('class', 'projectTitle');
		projectTitle.textContent = title;
		txtDiv.appendChild(projectTitle);
	};

	addCardDescription = (txtDiv, description) => {
		const projectDesc = document.createElement('p');
		projectDesc.setAttribute('class', 'projectDesc');
		projectDesc.textContent = description;
		txtDiv.appendChild(projectDesc);
	};

	addCardBtn = (linkDiv, link) => {
		const btnPara = document.createElement('p');
		const githubBtn = document.createElement('a');
		btnPara.setAttribute('class', 'githubLinkWrap');
		githubBtn.setAttribute('class', 'githubLink');
		githubBtn.setAttribute('href', link);
		githubBtn.setAttribute('target', '_blank');
		githubBtn.textContent = 'Checkout Github Repo';
		btnPara.appendChild(githubBtn);
		linkDiv.appendChild(btnPara);
	};

	addOtherLink(linkDiv, link, label) {
		const para = document.createElement('p');
		const otherLink = document.createElement('a');
		const linkSpan = document.createElement('span');
		para.setAttribute('class', 'otherLinkIntro');
		otherLink.setAttribute('class', 'otherLink');
		otherLink.setAttribute('href', link);
		otherLink.setAttribute('target', '_blank');
		para.textContent = 'Additional project deliverables: ';
		otherLink.textContent =
			link == ''
				? 'This project has no files to display. \n'
				: 'Link opens an external window: \n';
		linkSpan.textContent = label;
		otherLink.appendChild(linkSpan);

		para.appendChild(otherLink);
		linkDiv.appendChild(para);
	}
}

// --- Create a project showcase object ---
const projectShowcase = new Projects();
projectShowcase.buildShowcase();
