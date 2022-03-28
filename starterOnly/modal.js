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
	let firstNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]{2,}$',
		'u'
	);

	if (firstNameRegExp.test(acceptFirstName.value)) {
		validInput(inputFirstName);
		small.innerHTML = '';
		return true;
	} else {
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
	let lastNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]{2,}$',
		'u'
	);

	if (lastNameRegExp.test(acceptLastName.value)) {
		validInput(inputLastName);
		small.innerHTML = '';
		return true;
	} else {
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
		small.style.color = 'red';
		small.innerHTML = 'Adresse email non valide';
		return false;
	}
};

// Modal Birthday Input -----------------------

inputBirthday.addEventListener('change', function() {
	validBirthdate(this);
});

const validBirthdate = function() {
	let small = inputBirthday.nextElementSibling;
	let dateSaisie = inputBirthday.value;
	let dt = new Date(dateSaisie);
	// Calculer la différence entre la date actuelle et la date saisie.
	let dt_diff = Date.now() - dt.getTime();
	let age_dt = new Date(dt_diff);
	//Extraire l'année de la date
	let an = age_dt.getUTCFullYear();
	// Calculer maintenant l'âge de l'utilisateur
	let age = Math.abs(an - 1970);

	if (age < 18) {
		small.style.color = 'red';
		small.innerHTML = "Vous n'êtes pas majeur";
		invalidInput(inputBirthday);
		return false;
	} else if (dateSaisie == null || dateSaisie == '') {
		invalidInput(inputBirthday);
		small.style.color = 'red';
		small.innerHTML = 'Veuillez indiquer une date de naissance valide';
		return false;
	} else {
		validInput(inputBirthday);
		small.style.color = 'green';
		small.innerHTML = 'Age valide';
		return true;
	}
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
	validLocation(this);
});

const validLocation = function() {
	let selectedLocation;

	for (let inputLocation of inputLocations) {
		if (inputLocation.checked) {
			selectedLocation = inputLocation.value;
			return true;
		}
	}
};

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
	if (!isConditionAccepted) {
		alert("Veuillez accepter les conditions d'utilisation");
		e.preventDefault();
		return false;
	}

	if (
		validFirstName(inputFirstName) &&
		validLastName(inputLastName) &&
		validEmail(inputEmail) &&
		validBirthdate(inputBirthday) &&
		validQuantity(inputQuantity) &&
		validLocation(inputLocations) &&
		validCheckbox1(inputCheckbox1)
	) {
		alert('Formulaire envoyé');
		return true;
	} else {
		alert('Veuillez remplir toutes les champs');
		e.preventDefault();
		return false;
	}
});
