(() => {
let form = document.getElementById("form");

const addToList = (event) => {
    event.preventDefault();
    let container = document.getElementById("container");
    let inputName = document.getElementById("inputName");
    let inputDescription = document.getElementById("inputDescription");
    let inputStart = document.getElementById("inputStart").value;
    let inputEnd = document.getElementById("inputEnd").value;
    let inputStatus = document.getElementById("status");

    let newTask = document.createElement("div");
    newTask.classList.add("newTask")

    let newTaskName = document.createElement("h1");
    newTaskName.textContent = inputName.value;
    newTask.appendChild(newTaskName);

    let newTaskDescription = document.createElement("h4");
    newTaskDescription.textContent = inputDescription.value;
    newTask.appendChild(newTaskDescription);
    newTaskDescription.style.display = "none";

    let newTaskStart = document.createElement("h4");
    newTaskStart.textContent = "Start Date: " + new Date(inputStart);
    newTask.appendChild(newTaskStart);

    //GETS DAYS UNTIL DUE
        let countDownDate = new Date(inputEnd);
        let dueDate = countDownDate.getTime()
        let now = new Date().getTime()
        let countdownHours = ((dueDate - now) / 1000 / 3600).toFixed(0);
        let countdownDays = ((dueDate - now) / 1000 / 3600/ 24).toFixed(0);

    let newTaskStartLocalStorage;
    newTaskStartLocalStorage = new Date(inputStart);

    let newTaskEndLocalStorage;
    newTaskEndLocalStorage = new Date(inputEnd)

    let newTaskEnd = document.createElement("h4");
    newTaskEnd.textContent =`Task due in ${countdownHours} hours (${countdownDays} days).`
    newTask.appendChild(newTaskEnd);

    (countdownHours < 0)? (newTaskEnd.style.color = "red"): newTaskEnd;

    newTask.addEventListener("click", function(){
        newTaskDescription.classList.toggle("display");
    })

    let newTaskStatus = document.createElement("h4");
    let x = inputStatus.selectedIndex;
    let y = inputStatus.options;
    newTaskStatus.textContent = y[x].text;
    newTask.appendChild(newTaskStatus);

    let statusCheckbox = document.createElement("input");
    statusCheckbox.setAttribute("type", "checkbox")
    newTaskName.appendChild(statusCheckbox);

    statusCheckbox.addEventListener("click", function(){
        if(statusCheckbox.checked === true){
            newTaskStatus.innerText = "Done";
            newTaskStatus.style.color = "blue";
            newTaskEnd.innerText = "Task Completed";
            newTaskEnd.style.color = "blue";
        } else {
            newTaskStatus.innerText = "Not Done";
            newTaskStatus.style.color = "red";
            newTaskEnd.textContent =`Task due in ${countdownHours} hours (${countdownDays} days).`
            newTaskEnd.style.color = "red"
        }
    })

    container.appendChild(newTask);

    localStorage.setItem("Task Name", newTaskName.textContent)
    localStorage.setItem("Task Description", newTaskDescription.textContent)
    localStorage.setItem("Task Start Date", newTaskStartLocalStorage.textContent)
    localStorage.setItem("Task End Date", newTaskEndLocalStorage.textContent)
    localStorage.setItem("Task Status", newTaskStatus.textContent)
}

form.addEventListener("submit", addToList);
})();