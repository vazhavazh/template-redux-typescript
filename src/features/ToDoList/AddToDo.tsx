import React, {useState} from "react";
import { IItem } from "../types/todo";
type OnlyTitle = Pick<IItem, 'title'>

interface IProps {
    onAddToDo: (todo: IItem) => void;
}

export const AddToDo: React.FC<IProps> = (props) => {
    const [toDo, setToDo] = useState<Partial<OnlyTitle>>({});

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToDo({
            title: e.target.value,
        });
       
    }
   
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

         if (!toDo.title) {
            return
        }

       props.onAddToDo(toDo as IItem)
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <span>Add title</span>
                {/* <input type="text" id="addToDoInput"  ref={inputTitleRef}/> */}
                <input type="text" id="addToDoInput" onChange={inputHandler} />
            </div>
            <button type="submit" >Add todo</button>
        </form>
    )
} 