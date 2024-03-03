var methods = document.querySelectorAll("#methods");
var keys = document.querySelectorAll("#key");
var display = document.getElementById("display");
var esc = document.getElementById("esc");
var backspace = document.getElementById("backspace");
var tabs = document.querySelectorAll("#tab");
var enters = document.querySelectorAll("#enter");
var space = document.getElementById("space");
var input = document.getElementById("text");
var alertStatus = document.getElementById("alertStatus");
var alertText = document.getElementById("alertText");
var closeBtn = document.getElementById("close");

// Method
methods.forEach((method) => {
  method.addEventListener("click", () => {
    var value = input.value;
    var text = display.innerText;
    stringMethodsFunc(method, text, value);
  });
});

//Click Event
tabs.forEach((tab) => tab.addEventListener("click", () => tabFunc()));
keys.forEach((key) => key.addEventListener("click", () => keyFunc(key)));
esc.addEventListener("click", () => escKeyFunc());
backspace.addEventListener("click", () => backSpaceFunc());
enters.forEach((enter) => enter.addEventListener("click", () => enterFunc()));
space.addEventListener("click", () => sapcefunc());
closeBtn.addEventListener("click", () => {
  alertStatus.style.transform = "translateY(-100px)";
});

//Event Function
var keyFunc = (key) => (display.innerText += key.innerText);
var escKeyFunc = () => {
  display.innerText = "";
  input.value = "";
};
var backSpaceFunc = () => (display.innerText = display.innerText.slice(0, -1));
var tabFunc = () => (display.innerText += "\t");
var enterFunc = () => (display.innerText += "\n");
var sapcefunc = () => (display.innerText += " ");

// String Methoud Switch Func
var stringMethodsFunc = (method, text, value) => {
  switch (method.innerText) {
    case "charAt()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.charAt(value));
      }
      break;
    case "charCodeAt()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.charCodeAt(value));
      }
      break;
    case "toUpperCase()":
      showAlert(text.toUpperCase());
      break;
    case "toLowerCase()":
      showAlert(text.toLowerCase());
      break;
    case "trim()":
      showAlert(text.trim());
      break;
    case "includes()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.includes(value));
      }
      break;
    case "indexOf()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        var ans = text.indexOf(value);

        showAlert(ans === -1 ? "false" : ans);
      }
      break;
    case "lastIndexof()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.lastIndexOf(value));
      }
      break;
    case "startsWith()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.startsWith(value));
      }
      break;
    case "endsWith()":
      if (value.length === 0) {
        showWarning();
        return;
      } else {
        showAlert(text.endsWith(value));
      }
      break;
    default:
      break;
  }
};

var showWarning = () => {
  input.classList.add("show_Warning");
  setTimeout(() => input.classList.remove("show_Warning"), 1500);
};

var showAlert = (result) => {
  alertText.innerText = `the result is = ${result}`;
  alertStatus.style.transform = "translate(0)";
};
