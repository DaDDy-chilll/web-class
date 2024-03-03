var methods = document.querySelectorAll("#methods");
var keys = document.querySelectorAll("#key");
var display = document.getElementById("display");
var esc = document.getElementById("esc");
var backspace = document.getElementById("backspace");
var tabs = document.querySelectorAll("#tab");
var enters = document.querySelectorAll("#enter");
var space = document.getElementById("space");
var input = document.getElementById('text')
methods.forEach((method) => {
  method.addEventListener("click", () => {
    var value = input.value;
    var text = display.innerText;
    stringMethodsFunc(method,text,value)
 
  });
});

tabs.forEach((tab) => tab.addEventListener("click", () => tabFunc()));
keys.forEach((key) => key.addEventListener("click", () => keyFunc(key)));
esc.addEventListener("click", () => escKeyFunc());
backspace.addEventListener("click", () => backSpaceFunc());
enters.forEach((enter) => enter.addEventListener("click", () => enterFunc()));
space.addEventListener("click", () => sapcefunc());
var keyFunc = (key) => (display.innerText += key.innerText);

var escKeyFunc = () => (display.innerText = "");
var backSpaceFunc = () => (display.innerText = display.innerText.slice(0, -1));
var tabFunc = () => (display.innerText += "\t");
var enterFunc = () => (display.innerText += "\n");
var sapcefunc = () => (display.innerText += " ");

var stringMethodsFunc = (method,text,value) => {
    switch (method.innerText) {
        case "charAt()":
            checkValue(value)
          console.log(text.charAt(+value));
          break;
        case "charCodeAt()":
            checkValue(value)
          console.log(text.charCodeAt(+value));
          break;
        case "toUpperCase()":
          console.log(text.toUpperCase());
          break;
        case "toLowerCase()":
          console.log(text.toLowerCase());
          break;
        case "trim()":
          console.log(text.trim());
          break;
        case "includes()":
            checkValue(value)
          console.log(text.includes(value));
          break;
        case "indexOf()":
            checkValue(value)
          console.log(text.indexOf(value));
          break;
        case "lastIndexof()":
            checkValue(value)
          console.log(text.lastIndexOf(value));
          break;
        case "startsWith()":
            checkValue(value)
          console.log(text.startsWith(value));
          break;
        case "endsWith()":
            checkValue(value)
          console.log(text.endsWith(value));
          break;
        default:
          break;
      }
}

var checkValue = (value) => {
    if(value.length === 0){
        input.classList.add('show_Warning')
    }
    setTimeout(()=>input.classList.remove('show_Warning'),1500)
}