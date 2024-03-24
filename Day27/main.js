const planets = [
  {
    id: 1,
    name: "jupiter",
  },
  {
    id: 2,
    name: "mars",
  },
  {
    id: 3,
    name: "earth",
  },
  {
    id: 4,
    name: "sun",
  },
  {
    id: 5,
    name: "mercury",
  },
  {
    id: 6,
    name: "venus",
  },
  {
    id: 7,
    name: "jupiter",
  },
  {
    id: 8,
    name: "mars",
  },
  {
    id: 9,
    name: "earth",
  },
  {
    id: 10,
    name: "sun",
  },
  {
    id: 11,
    name: "mercury",
  },
  {
    id: 12,
    name: "venus",
  },
];
const cardContainer = document.getElementById("cardContainer");
const time = document.getElementById("time");
let tempArr = [];
let timer = 50;
let newTime;
let setupFinish = false;
let cardCount=0;

(() => {
  const newPlanets = planets.sort(() => Math.random() - 0.5);
  newPlanets.forEach((planet) => {
    let card = `
      <div
        class="card"
        data-id="${planet.id}"
        data-planet=${planet.name}
        data-tilt
        data-tilt-speed="400"
        data-tilt-max="20"
        data-tilt-scale="1.2"
        data-tilt-reverse="true"
        data-user="clickable"
        clicked=0
        id='card'
        onclick='userClick(this)'
      >
          
          <div class="card_front">
            <div class="star_container">
              <img src="assets/star.svg" alt="star" width="100%" class="star" />
            </div>
            <div class="star_color hidden_color"></div>
          </div>

          <div class="card_back">
            <img src="assets/universe/${planet.name}.jpg" alt="${planet.name}" width="100%">
            <img src="assets/planets/${planet.name}.png" alt="${planet.name}" class="planets" width="50%">
            <p class="planets_name">${planet.name}</p>
        </div>
      </div>
    `;
    cardContainer.innerHTML += card;
  });
  VanillaTilt.init(document.querySelectorAll(".card"));
  firstHint();
})();



function firstHint () {
  const cards = document.querySelectorAll("#card");
  cards.forEach(card => {
    card.setAttribute("data-user", "clicked");
    setTimeout(() => {
        card.setAttribute("data-user", "clickable");
    },3000)
  })
setTimeout(() => {
  startCounter()

},4000)   
}

function userClick(element) {
  if(+element.getAttribute('clicked') === 1) return;
  element.setAttribute('clicked',1)
  tempArr.push(element);
  element.children[0].children[1].classList.remove("hidden_color");
  element.children[0].children[1].classList.add("active_color");
  if (tempArr.length !== 2) return;
  checkCard();
  tempArr = [];
}

function checkCard() {
  const elementOne = tempArr[0];
  const elementTwo = tempArr[1];
  const isSame =
    elementOne.getAttribute("data-planet") ===
    elementTwo.getAttribute("data-planet")
      ? true
      : false;
  cardChange(elementOne, elementTwo, isSame);
}

function cardChange(elementOne, elementTwo, isSame) {
  const cards = document.querySelectorAll("#card");
  cards.forEach((card) => {
    if (
      card.getAttribute("data-id") === elementOne.getAttribute("data-id") ||
      card.getAttribute("data-id") === elementTwo.getAttribute("data-id")
    ) {
      if (isSame) rightCard(card);
      else wrongCard(card);
    }
  });
}

function rightCard(card) {
  card.setAttribute("data-user", "clicked");
  setTimeout(() => {
    card.classList.add("hidden_card");
  }, 700);
  cardCount++;
  checkWin();

}

function wrongCard(card) {
  card.classList.add("wrong_card");
  card.children[0].children[1].classList.add("wrong_color");
  setTimeout(() => {
    card.children[0].children[1].classList.remove("wrong_color");
    card.children[0].children[1].classList.remove("active_color");
    // card.children[0].children[1].classList.add("wrong_card");
    card.children[0].children[1].classList.add("hidden_color");
    card.classList.remove("wrong_card");
    card.setAttribute('clicked',0)
  }, 700);
}

function checkWin () {
if(cardCount === 12) gameWin();
}

function gameWin () {
  alert('Game Win!')
  stopCounter();
}

function gameOver () {
  const cards = document.querySelectorAll('#card')
  alert('Game Over!')
  cards.forEach(card => {
    card.setAttribute('clicked',1)
  })
}

function startCounter() {
  intervalId = setInterval(countTime, 1000); // Store the interval ID
}

function stopCounter() {
  clearInterval(intervalId); // Clear the interval using the stored ID
}

function countTime() {
  if (timer === -1) {
    stopCounter(); // Stop the counter when timer reaches -1
    gameOver();
    return;
  }
  let newTime;
  if (timer < 10) {
    newTime = `0${timer}`;
  } else {
    newTime = timer;
  }
  time.innerText = newTime;
  timer--;
  console.log('hi');
}