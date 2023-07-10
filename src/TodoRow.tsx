import {FiTrash2} from "react-icons/fi";
import {Todo} from "./App.tsx";
import {Dispatch, SetStateAction} from "react";

export interface Props {
    label: string;
    checked: boolean;
    onChange: Dispatch<SetStateAction<Todo[]>>;
}

export function TodoRow({label, checked, onChange}: Props) {
    const handleOnChange = () => {
        onChange((prevState) => {
            const newTodos = [...prevState]
            const indexToChange = newTodos.findIndex((todo) => todo.text === label);
            if (indexToChange !== -1) {
                newTodos[indexToChange].done = !newTodos[indexToChange].done
            }
            return newTodos
        })
    }
    const handleOnDelete = () => {
        onChange((prevState) => {
            return prevState.filter((todo) => todo.text !== label)
        })
    }
    const checkbox = checked ?
        <input type="checkbox" className="w-6 h-6" value={label} checked
               onChange={handleOnChange}></input> :
        <input type="checkbox" className="w-6 h-6" value={label}
               onChange={handleOnChange}></input>
    return (
        <div className="flex justify-between w-full items-center space-x-10 px-3 py-1 text-xl">
            <div className="flex justify-center items-center space-x-2">
                {checkbox}
                <label htmlFor="id">{label}</label>
            </div>
            <button onClick={handleOnDelete}>
                <FiTrash2/>
            </button>
        </div>
    )
}