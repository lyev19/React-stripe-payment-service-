import React from "react";
import { useState,useEffect} from "react";
import { Elements } from "../components/store-elements";
import { Cart } from "../components/popup";
import { Add_item } from "../components/popup";
export const Store =(props) =>{
    const [popBuy,setPopBuy]=useState(false);
    const [selItem,setselItem]=useState([])
    const set_sel_item = (item)=>{
         setselItem(item)
    }
    const pop_buy= ()=>{
       setPopBuy(!popBuy)
    }
    useEffect(() => {
        props.all_items_fetch()
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="page-title">Store</h1>
            <div className='buttons-header'>
            <button className='fa-solid fa-cart-shopping button-buy' onClick={()=>{props.set_pop()}}></button>
            <button className='fa-solid fa-cash-register button-buy'></button>
            </div>
           
        </header>
        <Elements setselItem={set_sel_item} popBuy={popBuy} pop_buy={pop_buy} Items={props.Items} set_items={props.set_items} pop={props.pop} set_pop={props.set_pop} set_cart={props.set_cart} Cart={props.Cart}/>
        <Cart remove_cart={props.remove_cart} pop={props.pop} set_pop={props.set_pop} Cart={props.Cart}/>
        <Add_item selItem={selItem} popBuy={popBuy} pop_buy={pop_buy} set_items={props.set_items} set_cart={props.set_cart}/>
      </div>
    );
} 