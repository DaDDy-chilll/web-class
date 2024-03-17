import { currDateFunc } from "./date.js";
import { tasks,getTask } from "./db.js";

const menuToggle = (lines, side) => {
  lines.forEach((line, i) => {
    const isOpen = line.className.includes("_active");
    if (isOpen) {
      line.classList.remove(`line${i + 1}_active`);
      side.classList.add("close");
    } else {
      line.classList.add(`line${i + 1}_active`);
      side.classList.remove("close");
    }
  });
};

const taskToggle = (taskInput) => {
  if(taskInput.className.includes('hidden')){
    taskInput.classList.remove('hidden')
  }else{
    taskInput.classList.add('hidden')
  }
}

const currCalendar = (dayItems,date) => {

  const { monthName, EndDate, firstDay, EndDay ,currYear,currMonth} = currDateFunc(date);
  showMonth.innerText = monthName;
  showYear.innerText = currYear;
  let day = 0;
  dayItems.forEach((item,i) => {
    item.style.backgroundColor = "lightgray";
    item.children[0].textContent=''
    taskOverview[i].innerHTML=""
  })
  // const activeDay = new Date();
  for (let i = firstDay; i < dayItems.length; i++) {
    const element = dayItems[i];
    if(day < EndDate) {
      element.style.backgroundColor = "white";
      element.children[0].textContent = ++day;
      let isTask = getTask(day,currMonth,currYear)
      if(isTask){
        element.children[1].innerHTML += `<p class="item">${isTask.description}</p>`;
      }
         
    }
  }


  while (true) {
    if (day === EndDate) break;
    let first = 0;
    day++;
    dayItems[first].style.backgroundColor = "white";
    dayItems[first].children[0].textContent = day;
    first++;
  }
};

let skip = 0;

const moveMonth = (dayItems,move) => {
  const date = new Date();
   move === 'next' ? skip++ : skip--
  date.setMonth(date.getMonth() + skip)
  currCalendar(dayItems,date)
}



const miniCalendar = (miniDays,date,activeDay) => {
  const { monthName, EndDate, firstDay, EndDay ,currYear} = currDateFunc(date);
  let day = 0;

  for (let i = firstDay; i < miniDays.length; i++) {
    const element = miniDays[i];
    if(day < EndDate) {
      element.textContent = ++day;
      if(activeDay === day ) element.classList.add('active')
    }
  }


  while (true) {
    if (day === EndDate) break;
    let first = 0;
    day++;
    miniDays[first].textContent = day;
    first++;
    console.log('run');
  }

}

export { menuToggle, currCalendar,moveMonth,miniCalendar,taskToggle };
