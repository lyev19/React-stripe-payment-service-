import { stripBasename } from '@remix-run/router';
import React from 'react';
import { useEffect } from 'react';
const Card_element = (props)=>{
    const item = props.item
    return(
    <div className="card">
        <h4 className="card-title">
            {item.title}
        </h4>
        <div className="card-image-container-1" >
            <img src={item.image} className="card-image-container"></img>
        </div>
        <h5>{item.price} $</h5>
       <div className="description hidden">
           Lorem ipsum
       </div>
       <div className='add-to-cart'> add to cart</div>
    </div>)

}



export const Elements = (props)=>{
    const store = JSON.parse(localStorage.getItem("items"))
    console.log(store)
    console.log(props.Items)
    useEffect(() => {
        if(props.Items.length===0&&store!==null){
            for(let i=0;i<20;i++){
                props.set_items(store[i])
            }
        }
    }, [localStorage]);
   
   const all_cards = props.Items.map((a)=> {return(<Card_element item ={a}/>)})
    console.log(props.Items)
    //const cards = localStorage.getItem("items")!==null? ()=>{
        
    //}:[]

    return (
    <div className="center-container">
        <h2>section-title</h2>
        <div className="card-container">
           {all_cards}
        </div>
      
    </div>)
}