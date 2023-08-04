const elem = document.getElementById('elem');

function func(surname, name) {
    console.log(`${this.value}, ${surname} ${name}`);
}

const user1 = {
    name: 'Иван',
    surname: 'Иванов'
}

const user2 = {
    name: 'Петр',
    surname: 'Петров'
}


const fullName = func.bind(elem, user1.surname, user1.name);
const fullName1 = func.bind(elem, user2.surname, user2.name);
fullName()
fullName1()

console.log('____________________');

function func2() {
    console.log(this.value);
}

func2.call(elem)