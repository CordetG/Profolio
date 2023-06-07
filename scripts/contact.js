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
	// Pronoun Label: User Choice
	const pronounLabel = document
		.querySelector('.formSet-legend')
		.textContent.replace(' *', '')
		.trim();
	const pronounTitle = document.querySelector(
		'[name=pronoun]:checked + label'
	).textContent;

	// Pronoun Label: pronouns
	console.log(`${pronounLabel}: ${isNullInput(pronounTitle)}`);
};
