let numberKvest = prompt('Какое задание хотите выбрать?\n1) Проверка на возрат и курение \n2) Больше меньше число\n3) Больше меньше километры к футам')

switch (numberKvest) {
    case '1':
        firstKvest()
        break;
    case '2':
        secondKvest()
        break;
    case '3':
        thirdKvest()
        break;

    default:
        console.log('Введите цифру 1, 2 или 3');
        break;
}

function firstKvest() {
    const yearsUser = prompt('сколько тебе лет?');
    const doYouSmoke = prompt('куришь?');

    if(yearsUser >= 18 && doYouSmoke == 'да'){
        alert('Ну и зря');
    }

    if(yearsUser >= 18 && doYouSmoke == 'нет'){
        alert('Молодец, так и надо');
    }

    if(yearsUser < 18 && doYouSmoke == 'да'){
        alert('Маме расскажу');
    }

    if(yearsUser < 18 && doYouSmoke == 'нет'){
        alert('так держать');
    }

    if(!yearsUser || !doYouSmoke){
        alert('а ты что-то забыл написать');
    }
}

function secondKvest() {
    const firstNumber = prompt('введите первое число');
    const secondNumber = prompt('Введите второе число');

    if(firstNumber > secondNumber){
        alert(`это число ${firstNumber} больше этого ${secondNumber}`);
    }
        
    if(firstNumber < secondNumber){
        alert(`это число '${secondNumber}' больше этого '${firstNumber}'`);
    } 

    if(firstNumber == secondNumber){
        alert(`это число '${secondNumber}' равно этому '${firstNumber}'`);
    }
}

function thirdKvest() {
    const kilometr = prompt('Укажите километраж');
    const feet = prompt('Укажите футаж))');

    let feetToKilometr = feet * 0.305;

    if(kilometr > feetToKilometr){
        alert(`${kilometr} километров больше ${feet} футов`)
    }

    if(kilometr < feetToKilometr){
        alert(`${feet} футов больше ${kilometr} километров`)
    }

    if(kilometr == feetToKilometr){
        alert(`'${kilometr}' километров равно '${feet}' футам`)
    }

}