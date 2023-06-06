const projectCards = [
	{
		image: 'https://place-puppy.com/300x300',
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
		image: 'https://place-puppy.com/300x300',
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
		image: 'https://place-puppy.com/300x300',
		title: 'Awerallusion:\nVisualizing the Beauty of Sound\n[In Progress]',
		description: `The overall objective of creating Awerallusion is to develop a graphical integration
		between different sounds and music. Awerallusion will mimic chromesthesia and provide a visual
		cue for people who are just learning about the physics of sound by representing components of
		sound, such as frequency and pitch, in correlation with color and shapes.`,
		link: 'https://github.com/CordetG/Awerallusion',
		other: '../files/CS510_Awerallusion_Proposal.pdf',
		otherName: 'Project Proposal [pdf]'
	}
];

class Projects {
	constructor() {
		this.main = document.querySelector('main');
		this.cardsContainer = document.createElement('section');
		this.cardsContainer.setAttribute('class', 'cardsContainer');
		this.main.append(this.cardsContainer);
	}

	buildShowcase = () => {
		for (const project in projectCards) {
			this.cardsContainer.appendChild(this.createCard(projectCards[project]));
		}
	};

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

	addCardImage = (imgDiv, img) => {
		const projectImage = document.createElement('img');
		projectImage.setAttribute('class', 'projectImg');
		projectImage.setAttribute('src', img);
		projectImage.setAttribute('alt', 'Picture of author project');

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
		otherLink.textContent = 'Click here to view \n';
		linkSpan.textContent = label;
		otherLink.appendChild(linkSpan);

		para.appendChild(otherLink);
		linkDiv.appendChild(para);
	}
}

const projectShowcase = new Projects();
projectShowcase.buildShowcase();
