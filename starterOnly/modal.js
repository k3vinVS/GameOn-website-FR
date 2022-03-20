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

// functions Modal Form ----------------------

function validInput(input) {
	input.style.border = '2px solid green';
}
function invalidInput(input) {
	input.style.border = '2px solid red';
}

// launch modal event ------------------------
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form -------------------------
function launchModal() {
	modalbg.style.display = 'block';
}

// close modal form --------------------------
closeBtn.addEventListener('click', () => {
	modalbg.style.display = 'none';
});

// Modal Form -------------------------------

// Modal Email Form -------------------------------

form.email.addEventListener('change', function() {
	validEmail(this);
});

const validEmail = function(acceptEmail) {
	let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

	if (emailRegExp.test(acceptEmail.value)) {
		validInput(inputEmail);
	} else {
		alert('Adresse non valide');
		invalidInput(inputEmail);
	}
};
