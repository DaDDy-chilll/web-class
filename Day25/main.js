import {
  menuToggle,
  currCalendar,
  moveMonth,
  miniCalendar,
  taskToggle,
  addTask,
  tasks,
  checkTask
} from "./utils/index.js";

const lines = document.querySelectorAll("#menuLine");
const miniDays = document.querySelectorAll("#miniDay");
const navMenu = document.getElementById("navMenu");
const currDateInput = document.getElementById("currInput");
const currBtn = document.getElementById("currBtn");
const miniCalendarBtn = document.getElementById("miniCalendarBtn");
const side = document.getElementById("side");
const dayItems = document.querySelectorAll("#dayItem");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const showMonth = document.getElementById("showMonth");
const showYear = document.getElementById("showYear");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const submitBtn = document.getElementById("submitBtn");
const taskDate = document.getElementById("taskDate");
const taskDes = document.getElementById("taskDes");
const tasksList = document.getElementById("tasksList");
const taskOverview = document.querySelectorAll("#taskOverview");

let date = new Date();
const activeDay = date.getDate();

(() => {
  currCalendar(dayItems, date);
  miniCalendar(miniDays, date, activeDay);
  checkTask();

  navMenu.addEventListener("click", () => menuToggle(lines, side));
currBtn.addEventListener("click", () => currDateInput.showPicker());
currDateInput.addEventListener('click',() => console.log(currDateInput.value))
nextBtn.addEventListener("click", () => moveMonth(dayItems, "next"));
previousBtn.addEventListener("click", () => moveMonth(dayItems, "prev"));
addTaskBtn.addEventListener('click',() => taskToggle(taskInput))
miniCalendarBtn.addEventListener('click',()=> currCalendar(dayItems, date))
submitBtn.addEventListener('click' , () =>{
    addTask(taskDate,taskDes);
    currCalendar(dayItems,date)
    taskDate.value=''
    taskDes.value=''
    taskInput.classList.add("hidden")
})

})();

