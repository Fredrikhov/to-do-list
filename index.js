/* get data entered in input fields */
    const title = document.getElementById("title");
    const content = document.getElementById("to-do");  

const createAndLogData = (event) => {
    // prevent refresh
 
    event.preventDefault();

    console.log(event.target.title.value);
    console.log(event.target.todo.value);
   
}

const form = document.getElementById("form");
form?.addEventListener("submit", createAndLogData);