var result;
var operator1 = +
function start() {
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var question = document.getElementById("random");
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  result = num1 + num2;
  question.innerText = num1 + " + " + num2;
  startbtn.classList.remove("activeStart");
  startbtn.classList.add("inactiveStart");
  startbtn.disabled = true;
  stopbtn.disabled = false;
  stopbtn.classList.remove("inactiveStop");
  stopbtn.classList.add("activeStop");
}

function stop() {
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var history = document.getElementById("history");
    var question = document.getElementById("random");

    stopbtn.classList.add("inactiveStop");
    stopbtn.classList.remove("activeStop");
    startbtn.classList.add("activeStart");
    startbtn.classList.remove("inactiveStart");
    stopbtn.disabled = true;
  startbtn.disabled = false;
    question.innerText='';
    history.innerHTML='';
}

function check() {
    var answer = document.getElementById("answer");
var history = document.getElementById("history");
var question = document.getElementById("random");
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
    if(result == answer.value){
        history.innerHTML+= `<li>correct</li>`
    }else{
        history.innerHTML+= `<li>wrong</li>`

    }
  
    result = num1 + num2;
    question.innerText = num1 + " + " + num2;
    answer.value=''
}
