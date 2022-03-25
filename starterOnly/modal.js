function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBody = document.querySelector('.modal-body');
const closeBtn = document.querySelector('.close');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const inputFirstName = document.querySelector('#first');
const inputLastName = document.querySelector('#last');
const inputEmail = document.querySelector('#email');
const inputBirthday = document.querySelector('#birthdate');
const inputQuantity = document.querySelector('#quantity');
const inputLocations = document.querySelectorAll('input[name="location"]');
const Locations = document.querySelector('#Locations');
const inputCheckbox1 = document.querySelector('#checkbox1');
const inputCheckbox2 = document.querySelector('#checkbox2');
const validButton = document.querySelector('.btn-submit');
let isConditionAccepted = true;

console.log(inputs);

// launch modal event ------------------------

modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
modalBody.addEventListener('click', cleanInput);
closeBtn.addEventListener('click', function() {
	modalbg.style.display = 'none';
});

// launch modal form -------------------------

function launchModal() {
	modalbg.style.display = 'block';
}
function validInput(input) {
	input.style.border = '2px solid green';
}
function invalidInput(input) {
	input.style.border = '2px solid red';
}

function cleanInput() {
	inputFirstName.style.border = 'none';
	inputLastName.style.border = 'none';
	inputEmail.style.border = 'none';
	inputBirthday.style.border = 'none';
	inputQuantity.style.border = 'none';
}

// ---------------------------Modal Form -------------------------------

// Modal firstName Input ---------------------

inputFirstName.addEventListener('input', function() {
	validFirstName(this);
});

const validFirstName = function(acceptFirstName) {
	let small = inputFirstName.nextElementSibling;
	if (acceptFirstName.value) {
		validInput(inputFirstName);
		small.innerHTML = '';
		return true;
	} else if (!acceptFirstName.value) {
		invalidInput(inputFirstName);
		small.innerHTML = 'Veuillez renseigner un prénom';
		return false;
	}
};

// Modal lastName Input -----------------------

inputLastName.addEventListener('input', function() {
	validLastName(this);
});

const validLastName = function(acceptLastName) {
	let small = inputLastName.nextElementSibling;

	if (acceptLastName.value) {
		validInput(inputLastName);
		small.innerHTML = '';
		return true;
	} else if (!acceptLastName.value) {
		invalidInput(inputLastName);
		small.innerHTML = 'Veuillez renseigner un nom';
		return false;
	}
};

// Modal Email Input -------------------------------

inputEmail.addEventListener('change', function() {
	validEmail(this);
});

const validEmail = function(acceptEmail) {
	let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
	let small = inputEmail.nextElementSibling;

	if (emailRegExp.test(acceptEmail.value)) {
		validInput(inputEmail);
		small.style.color = 'green';
		small.innerHTML = 'Adresse email valide';
		return true;
	} else {
		invalidInput(inputEmail);
		small.innerHTML = 'Adresse email non valide';
		return false;
	}
};

// Modal Birthday Input -----------------------

// mettre en place d'un regex pour autoriser l'age
inputBirthday.addEventListener('change', function() {
	validBirthdate(this);
});

const validBirthdate = function(acceptBirthdate) {
	let small = inputBirthday.nextElementSibling;

	let pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$, g/;
	// let testPattern = pattern.test(acceptBirthdate.value);
	// console.log(testPattern);
	if (pattern.test(acceptBirthdate)) {
		alert('valid date');
	} else {
		invalidInput(inputBirthday);
		small.innerHTML = 'Date de naissance non valide';
		return false;
	}

	// if (acceptBirthdate.value) {
	// 	validInput(inputBirthday);
	// 	small.style.color = 'green';
	// 	small.innerHTML = 'Date de naissance valide';
	// 	return true;
	// } else {
	// 	invalidInput(inputBirthday);
	// 	small.innerHTML = 'Date de naissance non indiquée';
	// 	return false;
	// }
};

// Modal Quantity Input -----------------------

inputQuantity.addEventListener('change', function() {
	validQuantity(this);
});

const validQuantity = function(acceptQuantity) {
	let small = inputQuantity.nextElementSibling;
	if (acceptQuantity.value) {
		validInput(inputQuantity);
		return true;
	} else {
		invalidInput(inputQuantity);
		small.innerHTML = 'Veuillez renseigner un nombre de participation';
		return false;
	}
};

// Modal Location Input ------------------------

Locations.addEventListener('click', function() {
	let selectedLocation;
	for (let inputLocation of inputLocations) {
		if (inputLocation.checked) {
			selectedLocation = inputLocation.value;
			console.log(inputLocation.value);
			return;
		}
	}
});

// Modal Checkbox1 Input -----------------------

inputCheckbox1.addEventListener('change', function() {
	isConditionAccepted = !isConditionAccepted;
});

const validCheckbox1 = function() {
	if (inputCheckbox1.checked) {
		return true;
	} else {
		return false;
	}
};

// Modal Checkbox2 Input -----------------------

inputCheckbox2.addEventListener('change', function() {
	validCheckbox2(this);
});

const validCheckbox2 = function() {
	let small = inputCheckbox2.nextElementSibling;
	if (inputCheckbox2.checked) {
		small.style.color = 'white';
		small.innerHTML = 'Vous serez prévenu lors des prochains événements';
		return true;
	} else {
		return false;
	}
};

// Valid Form

form.addEventListener('submit', function(e) {
	// e.preventDefault();

	if (!isConditionAccepted) {
		alert("Veuillez accepter les conditions d'utilisation");
		return;
	}
	if (
		validFirstName(inputFirstName) &&
		validLastName(inputLastName) &&
		validEmail(inputEmail) &&
		validBirthdate(inputBirthday) &&
		validQuantity(inputQuantity) &&
		validCheckbox1(inputCheckbox1)
	) {
		alert('Formulaire envoyé');
	} else {
		alert('Veuillez remplir toutes les champs');
		e.preventDefault();
		return false;
	}
});
