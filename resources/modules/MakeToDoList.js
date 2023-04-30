import MakeToDoItem from "./MakeToDoItem.js";
// class the holds a collection of todo items, properties and functions
export default function MakeToDoList () {
    this.toDoList = [];
}

MakeToDoList.prototype.getAll = function () {
    return this.toDoList;
};

MakeToDoList.prototype.newToDoList = function(title, content) {
    this.toDoList.push(new MakeToDoItem(title,content, false));
};