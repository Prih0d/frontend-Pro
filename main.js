let soldierColorArmor = prompt('Цвет доспеха');
let soldierImageShield = prompt('Картинка на щите');

// function isLannisterSoldier(colorArmor, imageShield) {
//     colorArmor === 'red' || imageShield === 'lion' ? console.log('Its Lanister') : console.log('Its not Lanister')

// }

function isLannisterSoldier(colorArmor, imageShield) {
    if(colorArmor === 'red' || imageShield === 'lion'){
        console.log('Its Lanister');
    } else{
        console.log('Its not Lanister')
    }
}


isLannisterSoldier(soldierColorArmor, soldierImageShield)