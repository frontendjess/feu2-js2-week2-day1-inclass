import { pets } from './libs/pets.js';

const container = document.querySelector('.pet-container');

console.log(container);

let html = '';

for (let i = 0; i < pets.length; i++) {
	// html = html + '<h4>' + pets[i].type + '</h4>';
	// html = html + `<h4>${pets[i].type}</h4>`;

	let smileyFace = '😀';

	if (!pets[i].friendly) {
		smileyFace = '😡';
	}

	const petColor = pets[i].color;

	let type = 'Unknown type';

	if (pets[i].type) {
		type = pets[i].type;
	}

	html += `<div class="pet" style="border-color: ${petColor}">
			<h4 style="color: ${petColor}">${type}</h4>
			<p>Age: ${pets[i].age}</p>
			<p>Friendly: ${smileyFace}</p>
		</div>
	`;

	console.log(html);
}

container.innerHTML = html;
