import {ReactNode} from "react";

export interface Props {
    children: ReactNode;
    checked: boolean
}

export const TodoRow = ({children, checked}: Props) => {
    const checkbox = checked ? <input type="checkbox" id="id" value="HTML" checked></input>
        : <input type="checkbox" id="id" value="HTML"></input>
    return (
        <>
            {checkbox}
            <label htmlFor="id">{children}</label>
            <br/>
        </>
    )
}