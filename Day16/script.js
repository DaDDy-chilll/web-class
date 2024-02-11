let fishs = document.querySelectorAll("#fish");
const bubble = document.getElementById("bubble");
const windowHeight = window.innerHeight - 85;
(() => {
  fishPosition();
})();

function fishPosition() {

  fishs.forEach((fish, index) => {
    const randomNo = Math.floor(Math.random() * windowHeight) + index;
    console.log(randomNo);
    const randomNo1 = Math.floor(Math.random() * 7) + 1;
    // if (randomNo1 % 2 === 0)
      fish.style.transform = `translate(-300px,0) scaleX(-1)`;
    
    
    // else  fish.style.transform = `translate(1500px,0)`;
    const position = randomNo > 600 || randomNo < 100 ? 400 : randomNo;
    fish.style.top = `${position}px`;
  });
}

function bubblePosition() {

}