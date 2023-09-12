/*//add fuction
let add = (x,y) => {
    return x + y;
}
console.log(add(5,3));

//subtract function
let subtract = (x,y) => {
    return x - y;
}
console.log(subtract(5,3));
//multiply function
let multi = (x,y) => {
    return x * y;
}
console.log(multi(5,3));

//divide function
let divide = (x,y) => {
    return x / y;
}
console.log(divide(5,3));*/
/*
let pair = (x) => {
    if (x % 2 === 0) {
        return "un nombre pair";
    } else {
        return "un nombre impair";
    }
}

console.log(pair(10));
exercice = number % 2 == 0 ? 'even' : 'odd'
console.log(exercice);

let max = (x,y) => {
    if (x > y) {
        return "x est le max";
    } else {
        return "y est le max"
    }
}
console.log(max(4,8));

function factorialx(n){
    if(n === 0){
        return 1;
    } else {
        return n* factorial(n-1);
    }
}
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listContacts = [];

function Ajouter() {
  rl.question('Enter your name: ', (name) => {
    rl.question('Enter your phone number: ', (phone) => {
      listContacts.push({ name, phone });
      console.log(`Person ${name} with phone number ${phone} added.`);
      Menu();
    });
  });
}

function Voir() {
  listContacts.forEach((contact, index) => {
    console.log(`${index + 1}, Name: ${contact.name}, Phone: ${contact.phone}`);
  });
  Menu();
}

function Chercher() {
  rl.question('Enter the contact name to search: ', (name) => {
    const chercheContact = listContacts.find((contact) => contact.name === name);
    if (chercheContact) {
      console.log(`Person ${chercheContact.name} with phone number ${chercheContact.phone} found.`);
    } else {
      console.log(`Person ${name} not found.`);
    }
    Menu();
  });
}

function Sortir() {
  rl.close();
  console.log('Goodbye!');
}

function Menu() {
  console.log(`
  Please choose an option:
  1. Add a contact
  2. View all contacts
  3. Search for a contact
  4. Exit the application`);

  rl.question('Enter your choice: ', (choix) => {
    switch (choix) {
      case '1':
        Ajouter();
        break;
      case '2':
        Voir();
        break;
      case '3':
        Chercher();
        break;
      case '4':
        Sortir();
        break;
      default:
        console.log('Invalid choice. Please try again.');
        Menu();
    }
  });
}

Menu();
