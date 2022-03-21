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
const inputLocation = document.querySelectorAll('input[name="location"]');
const inputCheckbox1 = document.querySelector('#checkbox1');
const inputCheckbox2 = document.querySelector('#checkbox2');

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
	if (acceptFirstName.value) {
		validInput(inputFirstName);
	} else if (!acceptFirstName.value) {
		alert('Veuillez renseigner un prénom');
		invalidInput(inputFirstName);
	}
};

// Modal lastName Input -----------------------

inputLastName.addEventListener('input', function() {
	validLastName(this);
});

const validLastName = function(acceptLastName) {
	if (acceptLastName.value) {
		validInput(inputLastName);
	} else if (!acceptLastName.value) {
		alert('Veuillez renseigner un nom');
		invalidInput(inputLastName);
	}
};

// Modal Email Input -------------------------------

inputEmail.addEventListener('change', function() {
	validEmail(this);
});

const validEmail = function(acceptEmail) {
	let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

	if (emailRegExp.test(acceptEmail.value)) {
		validInput(inputEmail);
		return true;
	} else {
		alert('Adresse email non valide');
		invalidInput(inputEmail);
		return false;
	}
};

// Modal Birthday Input -----------------------

inputBirthday.addEventListener('change', function() {
	validBirthdate(this);
});

const validBirthdate = function(acceptBirthdate) {
	if (acceptBirthdate.value) {
		validInput(inputBirthday);
	} else {
		alert("Veuillez insérer une date d'anniversaire");
		invalidInput(inputBirthday);
	}
};

// Modal Quantity Input -----------------------

inputQuantity.addEventListener('change', function() {
	validQuantity(this);
});

const validQuantity = function(acceptQuantity) {
	if (acceptQuantity.value) {
		validInput(inputQuantity);
	} else {
		alert('Veuillez renseigner un nombre');
		invalidInput(inputQuantity);
	}
};

// Modal Location Input ------------------------

// const validLocation = function() {
// 	if (input[(name = 'location')].checked) {
// 		console.log('Vous avez bien choisi un tournoi');
// 	}
// };
function validLocation() {
	if (location1.checked) {
		alert('Click');
	}
}
console.log(location1.checked);

// Modal Checkbox1 Input -----------------------

inputCheckbox1.addEventListener('change', function() {
	validCheckbox1(this);
});

const validCheckbox1 = function() {
	if (!inputCheckbox1.checked) {
		alert("Veuillez accepté les conditions d'utilisation");
	}
};

// Modal Checkbox2 Input -----------------------

inputCheckbox2.addEventListener('change', function() {
	validCheckbox2(this);
});

const validCheckbox2 = function() {
	if (inputCheckbox2.checked) {
		alert('Vous serez prévenu lors des prochains événements');
	}
};
