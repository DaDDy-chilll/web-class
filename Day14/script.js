const startContainer = document.getElementById("startContainer");
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");

function startBtn() {
  startContainer.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "quiz_container show");
  
}
startQuiz()
function startQuiz () {
    var num1 = Math.floor(Math.random() * 100)
    var num2 = Math.floor(Math.random() * 100)
    let zero=0;
    let one=0;
    let two=0;
    let three=0;
    let four=0;
    for (let i = 0; i < 100; i++) {
        var opertaor = Math.floor(Math.random() * 4)
        if(opertaor === 0){
            zero++;
            console.log('zero',zero);
        }else if(opertaor === 1){
            one++;
            console.log('one',one);
        }else if(opertaor === 2) {
            two++;
            console.log('two',two);
        }else if(opertaor === 3) {
            three++;
            console.log('three',three);
        }else{
            four++;
            console.log('four',four);
        }
        
    }
}

function quizStop() {
  quizContainer.setAttribute("class", "hidden");
  resultContainer.setAttribute("class", "result_container show");
}

function retry() {
  resultContainer.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "quiz_container show");
}

function quit() {
  resultContainer.setAttribute("class", "hidden");
  startContainer.setAttribute("class", "start_container show");
}
