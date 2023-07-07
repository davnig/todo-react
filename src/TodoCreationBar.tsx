import {useState} from "react";
import {Todo} from "./App.tsx";

export interface Props {
    onAdd: (todo: Todo) => void
}

export const TodoCreationBar = ({onAdd}: Props) => {
    const [todoText, setTodoText] = useState('')
    const handleOnClick = () => {
        setTodoText('')
        onAdd({done: false, text: todoText})
    }
    return (
        <div className="flex justify-center space-x-3 my-10">
            <input type="text"
                   placeholder="New todo..."
                   value={todoText}
                   onChange={(e) => {
                       setTodoText(e.target.value)
                   }}
            ></input>
            <input type="submit" value="Add" onClick={handleOnClick}></input>
        </div>
    )
}