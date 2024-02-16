let fishs = document.querySelectorAll("#fish");
const bubble = document.getElementById("bubble");
const windowHeight = window.innerHeight - 85;
(() => {
  fishPosition();
})();

function fishPosition() {
  fishs.forEach((fish, index) => {
    const randomNo = Math.floor(Math.random() * windowHeight) + index;
    const randomNo1 = Math.floor(Math.random() * 7) + 1;

    leftOrRight(fish,index)
    const position = randomNo > 600 || randomNo < 100 ? 400 : randomNo;
    fish.style.top = `${position}px`;
  });
}

function leftOrRight (fish,index) {
  const aniRandom = Math.floor(Math.random() * 3) + 1;
  const aniRandom1 = Math.floor(Math.random() * 4) + 1;
  if (index < 4) {
    fish.style.transformOrigin='right';
    fish.style.transform = `translate(-300px,0) scaleX(-1)`
    fish.style.animation = `fishani${index} 10s linear ${aniRandom}s infinite`
  }
  else {
    fish.style.transformOrigin='left';
    fish.style.transform = `translate(1500px,0)`;
    fish.style.animation = `fishani${index} 10s linear  ${aniRandom1}s infinite`
  }
}

function bubblePosition() {
  const bubble = document.createElement('img')
  bubble.src = 'assets/bubble.png'
  
}
