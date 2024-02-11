let fishs = document.querySelectorAll("#fish");
const bubble = document.getElementById("bubble");

startAni();
function startAni() {
  console.log("hi");

  fishs.forEach((fish,index) => {
   
    const randomNo = Math.floor(Math.random() * 600) + index;
    const position  = (randomNo > 600 || randomNo < 100) ? randomNo : randomNo
    console.log(position);
    // if (position > 600 || position < 100) return;
    fish.style.top = `${position}px`;
  });
}
