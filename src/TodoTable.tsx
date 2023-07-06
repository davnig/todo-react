import {TodoRow} from "./TodoRow.tsx";
import {Todo} from "./App.tsx";

export interface Props {
    todos: Todo[]
    onTodoChange: (value: string) => void
}

export const TodoTable = ({todos, onTodoChange}: Props) => {
    const todoDone = todos.filter((todo) => todo.done)
    const todoNotDone = todos.filter((todo) => !todo.done)
    console.log(todoNotDone)
    return (
        <>
            <h3>Not done</h3>
            {todoNotDone.map((todo) =>
                <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange} label={todo.text}/>)}
            <h3>Done</h3>
            {todoDone.map((todo) =>
                <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange} label={todo.text}/>)}
        </>
    )
}