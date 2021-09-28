const pets = [
	{
		type: 'dog',
		color: 'brown',
		age: 14,
		friendly: true,
	},
	{
		type: 'cat',
		color: 'orange',
		age: 7,
		friendly: false,
	},
	{
		type: 'duck',
		color: 'yellow',
		age: 20,
		friendly: true,
	},
];

const container = document.querySelector('.pet-container');

console.log(container);


for (let i = 0; i < pets.length; i)