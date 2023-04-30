// Class with individual todo. Hold properties and behaviour for one todo
export default function MakeToDoItem (title, content, finished) {
    this.title = title;
    this.content = content;
    this.finished = false;
}
