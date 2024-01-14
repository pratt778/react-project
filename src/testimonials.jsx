import { useState } from "react";
import './test.css'
const Test=()=>{
    const [tracer,setTracer]=useState(0)
    const info =[
        {
            quote:'This is my quote',
            author:'Pratham Sharma'
        },
        {
            quote:'2nd quote',
            author:'Hari yadav'
        },
        {
            quote:'3rd quote',
            author:'Ram Verma'
        },
        {
            quote:'4th quote',
            author:'Shyam Bhatta'
        },
        {
            quote:'5th quote',
            author:'Yam Gautam'
        },
        {
            quote:'6th quote',
            author:'Riya Shrestha'
        },
        {
            quote:'7th quote',
            author:'Krishna Kumar'
        },
        {
            quote:'8th quote',
            author:'Shiva Raj'
        },
        {
            quote:'9th quote',
            author:'Harihar Sharma'
        },
    ]
    const previous=()=>{
        setTracer(tracer-1<0?info.length-1:tracer-1)
    }
    const nextone=()=>{
        setTracer(tracer+1>info.length-1?0:tracer+1)
    }
    return <>
    <div className="text-container">
        <div className="info">
            <p className="quote">{info[tracer].quote}</p>
            <p className="author">-{info[tracer].author}</p>
        </div>
        <div className="btns">
            <button className="btn prev" onClick={previous}>prev</button>
            <button className="btn next" onClick={nextone}>next</button>
        </div>
    </div>
    
    </>
}
export default Test