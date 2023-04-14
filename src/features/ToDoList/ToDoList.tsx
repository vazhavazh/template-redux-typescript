import React from "react";


interface IItem {
    id: string;
    title: string;
}

interface Iprops {
    toDos: IItem[]
}

// class ToDoList extends React.Component<Iprops> {
//     render() {
//         return null
//     }
// }

// export default ToDoList


const ToDoList: React.FC<Iprops> = (props) => {
    return (
        <ul>
            {props.toDos.map((el) => (
                <li key={el.id}>
                    <h3>ToDo id =  {el.id}</h3>
                    <div>ToDo tittle = {el.title}</div>
                </li>
            ))}
        </ul>
    )
};
 

export default ToDoList