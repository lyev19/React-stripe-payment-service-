import React from "react";
import { useState,useEffect} from "react";
import { Elements } from "../components/store-elements";

export const Store =(props) =>{

    useEffect(() => {
        props.all_items_fetch()
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
            Store
            <div className='buttons-header'>
            <button className='button-buy' onClick={()=>{}}>Shopping-cart</button>
            <button className='button-buy'>BUY$$$$$$</button>
            </div>
           
        </header>
        <Elements Items={props.Items} set_items={props.set_items} pop={props.pop} set_pop={props.set_pop}/>
      </div>
    );
} 