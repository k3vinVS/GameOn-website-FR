// Permet l'affichage du menu hamburger lorsque l'affichage se réduit (responsive)
function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements
const topNav = document.querySelector('.topnav');
const modalbg = document.querySelector('.bground');
const content = document.querySelector('.content');
const modalBody = document.querySelector('.modal-body');
const closeBtn = document.querySelector('.close');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const form = document.querySelector('form');
const inputFirstName = document.querySelector('#first');
const inputLastName = document.querySelector('#last');
const inputEmail = document.querySelector('#email');
const inputBirthday = document.querySelector('#birthdate');
const validContent = document.querySelector('#valid-content');
const inputQuantity = document.querySelector('#quantity');
const inputLocations = document.querySelectorAll('input[name="location"]');
const Locations = document.querySelector('#Locations');
const messageLocation = document.querySelector('#messageLocation');
const inputCheckbox1 = document.querySelector('#checkbox1');
const inputCheckbox2 = document.querySelector('#checkbox2');
const validButton = document.querySelector('.btn-submit');
let isConditionAccepted = true;

// launch modal event ------------------------

modalBtn.forEach((btn) => btn.addEventListener('click', launchModal)); // Pour tous les boutons "je m'inscris", lancement du formulaire (fonction "launchModal")
modalBody.addEventListener('click', cleanInput); // Permet d'enlever la coloration des inputs (validation ou erreur) du formulaire à chaque clique sur celui-ci
closeBtn.addEventListener('click', function() {
	modalbg.style.display = 'none'; // Permet de fermer le formulaire grâce au bouton croix
});
// validButton.addEventListener('click', validForm);

// launch modal form -------------------------

function launchModal() {
	modalbg.style.display = 'block'; // Permet l'apparition du formulaire
	modalbg.style.background = 'none'; // Permet la disparition du voile en arrière plan du formulaire
}

// Valide d'une couleur verte les inputs du formulaire
function validInput(input) {
	input.style.border = '2px solid green';
}

// Invalide d'une couleur rouge les inputs du formulaire
function invalidInput(input) {
	input.style.border = '2px solid red';
}

// Permet de vider les inputs des couleurs affectées( valide ou non)
function cleanInput() {
	inputFirstName.style.border = 'none';
	inputLastName.style.border = 'none';
	inputEmail.style.border = 'none';
	inputBirthday.style.border = 'none';
	inputQuantity.style.border = 'none';
}

// Se mets en place si le formulaire est envoyé mais incomplet
function erreur() {
	if (
		!validFirstName(inputFirstName) &&
		!validLastName(inputLastName) &&
		!validEmail(inputEmail) &&
		!validBirthdate(inputBirthday) &&
		!validQuantity(inputQuantity) &&
		!validLocation(inputLocations) &&
		!validCheckbox1(inputCheckbox1)
	) {
		return;
	}
}

// Permet d'afficher la fenêtre de validation du formulaire
function validForm() {
	form.reset();
	form.style.visibility = 'hidden';
	validButton.style.visibility = 'visible';
	validButton.value = 'Fermer';
	validContent.style.visibility = 'visible';
	validButton.addEventListener('click', function() {
		validContent.style.visibility = 'hidden';
		form.style.visibility = 'visible';
		validButton.value = "C'est parti";
		modalbg.style.display = 'none';
		window.location.reload();
	});
	closeBtn.addEventListener('click', function() {
		validContent.style.visibility = 'hidden';
		form.style.visibility = 'visible';
		validButton.value = "C'est parti";
		modalbg.style.display = 'none';
		window.location.reload();
	});
}

// ---------------------------Modal Form -------------------------------

// Modal firstName Input ---------------------

// Ecoute de l'input du prénom
inputFirstName.addEventListener('input', function() {
	validFirstName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
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

// Ecoute de l'input du nom
inputLastName.addEventListener('input', function() {
	validLastName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
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

// Ecoute de l'input de l'adresse email
inputEmail.addEventListener('change', function() {
	validEmail(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser un certain nombre de caractères et l'obligation de symboles (comme toutes les adresses emails)
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

// Ecoute de l'input de la date d'anniversaire
inputBirthday.addEventListener('change', function() {
	validBirthdate(this);
});

// Vérifie que l'input est renseigné et que la date de naissance soit valide (personne majeure)
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

// Ecoute de l'input de la quantité de participation
inputQuantity.addEventListener('change', function() {
	validQuantity(this);
});

// Vérifie que l'input est renseigné, sinon message d'erreur
const validQuantity = function(acceptQuantity) {
	let small = inputQuantity.nextElementSibling;
	if (acceptQuantity.value) {
		validInput(inputQuantity);
		small.innerHTML = '';
		return true;
	} else {
		invalidInput(inputQuantity);
		small.style.color = 'red';
		small.innerHTML = 'Veuillez renseigner un nombre de participation';
		return false;
	}
};

// Modal Location Input ------------------------

// Ecoute du choix de la ville
Locations.addEventListener('click', function() {
	validLocation(this);
});

// Vérifie quelle ville est sélectionnée
const validLocation = function() {
	let selectedLocation;

	for (let inputLocation of inputLocations) {
		if (inputLocation.checked) {
			selectedLocation = inputLocation.value;
			messageLocation.innerHTML = '';
			return true;
		}
	}

	if (!inputLocations.checked) {
		messageLocation.innerHTML = 'Veuillez choisir une ville';
		return false;
	}
};

// Modal Checkbox1 Input -----------------------

// Ecoute du choix, si la case est sélectionnée ou non
inputCheckbox1.addEventListener('change', function() {
	isConditionAccepted = !isConditionAccepted;
});

// Vérifie si la case est sélectionné
const validCheckbox1 = function() {
	if (inputCheckbox1.checked) {
		return true;
	} else {
		return false;
	}
};

// Modal Checkbox2 Input -----------------------

// Ecoute du choix, si la case est sélectionnée ou non
inputCheckbox2.addEventListener('change', function() {
	validCheckbox2(this);
});

// Vérifie si la case est sélectionné
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

// Ecoute du formulaire, si tous les inputs sont renseignés avant validation
form.addEventListener('submit', function(e) {
	e.preventDefault();

	// Vérifie si la case est "checkée"
	if (!isConditionAccepted) {
		alert("Veuillez accepter les conditions d'utilisation");
		return false;
	}

	// Vérifie que les inputs sont remplis et valide
	if (
		validFirstName(inputFirstName) &&
		validLastName(inputLastName) &&
		validEmail(inputEmail) &&
		validBirthdate(inputBirthday) &&
		validQuantity(inputQuantity) &&
		validLocation(inputLocations) &&
		validCheckbox1(inputCheckbox1)
	) {
		validForm(); // Si le formulaire est valide, lacement de la fonction qui affiche la fenêtre de validation de celui-ci
		return true;
	} else {
		erreur(); // Se déclenche si les inputs ne sont pas renseignés
		return false;
	}
});
