import {TodoRow} from "./TodoRow.tsx";
import {Todo} from "./App.tsx";

export interface Props {
    todos: Todo[]
}

export const TodoTable = ({todos}: Props) => {
    const todoDone = todos.filter((todo) => todo.done)
    const todoNotDone = todos.filter((todo) => !todo.done)
    return (
        <>
            <h3>Not done</h3>
            {todoNotDone.map((todo) =>
                <TodoRow key={todo.id} checked={todo.done}>{todo.text}</TodoRow>)}
            <h3>Done</h3>
            {todoDone.map((todo) =>
                <TodoRow key={todo.id} checked={todo.done}>{todo.text}</TodoRow>)}
        </>
    )
}