import { menuToggle } from "./utils/index.js"

const lines = document.querySelectorAll('#menuLine')
const navMenu = document.getElementById('navMenu')


navMenu.addEventListener('click', () => menuToggle(lines))