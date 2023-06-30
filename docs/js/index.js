import contents from "../contents/contents.json" assert { type: "json" };

const baseUrl = "https://dev-with-book.github.io";
const mainContentList = document.querySelector('main > ul');

contents.forEach((content) => {
  const contentCard = makeCard(content);
  mainContentList.appendChild(contentCard);
})

function makeCard(content) {
    const card = document.createElement('li');
    card.classList.add('card-container');
    const cardLink = document.createElement('a');
    cardLink.href = `${baseUrl}${content.link}`;
    const cardImage = document.createElement('img');
    cardImage.src = `./contents/cover/${content.cover}`;
    cardImage.alt = content.title;
    cardImage.classList.add('card-image');
    card.appendChild(cardLink);
    cardLink.appendChild(cardImage);
    return card;
}

