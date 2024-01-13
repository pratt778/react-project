import { useState } from "react";
import './colormode.css'
const Col = ()=>{
    const [bgcol,setBgcol]= useState('white');
    const [textcol,setTextcol]= useState('black');
    const handleclick=()=>{
        setBgcol(bgcol=='white'?'black':'white');
        setTextcol(textcol=='black'?"orange":'black');
    }
    return<>
    <section style={{backgroundColor:bgcol}}>
        <button style={{backgroundColor:bgcol,color:textcol,border:`2px solid ${textcol}`}} onClick={handleclick}>{bgcol=='white'?"White Theme":"Black Theme"}</button>
        <h1 style={{color:textcol}}>The color changing effect</h1>
    </section>
    </>
}

export default Col;