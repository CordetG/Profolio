// --- const array of info to add to the resume page ---
const resumeCards = [
	{
		title: 'Professional Experience',
		sections: [
			'Technical Laboratory Assistant',
			'Mechanical Process Engineer',
			'Natural Sciences Laboratory Technician Assistant'
		],
		affiliation: [
			'Portland State University',
			'TTM Technologies',
			'Clatsop Community College'
		],
		dates: ['Apr 2023 - Present', 'Sep 2018 - May 2021', 'Mar 2016 - Jun 2016'],
		details: [
			`Assisting students with understanding software development and computer science concepts.`,

			`Data analysis and presentation for quality improvement | Testing for software
            development | Tracking data patterns of chemical and mechanical effects on circuit
            board materials | Develop programs for mechanical X-ray automated CNC equipment |
            Using data collection software to determine a path forward on new designs | Statistical
            process control`,

			`Documented inventory of chemicals using Excel | Handled and disposed of chemicals
            according to OSHA regulations | Ordered necessary chemicals and biological
            components for labs`
		]
	},
	{
		title: 'Education',
		sections: [
			'Master of Science | Computer Science',
			'Graduate Preparation | Computer Science',
			'Bachelor of Science | Computer Science',
			'Associate of Arts Oregon Transfer Degree'
		],
		affiliation: [
			'Portland State University',
			'Portland State University',
			'Pacific University',
			'Clatsop Community College'
		],
		dates: [
			'Sep 2022 - Present',
			'Jan 2021 - Jun 2022',
			'Aug 2016 - May 2018',
			'Apr 2014 - Jun 2016'
		],
		details: [
			`>Curriculum focused on artificial intelligence, machine learning, and deep learning.
            >Artificial Intelligence | Algorithm Design and Analysis | Code Revision and Review 
            >IT support Technician | Security club member | Software Colaborator`,

			`>Developed undergraduate coursework to transfer skills toward a Master's Degree.
            >Linear algebra | Calculus | Data Structures | Algorithms and Complexity | Discrete
                Math | Computer and Operating Systems | Object-Oriented Programming
            >Leadership Officer in Women/We in Computer Science`,

			`>Neuroscience emphasis | Psychological research focus | Achieved Dean's List
            >Cognitive Science | Research Methods | Development | Abnormal Psychology |
            Psychobiography | Behavioral Statistics | Behavioral Endocrinology | Neurological
            Sensation and Perception
            >Western Psychological Association Thesis Presentation | Founders Scholar | Ford
            Family Foundation Scholar`,

			`>Earned a transfer degree with biology coursework as the primary focus | Achieved
            Dean's List and Honor Roll | Graduated with Honors
            >Anatomy and Physiology | Chemistry | Microbiology | Animal Behavior | General
            Studies
            >Phi Theta Kappa Honor Society Member and Vice President of Fellowship | Honors
            Program Graduate | TRIO Recognition Awards for Outstanding Students`
		]
	},
	{
		title: 'Extracurricular Activities',
		sections: [
			'Security Club Member',
			'IT Support Technician',
			'Software Managemenet Colaborator',
			'Vice President of Fellowship'
		],
		affiliation: [
			'Portland State Security Club',
			'Computer Action Team',
			'Portland State Aerospace Society',
			'Phi Theta Kappa at Clatsop Community College'
		],
		dates: [
			'Jan 2023 - Present',
			'Oct 2022 - Present',
			'Oct 2022 - Jan 2023',
			'Sep 2014 - May 2016'
		],
		details: [
			`Learning about security vulnerabilities in the technology industry | Capture the flag
            practices and identifying exploits in source code, hidden files, administrative
            privileges, password protection, and countless other means | We also participate in
            online competitions | Interested in becoming a club officer in the future`,

			`Resolving technology issues with accounts, hardware, and software | Expanding 
            skills as a participant of the leadership board | Developing skills
            in web development | Windows administration | Linux administration | Server
            management | Video recording, photography, and media editing | Bash scripting |
            Creative skills are utilized to develop advertisements, logos, and other digital media.`,

			`Contributing member for the Helmholtz Cage software written in both Python and
            Arduino. Developing software to communicate between a raspberry pi, Arduino, and
            magnetometer with the Helmholtz Cage to create a controlled environment that
            simulates the Earth's magnetic field for OreSat satellite testing.`,

			`Encourage scholarly fellowship at all levels of the society |
            Implement strategies to increase membership |
            Support the student body by fundraising for scholarships through organized 
            events in the community`
		]
	},
	{
		title: 'Achievements',
		sections: [
			`Portland's Women in Technology Investing In You Scholarship`,
			`Capstone Research Conference Presentation`,
			`Ford Family Foundation Scholar`,
			`Founders Scholar`,
			`Dean's List, Honor Roll`,
			`Honor's Program Graduate`,
			`Phi Theta Kappa Member and Officer`
		],
		affiliation: [
			`Portland State UniversityPortland's Women in Technology`,
			`Western Psychological Association`,
			`Ford Family Foundation`,
			`Pacific University`,
			`Clatsop Community College and Pacific University`,
			`Clatsop Community College`,
			`Phi Theta Kappa and Clatsop Community College`
		],
		dates: [
			'May 2021',
			'Apr 2018',
			'May 2016',
			'May 2016',
			'2014 - 2018',
			'June 2016',
			'Sep 2015'
		],
		details: [
			`One of thirteen recipients of the PDXWIT scholarship.`,

			`Capstone research submitted and approved to present at the Western Psychological
            Association Conference.`,

			`One of 25 transfer student scholarship recipients out of 4,697 applicants of this
            prestigious scholarship that showed high academic promise despite environmental
            difficulties.`,

			`Highest merit scholarship awarded to admitted students based on academic
            performance.`,

			`Attained Dean’s List and Honor Roll statuses at Clatsop Community College and
            Pacific University.`,

			`Scholarship program for students who took specified advanced courses while
            sustaining a high GPA.`,

			`Participating vice president of Phi Theta Kappa, an honors society for community college 
            students with high grade point averages.`
		]
	}
];

