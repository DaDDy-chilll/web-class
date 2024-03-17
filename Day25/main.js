import { menuToggle } from "./utils/index.js";

const lines = document.querySelectorAll("#menuLine");
const navMenu = document.getElementById("navMenu");
const currDateInput = document.getElementById("currInput");
const currBtn = document.getElementById("currBtn");
const side = document.getElementById('side')

navMenu.addEventListener("click", () => menuToggle(lines,side));

currBtn.addEventListener("click", () => currDateInput.showPicker());
