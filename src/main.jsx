import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Todo from './todo'
// import './index.css'
// import Meal from './mealapi'
// import Calc from './calc'
// import Col from './colormode'
// import Hide from './hiddensearch'
// import Test from './testimonials'
// import Accord from './accordions'
// import  {accordionData}  from '../utils/accords'
import Myform from './form'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Meal /> */}
    {/* <Calc/> */}
    {/* <Col/> */}
    {/* <Test/> */}

    {/* {accordionData.map(({title,content})=>{
      return <Accord title={title} content={content}/>
    })} */}
  <Myform/>
  
  </React.StrictMode>,
)
