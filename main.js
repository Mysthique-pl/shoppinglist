const taskList = [];
const listDisplay = document.getElementById("list-display");
let numberOfTasks = 0;

function addTask() {
    let task = document.getElementById("task-input").value;

    if (task != "") {
        taskList.push(task);
        console.log(taskList);
        document.getElementById("task-input").value = "";
        /*tworzenie nowej pozycji na liście*/
        let newTask = document.createElement("li");
        let newTaskInsert = document.createTextNode(task);
        newTask.appendChild(newTaskInsert);
        newTask.id = numberOfTasks + 1;
        console.log('Added task no ' + newTask.id);
        /*dodawanie przycisku do usuwania zadania*/
        let newBtn = document.createElement("span");
        let btnSymbol = document.createTextNode("\u00D7");
        newBtn.className = "close-btn";
        newBtn.onclick = removeItem;
        newBtn.appendChild(btnSymbol);
        newTask.appendChild(newBtn);
        listDisplay.appendChild(newTask);
        numberOfTasks += 1;
    } else {
        window.alert("Wpisz nazwę")
    }
   
}

function clearList() {
    let i = taskList.length
    while (i > 0) {
        listDisplay.removeChild(listDisplay.childNodes[i]);
        taskList.pop();
        i--;
    }
    numberOfTasks = 0;
    console.log(taskList);
}


function removeItem() {
    let listItem = this.parentNode;
    let itemNumber = listItem.id;
    let x = listItem.innerText;
    console.log(x);
    let itemPosition = taskList.findIndex(i => i == x);
    console.log('removing task no ' + itemNumber);
    listDisplay.removeChild(listItem);
    taskList.splice(itemPosition + 1, 1);
    console.log(taskList);
}