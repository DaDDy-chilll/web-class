var startContainer = document.getElementById("startContainer");
var quizContainer = document.getElementById("quizContainer");
var resultContainer = document.getElementById("resultContainer");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var answerNo = document.getElementById("answerNo");
var score = document.getElementById("score");
var time = document.getElementById("time");
var resultScore = document.getElementById("resultScore");
var resultCount = document.getElementById("resultCount");
var resultCorrect = document.getElementById("resultCorrect");
var resultWrong = document.getElementById("resultWrong");
var scoreCount = 0;
var timeCount = 0;
var correctCount = 0;
var wrongCount = 0;
var num1,
  num2,
  randomNo1,
  randomNo2,
  position,
  opertaor,
  result = 0;

function startBtn() {
  startContainer.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "quiz_container show");
  startQuiz();
}

function startQuiz() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  randomNo1 = Math.floor(Math.random() * 100);
  randomNo2 = Math.floor(Math.random() * 100);
  position = Math.floor(Math.random() * 3);
  opertaor = Math.floor(Math.random() * 4);

  if (opertaor === 0) {
    result = num1 + num2;
    question.innerText = num1 + " + " + num2;
  } else if (opertaor === 1) {
    result = num1 - num2;
    question.innerText = num1 + " - " + num2;
  } else if (opertaor === 2) {
    result = Math.floor(num1 / num2);
    question.innerText = num1 + " ÷ " + num2;
  } else {
    result = num1 * num2;
    question.innerText = num1 + " x " + num2;
  }

  if (position === 0) {
    answer.innerHTML +=
      '<span onclick="checkAns(' + result + ')">' + result + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo2 + ')">' + randomNo2 + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo1 + ')">' + randomNo1 + "</span>";
  } else if (position === 1) {
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo1 + ')">' + randomNo1 + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + result + ')">' + result + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo2 + ')">' + randomNo2 + "</span>";
  } else {
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo2 + ')">' + randomNo2 + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + randomNo1 + ')">' + randomNo1 + "</span>";
    answer.innerHTML +=
      '<span onclick="checkAns(' + result + ')">' + result + "</span>";
  }
}

function checkAns(ans) {
  if (result === ans) {
    scoreCount += 10;
    correctCount++;
  } else {
    scoreCount -= 10;
    wrongCount++;
  }
  timeCount++;
  score.innerText = scoreCount;
  time.innerText = timeCount;
  answer.innerHTML = "";
  startQuiz();
}

function quizStop() {
  quizContainer.setAttribute("class", "hidden");
  resultContainer.setAttribute("class", "result_container show");
  resultScore.innerText = scoreCount;
  resultCount.innerText = timeCount;
  resultCorrect.innerText = correctCount;
  resultWrong.innerText = wrongCount;
}

function retry() {
  resultContainer.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "quiz_container show");
  score.innerText = 0;
  time.innerText = 0;
  resultScore.innerText = 0;
  resultCount.innerText = 0;
  resultCorrect.innerText = 0;
  resultWrong.innerText = 0;
  answer.innerHTML = "";
  scoreCount = 0;
  timeCount = 0;
  correctCount = 0;
  wrongCount = 0;
  result = 0;
  startQuiz();
}

function quit() {
  resultContainer.setAttribute("class", "hidden");
  startContainer.setAttribute("class", "start_container show");
  score.innerText = 0;
  time.innerText = 0;
  resultScore.innerText = 0;
  resultCount.innerText = 0;
  resultCorrect.innerText = 0;
  resultWrong.innerText = 0;
  answer.innerHTML = "";
  scoreCount = 0;
  timeCount = 0;
  correctCount = 0;
  wrongCount = 0;
  result = 0;
}
