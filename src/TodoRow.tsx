export interface Props {
    label: string;
    checked: boolean,
    onChange: (value: string) => void
}

export const TodoRow = ({label, checked, onChange}: Props) => {
    const checkbox = checked ?
        <input type="checkbox" className="rounded-lg w-6 h-6" value={label} defaultChecked
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input> :
        <input type="checkbox" className="w-6 h-6" value={label}
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input>
    return (
        <div className="flex justify-center items-center space-x-2 px-3 py-1 text-xl">
            {checkbox}
            <label htmlFor="id">{label}</label>
        </div>
    )
}