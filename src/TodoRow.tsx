import {FiTrash2} from "react-icons/fi";

export interface Props {
    label: string;
    checked: boolean;
    onCheckboxChange: (label: string) => void;
    onDelete: (label: string) => void;
}

export const TodoRow = ({label, checked, onCheckboxChange, onDelete}: Props) => {
    const checkbox = checked ?
        <input type="checkbox" className="w-6 h-6" value={label} checked
               onChange={(e) => {
                   onCheckboxChange(e.target.value)
               }}></input> :
        <input type="checkbox" className="w-6 h-6" value={label}
               onChange={(e) => {
                   onCheckboxChange(e.target.value)
               }}></input>
    return (
        <div className="flex justify-between w-full items-center space-x-10 px-3 py-1 text-xl">
            <div className="flex justify-center items-center space-x-2">
                {checkbox}
                <label htmlFor="id">{label}</label>
            </div>
            <button onClick={() => onDelete(label)}>
                <FiTrash2/>
            </button>
        </div>
    )
}