// --- Attribute data for form input boxes ---
const inputBoxInfo = [
	{
		for: 'fullname',
		label: 'Name: ',
		class: 'formBox-input',
		type: 'text',
		id: 'fullname',
		name: 'fullname',
		placeholder: 'Full Name',
		size: '30',
		maxlength: '50',
		required: true
	},
	{
		for: 'email',
		label: 'Email: ',
		class: 'formBox-input',
		type: 'email',
		id: 'email',
		name: 'email',
		placeholder: 'username@pdx.edu',
		size: '30',
		maxlength: '50',
		required: true
	},
	{
		for: 'info',
		label: 'Reason: ',
		class: 'formBox-input',
		type: 'text',
		id: 'info',
		name: 'info',
		placeholder: 'Setup interview.',
		size: '100',
		maxlength: '150',
		required: true
	},
	{
		for: 'contact',
		label: 'Contact Date: ',
		class: 'formBox-input',
		type: 'date',
		id: 'contact',
		name: 'contact',
		placeholder: null,
		size: null,
		maxlength: null,
		required: false
	}
];

// --- Class for building the form ---
class Form {
	constructor() {
		this.form = document.getElementById('contactForm');
		this.radioButtons = document.querySelector('.form-pronounSet');
	}

	// Called from new object
	buildForm = () => {
		this.addBoxes();
	};

	// Creates all the attributes for the input boxes
	addBoxes = () => {
		for (let box = 0; box < 4; ++box) {
			const inputBox = document.createElement('div');
			const labelInput = document.createElement('label');
			let formAttrNum = 8;
			inputBox.setAttribute('class', 'form-box');
			labelInput.setAttribute('class', 'formBox-label');
			labelInput.setAttribute('for', `${inputBoxInfo[box].for}`);
			labelInput.textContent = `${inputBoxInfo[box].label}`;
			this.form.appendChild(inputBox);
			if (box < 3) {
				labelInput.appendChild(this.makeRequired());
			} else {
				formAttrNum = 4;
			}
			const inputInfo = this.addInputBoxes(inputBoxInfo[box], formAttrNum);
			inputBox.appendChild(labelInput);
			inputBox.appendChild(inputInfo);
			this.form.insertBefore(inputBox, this.radioButtons);
		}
	};

	// Make the classes required
	makeRequired = () => {
		const inputSpan = document.createElement('span');
		inputSpan.setAttribute('class', 'req');
		inputSpan.textContent = '*';
		return inputSpan;
	};

	// Add input box attributes
	addInputBoxes = (box, formAtt) => {
		const inputInfo = document.createElement('input');
		const classAttrList = [
			'class',
			'type',
			'id',
			'name',
			'placeholder',
			'size',
			'maxlength',
			'required'
		];
		for (let i = 0; i < formAtt; ++i) {
			inputInfo.setAttribute(`${classAttrList[i]}`, `${box[classAttrList[i]]}`);
		}
		return inputInfo;
	};
}

// --- Build the form ---
const fillForm = new Form();
fillForm.buildForm();

// Print to the console on submit event
let form = document.querySelector('form');
form.onsubmit = (event) => {
	displayUserInfoToConsole(event);
};

// Display form after a submit
displayUserInfoToConsole = (event) => {
	// Form Submission console output
	console.group('========= Form Submission =========');
	outputGeneralInfo();
	outputPronouns();
	console.groupEnd();
	event.preventDefault();
};

/* Check if user input is valid and output a consistent
string if empty (only available for optional input) */
isNullInput = (userInput) => {
	return userInput ? userInput : '-----';
};

// Check for birthdate (needed for reformatting)
isDate = (contentType) => {
	return contentType == 'contact:' ? true : false;
};

// Reformate the user's birthdaye to 'Month day, year' Ex: July 28, 2023
formatDate = (dateInput) => {
	const birthDate = new Date(dateInput);
	birthDate.setDate(birthDate.getDate() + 1);
	return !dateInput
		? '-----'
		: birthDate.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
		  });
};

// Attempted to use form.elements as suggested, but it kept producing errors
// Output all the general info
outputGeneralInfo = () => {
	// formBoxLabels = [Name:, Username:, ...]
	const formBoxLabels = document.querySelectorAll('.formBox-label');

	for (let i = 0; i < formBoxLabels.length; i++) {
		// More semantic use to outptu label: info
		const formLabelToLog = formBoxLabels[i].textContent;
		const formValueToLog = document.getElementById(
			formBoxLabels[i].getAttribute('for')
		).value;

		// Need to reformat the date of birth
		if (isDate(formLabelToLog)) {
			console.log(
				`${formLabelToLog} ${isNullInput(formatDate(formValueToLog))}`
			);
			// Otherwise output as is, but exclude the * required symbol
		} else {
			console.log(
				`${formLabelToLog.replace(' *', '').trim()} ${isNullInput(
					formValueToLog
				)}`
			);
		}
	}
};

// Pronoun Legend outputs only one readio button
outputPronouns = () => {
	const buttons = document.querySelectorAll('input[type="radio"]');
	const isNull = Array.from(buttons).every((radio) => !radio.checked);
	const pronounTitle = null;

	// Pronoun Label: User Choice
	const pronounLabel = document
		.querySelector('.formSet-legend')
		.textContent.replace(' *', '')
		.trim();
	// Print and return
	if (!isNull) {
		pronounTitle = document.querySelector(
			'[name=pronoun]:checked + label'
		).textContent;
	}

	// Pronoun Label: pronouns
	console.log(`${pronounLabel}: ${isNullInput(pronounTitle)}`);
};
