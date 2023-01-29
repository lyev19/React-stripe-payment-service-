import React from "react";
import { useState,useEffect} from "react";
import { Elements } from "../components/store-elements";
import { Cart } from "../components/popup";
export const Store =(props) =>{

    useEffect(() => {
        props.all_items_fetch()
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
            Store
            <div className='buttons-header'>
            <button className='button-buy' onClick={()=>{props.set_pop()}}>Shopping-cart</button>
            <button className='button-buy'>BUY$$$$$$</button>
            </div>
           
        </header>
        <Elements Items={props.Items} set_items={props.set_items} pop={props.pop} set_pop={props.set_pop} set_cart={props.set_cart} Cart={props.Cart}/>
        <Cart remove_cart={props.remove_cart} pop={props.pop} set_pop={props.set_pop} Cart={props.Cart}/>
      </div>
    );
} 