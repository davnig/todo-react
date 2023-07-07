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
        <div className="py-4 px-20 rounded-2xl backdrop-blur-xl bg-slate-800/50">
            <div className="flex flex-col items-center">
                <h3 className=" text-2xl font-bold mb-3">To do</h3>
                <div className="flex flex-col align-start">
                    {todoNotDone.map((todo) =>
                        <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange}
                                 label={todo.text}></TodoRow>)}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mt-7 mb-3">Done</h3>
                <div className="flex flex-col align-start">
                    {todoDone.map((todo) =>
                        <TodoRow key={todo.text} checked={todo.done} onChange={onTodoChange} label={todo.text}/>)}
                </div>
            </div>
        </div>
    )
}