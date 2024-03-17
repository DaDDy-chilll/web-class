const tasks = [

];

let id = 0;
const addTask = (taskDate, taskDes) => {
  const date = taskDate.value;
  const description = taskDes.value;
  tasks.push({ id, date, description });
  id++;
  tasks.forEach((task) => {
    console.log(task.date);
  });
  checkTask();
};

const getTask = (day, month, year) => {
  let value;
  tasks.forEach((task) => {
    const changeDate = new Date(task.date);
    if (
      day === changeDate.getDate() &&
      month === changeDate.getMonth() &&
      year === changeDate.getFullYear()
    ) {
      value = task;
    }
  });

  return value;
};

const checkTask = () => {
  tasksList.innerHTML = "";
  tasks.forEach((task) => {
    tasksList.innerHTML += `
        <div class="task active">
              <p>${task.description}</p>
              <p>${task.date}</p>
            </div>
        `;
  });
};

export { addTask, tasks, checkTask, getTask };
