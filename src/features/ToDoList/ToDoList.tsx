import React from "react";

import { IItem } from '../types/todo'


interface IProps {
    toDos: IItem[],
    onDeleteToDo: (id: string) => void,
}

// class ToDoList extends React.Component<Iprops> {
//     render() {
//         return null
//     }
// }

// export default ToDoList


export const ToDoList: React.FC<IProps> = (props) => {
    return (
        <ul>
            {props.toDos.map((el) => (
                <li key={el.id}>
                    <h3>ToDo id =  {el.id}</h3>
                    <div>ToDo tittle = {el.title}</div>
                    <button type="button" onClick={() => { props.onDeleteToDo(el.id) }}>
                        Delete button 1
                    </button>
                    <span> / </span>
                    <button type="button" onClick={props.onDeleteToDo.bind(this, el.id)}>
                        Delete button 2
                    </button>
                </li>
            ))}
        </ul>
    )
};


