// console.log('yeah it works with two javascript files');
const submitButton = document.querySelector(".submit") ;
let input = document.querySelector(".inputText");
const container = document.querySelector(".contactList");


class item{
	constructor(items){
		this.createDiv(items);
	}
	createDiv(items){
		let input = document.createElement('input');
		input.value = items;
		input.disabled = true;
		input.classList.add('contactList');
		input.type = 'text';



		const addForm = document.forms['form'];

		addForm.addEventListener('submit', function(e)
		{
		e.preventDefault();
		const value = addForm.querySelector('input[class="inputText"]').value;
	
		});


		let itemBox = document.createElement('div');
		itemBox.classList.add('item');

		let editButton = document.createElement('button');
		editButton.innerHTML = 'EDIT';
		editButton.classList.add('editButton');

		let removeButton = document.createElement('button');
		removeButton.innerHTML = 'REMOVE';
		removeButton.classList.add('removeButton');

		container.appendChild(itemBox);


		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		editButton.addEventListener('click',() => this.edit(input));

		removeButton.addEventListener('click', () => this.remove(itemBox));
	}

	edit(input){
		input.disabled = !input.disabled
	}

	remove(items){
		container.removeChild(items);
	}

}


const addForm = document.forms['form'];

addForm.addEventListener('submit', function(e)
{
	e.preventDefault();
	const value = addForm.querySelector('input[class="inputText"]').value;

});





 //new item("Sport");

// submitButton.addEventListener('click', check);

