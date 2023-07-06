import {TodoRow} from "./TodoRow.tsx";
import {Todo} from "./App.tsx";

export interface Props {
    todos: Todo[]
    onTodoChange: (value: string) => void
}

export const TodoTable = ({todos, onTodoChange}: Props) => {
    const todoDone = todos.filter((todo) => todo.done)
    const todoNotDone = todos.filter((todo) => !todo.done)
    return (
        <>
            <h3 className="mb-3">Not done</h3>
            <div className="flex flex-col align-start">
                {todoNotDone.map((todo) =>
                    <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange} label={todo.text}></TodoRow>)}
            </div>
            <h3 className="mt-7 mb-3">Done</h3>
            <div className="flex flex-col align-start">
                {todoDone.map((todo) =>
                    <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange} label={todo.text}/>)}
            </div>
        </>
    )
}