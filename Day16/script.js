let fishs = document.querySelectorAll("#fish");
const bubble = document.querySelectorAll("#bubble");
const bubbleContainer = document.getElementById("bubble_conatiner")
const windowHeight = window.innerHeight - 85;
const windowWidth = window.innerWidth;
(() => {
  fishPosition();
  bubblePosition()
})();

function fishPosition() {
  fishs.forEach((fish, index) => {
    const randomNo = Math.floor(Math.random() * windowHeight) + index;
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
    fish.style.transform = `translate(-400px,0) scaleX(-1)`
    fish.style.animation = `fishani${index} 10s linear ${aniRandom}s infinite`
  }
  else {
    fish.style.transformOrigin='left';
    fish.style.transform = `translate(1500px,0)`;
    fish.style.animation = `fishani${index} 10s linear  ${aniRandom1}s infinite`
  }
}

function bubblePosition() {
 for (let i = 0; i < 30; i++) {
  const withRandom = Math.floor(Math.random() * 5) + 1;
  const delayRandom = Math.floor(Math.random() * 30) + 1;
  console.log('width', withRandom);
  const bubble = document.createElement('img')
  bubble.src='assets/bubble.png'
  bubble.style.width=`${withRandom}%`
  bubble.style.animation=`bubbleAni  ${i}s linear ${delayRandom}s  infinite`
  bubbleContainer.append(bubble)
  
 }
}
