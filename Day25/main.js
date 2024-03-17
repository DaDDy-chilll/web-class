import { menuToggle } from "./utils/index.js"

const lines = document.querySelectorAll('#menuLine')
const navMenu = document.getElementById('navMenu')
const currDateInput = document.getElementById('currInput')
const currBtn = document.getElementById('currBtn')


navMenu.addEventListener('click', () => menuToggle(lines))

currBtn.addEventListener("click", () => currDateInput.showPicker())