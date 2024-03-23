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
const tempArr = [];
let setupFinish = false;

(() => {
  const newPlanets = planets.sort(() => Math.random() - 0.5);
  newPlanets.forEach((planet) => {
    let card = `
         <div class="card" data-planet=${planet.name}>
         <img src="assets/universe/${planet.name}.jpg" alt="${planet.name}" width="100%">
         <img src="assets/planets/${planet.name}.png" alt="${planet.name}" class="planets" width="50%">
         <p class="planets_name">${planet.name}</p>
         </div>
    `;
    cardContainer.innerHTML += card;
  });
})();
