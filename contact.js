class Form{
	constructor(name, number, address){
		this.name = name;
		this.number = number;
		this.address = address;
	}
}


//UI TASKS
 class UI{
 	static displayContacts(){
 		const StoredContacts = [
 		{
 			name:'jane',
 			number:'09484850439643',
 			address:'nhfashfjasbcfyasdh',
 		},

 		{
 			name:'jane',
 			number:'09484850439643',
 			address:'nhfashfjasbcfyasdh',
 		}
 		];

 		const contacts = StoredContacts;

 		contacts.forEach((contact)=> UI.addContactToList(contact));

 	}

 	static addContactToList(contact){
 		const lists = document.querySelector('.contactList');
 		const input = document.createElement('div');

 		// row.innerHTML =`
 		// 	<div>${contact.name} ${contact.number} ${contact.address}</div>
			// <td><a href="#" class="editButton"><button>EDIT</button></a></td>
			// <td><a href="#" id="removeButton"><button>DEL</button></a></td>

 		// `;


















 		lists.appendChild(itemBox);

 	}

 }


//DISPLAY CONTACT
document.addEventListener('DOMContentLoaded', UI.displayContacts);


//ADD A CONTACT
document.querySelector('#form').addEventListener('submit',function(e){
	//PREVENT FORM DEFAULT ACTION
		e.preventDefault();
		//GET LISTS
		const name = document.querySelector('#name').value;
		const number = document.querySelector('#number').value;
		const address = document.querySelector('#address').value;

		//INSTANTIATE CONTACTS
		const lists = new Form(name, number, address);

		console.log(lists);


		//ADD CONTACTS TO LIST
		UI.addContactToList(lists);

		});
	

