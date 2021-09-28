const pet = {
	name: 'Bambi',
	type: 'cat',
	color: 'silver',
	age: 9,
	isFriendly: true,
};

let friendly = 'Yes';
if (!pet.isFriendly) {
	friendly = 'No';
}

let petAge = 'Unknown';
// pet.age !== undefined && pet.age !== null && pet.age !== false && pet.age !== 0
if (pet.age) {
	petAge = pet.age;
}

const petColor = pet.color;

const heading = document.querySelector('h4');
const age = document.querySelector('.age');
const friendlyContainer = document.querySelector('.friendly');

heading.innerHTML = pet.type;
age.innerHTML = petAge;
friendlyContainer.innerHTML = friendly;
