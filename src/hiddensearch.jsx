import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './hidden.css'


const Hide =()=>{
    const [search,setSearch]=useState(false)
    const [bgcol,setBgcol]=useState("orange")
    const handleClick=(e)=>{
        if(e.target.className=='whole'){
            setSearch(false)
            setBgcol('red')
        }

    }
    const visible =()=>{
        setSearch(true);
        setBgcol('black')
    }
   return <>
   <main style={{backgroundColor:bgcol}} onClick={handleClick} className="whole">
    {search?<input type="text" placeholder="Search here..." className="box" />:<FaSearch onClick={visible} className="sea"/>}
   </main>
   
   </>
}

export default Hide;