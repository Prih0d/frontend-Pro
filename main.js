// const mainBlock = document.getElementById('main');
// const block = document.createElement('div');
// const logo = document.createElement('img');
// const mainText = document.createElement('h1');
// const paragraphText = document.createElement('p');
// mainBlock.appendChild(block)

// block.className = 'block';
// logo.className = 'logo';
// paragraphText.className = 'main-text';


// function appendToBlock(param) {
//     block.appendChild(param)
// }


// appendToBlock(logo)
// appendToBlock(mainText)
// appendToBlock(paragraphText)

var styles = `
    .block {
        border: 1px solid #ccc;
        padding: 20px;
        margin: 20px;
    }
    .logo {
        max-width: 100px;
    }
    .main-text {
        font-style: italic;
    }`;

var styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

var blockDiv = document.createElement("div");
blockDiv.classList.add("block");

var logoImg = document.createElement("img");
logoImg.classList.add("logo");
logoImg.src = "https://w7.pngwing.com/pngs/973/11/png-transparent-phoenix-logo-design-mark-phoenix-fire-thumbnail.png";
logoImg.alt = "#";

var heading = document.createElement("h1");
heading.textContent = "Создание сайта";

var textP = document.createElement("p");
textP.classList.add("text");
textP.textContent = "Руководитель отдела маркетинга компании \"Sticker Wall\"";

var mainText1 = document.createElement("p");
mainText1.classList.add("main-text");
mainText1.textContent = "Спасибо команде за качественно проделанную работу. Сайт был сдан в оговоренные сроки и без единого бага.";

var br1 = document.createElement("br");

var mainText2 = document.createElement("p");
mainText2.classList.add("main-text");
mainText2.textContent = "Рад, что друзья посоветовали именно Вас!";

var br2 = document.createElement("br");

blockDiv.appendChild(logoImg);
blockDiv.appendChild(heading);
blockDiv.appendChild(textP);
blockDiv.appendChild(br1);
blockDiv.appendChild(mainText1);
blockDiv.appendChild(br2);
blockDiv.appendChild(mainText2);

document.body.appendChild(blockDiv);