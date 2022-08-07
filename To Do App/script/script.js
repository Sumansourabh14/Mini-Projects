const taskName = document.querySelector(".task-name");
const addBtn = document.querySelector('.add-task');
// const singletask = document.querySelector(".single-task");
const boilerPlate = document.querySelector('.boiler-plate');

const tasksSection = document.querySelector('.tasks-container');

addBtn.addEventListener('click', function addTask() {
    if (taskName.value !== '') {
        boilerPlate.style.display = 'none';

        const newTask = document.createElement('div');
        newTask.classList.add('single-task');
    
        const singleTaskName = document.createTextNode(taskName.value);
        const newTaskPara = document.createElement('p');
    
        newTaskPara.appendChild(singleTaskName);
        newTask.append(newTaskPara);
    
        //Create Finish Task button
        const finishTask = document.createElement('button');
        finishTask.classList.add('finish-task');
        finishTask.appendChild(document.createTextNode("Finish"));
       
        //Create Delete Task button
        const deleteTask = document.createElement('button');
        deleteTask.classList.add('delete-task');
        deleteTask.appendChild(document.createTextNode("Delete"));
    
        //Adding buttons on the task div
        newTask.append(finishTask);
        newTask.append(deleteTask);

        //Adding the task into the div
        tasksSection.append(newTask);
    
        //Finishing a task
        finishTask.addEventListener("click", function checkTask() {
            newTaskPara.style.textDecoration = "line-through";
            newTask.style.opacity = "0.4";
        });
    
        //Deleting a task
        deleteTask.addEventListener("click", function deleteTask() {
            newTask.remove();
        });

        //Clear the value of the input field after adding one task
        taskName.value = '';
    }
    else {
        alert("Please enter a task!");
    }
});

// const clearTasks = document.querySelector('.clear-btn');

// clearTasks.addEventListener("click", function clear() {
//     tasksSection.style.display = 'none';    
// })



