import { useState } from "react";
import './todo.css';


const Todo=()=>{
    const [list,setList] = useState('');
    const [items, setItems] = useState([]);

    const generatekey = ()=>{
        return Math.floor(Math.random()*100);
    }

    const removeX = (keys)=>{
        setItems((items)=>items.filter((d)=>d.keys!==keys));
    }
    
    const clickhandle = ()=>{
        setItems((items)=>items.concat({
            header:list,
            keys:generatekey(),
        }))
        setList('');
    }
    
    return<>
    <div className="container">
    <div className="header">
        <h1 className="head">Todo Project React</h1>
    </div>
    <div className="searchbox">
        <input type="text" placeholder="Add your To-do list here" value={list} onChange={(e)=>setList(e.target.value)} className="search" />
        <button className="btn_search" onClick={clickhandle}>Add</button>
    </div>
    <div className="todo-lists">
        {/* <h3>Your lists:</h3> */}
        <div className="lists">
            {items.map(({header,keys})=>{
                return <li key={keys}>
                    <input type="checkbox" name="" id="" />
                    <span>{header}</span>
                    <button onClick={()=>removeX(keys)} className="btn_rem">X</button>
                </li>
            })}
        </div>
    </div>
    </div>
    </>
}

export default  Todo;