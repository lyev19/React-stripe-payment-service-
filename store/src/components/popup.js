import React from "react";
import Portal from "../Portal";

export const Cart = (props)=>{

//onClick={()=>{props.set_pop()}}
     const cart_items= props.Cart===[]?[]:props.Cart; 
     const rend = cart_items.map(a=>{ return(<div className="cart-item">{a===[]?[]:a.title} 
     {a===[]?[]:a.price}  <button> remove </button> </div>)})
    return(  
    <div>
        <Portal>
            {(props.pop)&&(<div className="portal">
                adklajsdlkajsdklj
                <div className="filter" onClick={()=>{props.set_pop()}}></div>
                <div className="portal-intern">
                    {rend}
                </div>
                
            </div>)}
        </Portal>
    </div>


    )

}