// --- Class Resume builds main -> resumeCards ---
class Resume {
	constructor() {
		this.main = document.querySelector('main');
		this.resumeContainer = document.createElement('section');
		this.resumeContainer.setAttribute('class', 'resumeContainer');
		this.main.append(this.resumeContainer);
	}

	// object calls this function to build the resume page
	setupResume = () => {
		this.resumeContainer.appendChild(this.addAccentCard());
		for (const card in resumeCards) {
			this.resumeContainer.appendChild(this.createCard(resumeCards[card]));
		}
	};

	// creates the accent card (left)
	addAccentCard = () => {
		const accentCard = document.createElement('article');
		const accentPic = document.createElement('img');
		const accentName = document.createElement('h3');
		const accentPosition = document.createElement('h4');

		accentCard.setAttribute('class', 'resumeCard');
		accentCard.classList.add('resumeCard--accentCard');

		accentPic.setAttribute('class', 'resumeCard-pic');
		accentPic.setAttribute(
			'src',
			'../images/Cordet-Gula-Experience-Photo.jpeg'
		);
		accentPic.setAttribute('alt', 'Picture of Cordet and her Achievements');

		accentName.setAttribute('class', 'resumeCard-name');
		accentPosition.setAttribute('class', 'resumeCard-position');

		accentName.textContent = 'Cordet Gula';
		accentPosition.textContent = 'Graduate Scholar';

		accentCard.appendChild(accentPic);
		accentCard.appendChild(accentName);
		accentCard.appendChild(accentPosition);

		return accentCard;
	};

	// --- creates the remaining cards with their attributes ---
	createCard = (cardSection) => {
		const card = document.createElement('article');
		card.setAttribute('class', 'resumeCard');
		this.resumeContainer.appendChild(card);
		this.addCardTitle(cardSection);

		return card;
	};

	addCardTitle = (card) => {
		const cards = document.getElementsByClassName('resumeCard');
		const index = resumeCards.indexOf(card) + 1;
		const cardHeader = document.createElement('h3');

		cardHeader.setAttribute('class', 'resumeCard-title');
		cardHeader.textContent = card.title;
		cards[index].appendChild(cardHeader);
		this.addCardSection(card, cards[index]);
	};

	addCardSection = (card, cardElement) => {
		const roles = card.sections;

		for (const title in roles) {
			const cardDiv = document.createElement('div');
			cardDiv.setAttribute('class', 'resumeCard-section');
			cardElement.appendChild(cardDiv);
			cardDiv.appendChild(this.addSectionRole(roles[title]));
			cardDiv.appendChild(this.addSectionDate(card, title));
			cardDiv.appendChild(this.addSectionAffiliation(card, title));
			cardDiv.appendChild(this.addSectionDetails(card, title));
		}
	};

	addSectionRole = (role) => {
		const cardSubHeader = document.createElement('h4');
		cardSubHeader.setAttribute('class', 'resumeCard-role');
		cardSubHeader.textContent = role;
		return cardSubHeader;
	};

	addSectionDate = (card, dateRange) => {
		const date = card.dates[dateRange];
		const cardSubText = document.createElement('p');
		cardSubText.setAttribute('class', 'content-date');
		cardSubText.textContent = date;
		return cardSubText;
	};

	addSectionAffiliation = (card, affiliate) => {
		const cardSubText = document.createElement('p');
		cardSubText.setAttribute('class', 'content-affiliations');
		const place = card.affiliation[affiliate];
		cardSubText.textContent = place;
		return cardSubText;
	};

	addSectionDetails = (card, detail) => {
		const roleDetails = card.details[detail].split('>');
		const cardText = document.createElement('p');
		cardText.setAttribute('class', 'resumeCard-content');
		for (const detailLine in roleDetails) {
			cardText.appendChild(document.createTextNode(roleDetails[detailLine]));
			cardText.append(document.createElement('br'));
		}
		return cardText;
	};
}

// --- Build the resume Page ---
const buildResume = new Resume();
buildResume.setupResume();
