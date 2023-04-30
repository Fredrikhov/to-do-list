// imports
import MakeToDoList from './resources/modules/MakeToDoList.js';

const createAndLogData = (event) => {
    const todosArray = new MakeToDoList();
    // prevent website from refreshing
    event.preventDefault();
    todosArray.newToDoList(event.target.title.value, event.target.content.value);
    showToDoData(todosArray.getAll());
}

const showToDoData = (todosArray) => {
    const finishedItems = document.getElementById("items-to-do").appendChild(document.createElement("ul"));
    let allItems = '';
    for (const key in todosArray) {
        if (!todosArray[key].finished) 
            allItems += `
                    <li>${
            todosArray[key].title
        } | ${
            todosArray[key].content } 
            <span id="removeData">Close</span>
                    </li > `;
        
    }
    // append to ul element
    finishedItems.innerHTML = allItems;
}

const removeElementFromList = (el) => {
    el.parentNode.remove();
}

/* Event handling for dynamically added html elements in DOM */
document.addEventListener("click", function(e){
    const target = e.target.closest("#removeData");
        if(target){
            removeElementFromList(target);
        }
})

const form = document.getElementById("form");
form ?. addEventListener("submit", createAndLogData);
