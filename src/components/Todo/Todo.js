import Item from "../Item/Item";
import "./Todo.css";

const Todo = (props) => {
    
    let toBeRenderedItems = props.items.map(item => {
        return <Item key={item.name + "" + item.done} name={item.name} done={item.done} />
    })

    return (
        <article className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">{props.title}</h1>
            </header>
            <ul className="todo__list">
                {toBeRenderedItems}
            </ul>
        </article>
    );
}

export default Todo;