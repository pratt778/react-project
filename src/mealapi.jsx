import axios from 'axios';
import { useState, useEffect } from 'react';
import './meal.css'


const Meal = ()=>{

        const [info,setInfo]=useState([]);
        useEffect(()=>{
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res)=>{
                setInfo(res.data.meals)
        }).catch((err)=>{
            console.log(err)
        })
        })

        return <>
                

        {info.map(({idMeal,strMeal,strMealThumb})=>{
            return <div className='card'>
                <img src={strMealThumb} alt="" key={Math.random()*100} />
                <h1 key={idMeal}>Dish is {strMeal}</h1>
            </div>
        })}
        
        
        
        </>

}

export default Meal;