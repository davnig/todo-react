export interface Props {
    label: string;
    checked: boolean,
    onChange: (value: string) => void
}

export const TodoRow = ({label, checked, onChange}: Props) => {
    const checkbox = checked ?
        <input type="checkbox" id="id" value={label} defaultChecked
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input> :
        <input type="checkbox" id="id" value={label}
               onChange={(e) => {
                   onChange(e.target.value)
               }}></input>
    return (
        <div className="grow space-x-2">
            {checkbox}
            <label htmlFor="id">{label}</label>
        </div>
    )
}