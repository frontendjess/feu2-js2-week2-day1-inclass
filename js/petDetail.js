const pet = {
	name: 'Bambi',
	type: 'cat',
	color: 'silver',
	age: 9,
	isFriendly: true,
};

const petDetail = document.querySelector('.pet-detail');

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

petDetail.innerHTML += `
    <h4 class="${petColor}">${pet.name}</h4>
    <p>${pet.type}</p>
    <p>Age: ${petAge}</p>
    <p>Friendly: ${friendly}</p>
`;

console.log('hello world');
