import { useState } from "react";
import './form.css'
const Myform = ()=>{
    const [username,setUsername]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPass]= useState('');
    const [conpassword,setCon]= useState('');

    const [errname,setErrname]= useState('');
    const [erremail,setErremail]= useState('');
    const [errpass,setErrpass]= useState('');
    const [errconpass,setErron]= useState('');

    const [usercol,setUsercol]=useState('');
    const [emailcol,setEmailcol]=useState('');
    const [passcol,setPasscol]=useState('');
    const [concol,setConcol]=useState('');

    const formval=(e)=>{
        e.preventDefault();
        if(username.length>8){
            setErrname('');
            setUsercol('green');
        }else{
            setErrname('Username should be greater than 8 characters')
            setUsercol('red') 
        }
        if(email.includes('@gmail.com')){
            setErremail('');
            setEmailcol('green')
        }
        else{
            setErremail('Email should include @ gmail.com')
            setEmailcol('red')
        }
        if(password.length>8 && password!=''){
            setErrpass('')
            setPasscol('green')
        }
        else{
            setErrpass('Password should not be empty and should be greater than 8 characters')
            setPasscol('red')
        }
        if(conpassword==password && conpassword!=''){
            setErron('')
            setConcol('green')
        }
        else{
            setErron('Password doesn"t match!!')
            setConcol('red')
        }
    }
    return <>
    <div className="image">
        <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
    </div>
    <form>
        <div className="form">

        <input type="text" placeholder="Enter your username here" value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:usercol}} />
         <p style={{color:usercol}}>{errname}</p>
        <input type="email" placeholder="Enter your email here" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailcol}}/>
        <p style={{color:emailcol}}>{erremail}</p>
        <input type="password" placeholder="Enter your password here" value={password} onChange={(e)=>setPass(e.target.value)} style={{borderColor:passcol}}/>
        <p style={{color:passcol}}>{errpass}</p>
        <input type="password" placeholder="Enter your password again" value={conpassword} onChange={(e)=>setCon(e.target.value)} style={{borderColor:concol}} />
        <p style={{color:concol}}>{errconpass}</p>
        <button onClick={formval}>Submit</button>
        </div>
    </form>
    </>
}

export default Myform