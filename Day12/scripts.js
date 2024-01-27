var result;

function start() {
  var startbtn = document.getElementById("startbtn");
  var stopbtn = document.getElementById("stopbtn");
  var answer = document.getElementById("answer");

  startbtn.setAttribute("class", "btnstart inactiveStart");
  startbtn.disabled = true;
  stopbtn.setAttribute("class", "btnstop activeStop");
  stopbtn.disabled = false;
  answer.disabled = false;

  quiz();
}

function stop() {
  var startbtn = document.getElementById("startbtn");
  var stopbtn = document.getElementById("stopbtn");
  var history = document.getElementById("history");
  var random = document.getElementById("random");
  var answer = document.getElementById("answer");

  startbtn.setAttribute("class", "btnstart activeStart");
  stopbtn.setAttribute("class", "btnstop inactiveStop");
  startbtn.disabled = false;
  stopbtn.disabled = true;
  answer.disabled = true;

  answer.value = "";
  random.innerText = "";
  history.innerHTML = "";
}

function check() {
  var answer = document.getElementById("answer").value;
  var history = document.getElementById("history");

  if (result == answer) {
    history.innerHTML += `<li>correct</li>`;
  } else {
    history.innerHTML += `<li>wrong</li>`;
  }

  quiz();
  answer = "";
}

function quiz() {
  var random = document.getElementById("random");
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  var no = Math.round(Math.random() * 3);

  if (no == 0) {
    result = num1 + num2;
    random.innerText = num1 + " + " + num2;
  } else if (no == 1) {
    result = num1 - num2;
    random.innerText = num1 + " - " + num2;
  } else if (no == 2) {
    result = num1 * num2;
    random.innerText = num1 + " x " + num2;
  } else {
    result = num1 / num2;
    random.innerText = num1 + " ÷ " + num2;
  }
}
