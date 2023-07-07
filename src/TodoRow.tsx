export interface Props {
    label: string;
    checked: boolean,
    onChange: (value: string) => void
}

export const TodoRow = ({label, checked, onChange}: Props) => {
    const checkbox = checked ?
        <input className="rounded-lg"
               type="checkbox" id="id" value={label} defaultChecked
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input> :
        <input type="checkbox" id="id" value={label}
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input>
    return (
        <div className="grow space-x-2 px-3 py-1 text-xl">
            {checkbox}
            <label htmlFor="id">{label}</label>
        </div>
    )
}