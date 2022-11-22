import Todo from "../components/Todo/Todo";
import todos from "../data/todos";
import "./App.css";

const App = () =>{
    
    let toBeRenderedTodos = todos.map(todo => {
        return <Todo key={todo.title} title={todo.title} items={todo.items} />
    });
    return (
        <>
            {toBeRenderedTodos}
        </>
    )
}

export default App;