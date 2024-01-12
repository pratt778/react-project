import { useState } from "react";
import './calc.css'

const Calc =()=>{
    const [val, setVal] = useState('');
    const clear=()=>{
        setVal('');
    }
    const display=(num)=>{
        setVal(val+num)
    }
    const calc=()=>{
        setVal(eval(val));
    }
    return <>
    <form>
        <input type="text" value={val} className="box"/>
        <div className="btns">
            <span className="btn bg" onClick={()=>clear()}>C</span>
            <span className="btn sym"onClick={()=>display('%')}> %</span>
            <span className="btn sym" onClick={()=>display('.')}>.</span>
            <span className="btn bgrey"onClick={()=>display('7')}>7</span>
            <span className="btn bgrey" onClick={()=>display('8')} >8</span>
            <span className="btn bgrey" onClick={()=>display('9')} >9</span>
            <span className="btn bgrey" onClick={()=>display('4')}>4</span>
            <span className="btn bgrey" onClick={()=>display('5')}>5</span>
            <span className="btn bgrey" onClick={()=>display('6')}>6</span>
            <span className="btn bgrey" onClick={()=>display('1')}>1</span>
            <span className="btn bgrey" onClick={()=>display('2')}>2</span>
            <span className="btn bgrey" onClick={()=>display('3')}>3</span>
            <span className="btn bgrey" onClick={()=>display('0')}>0</span>
            <span className="btn sym" onClick={()=>display('/')}>/</span>
            <span className="btn sym" onClick={()=>display('*')}>x</span>
            <span className="btn sym" onClick={()=>display('-')}>-</span>
            <span className="btn sym" onClick={()=>display('+')}>+</span>
            <span className="btn bg" onClick={()=>calc()}>=</span>
        </div>
    </form>
    </>

}

export default Calc;