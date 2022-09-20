import React from "react";
import Item from "../Item/Item";
import "./Todo.css";

class Todo extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {tasks: []};
    }
     
    componentDidMount(){
        let tasks = [
            {
                name: "Groceries",
                done: false,
                id: 0,
            },
            {
                name: "Walking the dog",
                done: true,
                id: 1,
            },
            {
                name: "Message Girlfriend",
                done: false,
                id: 2,
            },
            {
                name: "Code awesome stuff",
                done: false,
                id: 3,
            },
            {
                name: "Code more awesome stuff!",
                done: false,
                id: 4,
            }
        ];
        this.setState({tasks: tasks});
    }

    updateState = (id) =>{ 
        let filter = this.state.tasks.filter(task => {
            return id !== task.id;
        });
        this.setState({tasks: filter});
    }

   
    render(){
        let listItems = this.state.tasks.map(task => {
            return <Item updateState={this.updateState} key={task.id} id={task.id} name={task.name} done={task.done} />
        });
        return (
            <article className="todo">
                <header class="todo__header">
                    <h1 class="todo__heading">Things to do:</h1>
                </header>
                <ul className="todo__list">
                    {listItems}
                </ul>
            </article>
        );
    }
 
}

export default Todo;