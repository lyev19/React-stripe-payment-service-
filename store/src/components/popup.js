import React from "react";
import Portal from "../Portal";
import { useState } from "react";
export const Cart = (props)=>{

//onClick={()=>{props.set_pop()}}
     const cart_items= props.Cart===[]?[]:props.Cart; 
     const rend =cart_items.length==0?<div>The cart is empty</div>  : cart_items.map(a=>{ return(<div className="cart-item">{a===[]?<div>empty</div>:a.title} 
     : {a===[]?[]:a.price}  quantity: {a.number} <button id={a.id}className="fa-solid fa-xmark cart-button" onClick={(event)=>{props.remove_cart(event.target.id)}}>  </button> </div>)})
    return(  
    <div>
        <Portal>
            {(props.pop)&&(<div className="portal">
                
                <div className="filter" onClick={()=>{props.set_pop()}}></div>
                <div className="portal-intern">
                    <h1>Cart</h1>
                    {rend}
                   
                   <div className="modal-footer"> {cart_items.length==0?<div></div> :<button className="button-buy end">Buy</button>}</div> 
                </div>
                
            </div>)}
        </Portal>
    </div>


    )

}

export const Add_item = (props)=>{

    const [item,Setitem]= useState(1);
    const one_more = ()=>{
        Setitem(item+1);
    }
    const one_less = ()=>{
        if(item>1){
            Setitem(item-1)
        }
        else{
            alert("u cant add less than 1 item")
        }
    }
    
    const click = ()=>{
        const a = props.selItem
        a.number = item  //add a number to the object 
         console.log(a.number)
        props.set_cart(a)
    }

    
return(
     <div>
         <Portal>
           {(props.popBuy)&&(<div className="portal">
           <div className="filter" onClick={()=>{props.pop_buy()}}></div>
              <div className="portal-intern adding">
                  <h1> Add to cart</h1>
                  <h2>{item}</h2>
                  <div className="button-container">
                    <button className="button-add" onClick={(a)=>{one_more()}}>+1</button>
                    <button className="button-add" onClick={(a)=>{one_less()}}>-1</button>
                  </div>
                  <div className="modal-footer">
                     <button className="button-add" onClick={(a)=>{click()}} >Add </button>
                  </div>
                  
              </div>


           </div>)}

         </Portal>
     </div>
)

}