import "./CartBuilder.css";
import React,{useContext, useReducer} from 'react'
import {Context} from "../Context";
import "./Cart.css";


function clickHandler(context, productToRemove){
    context.setCart(context.cart.filter(product=> product.id!==productToRemove))
}

function reducer(state, action){
    if (action.type==="increment"){
        return state+1
    }
    else if ((action.type==="decrement") && (state>1)){
        return state-1
    }
    else{
        return state
    }
}

function Cart({id, title, price, image, desc, quantity}) {
    const context = useContext(Context);
    const [state, dispatch] = useReducer(reducer, quantity)
    return (
        <div className="card">
            <img src={image} alt={id}/>
            <div className="wrapper">
                <div id="price">Price: ₹{price}</div>
                <div id="price">Total : ₹{(price*state)}</div>
                <div id="title">{title}</div>
            </div>    
            <div className="description">
                <p>{desc}</p>
            </div>
            <button className="cart-button" onClick={()=>clickHandler(context,id)}> Remove from cart </button>
            <span className="quantity">
                <button className="btn" onClick={()=>dispatch({type:"decrement"})}>-</button> <p>{state}</p>
                <button className="btn" onClick={()=>dispatch({type:"increment"})}>+</button>
            </span>
        </div>
    )
}
export default function CartBuilder () {
    const context = useContext(Context);
    return (
        <>
        {context.cart.length===0?<h1>Your shopping cart is empty</h1>: <h1>Welcome to your cart</h1>}
        <div className="container">
            {context.cart.map(item=>(
            <Cart 
            key={item.id} 
            id={item.id} 
            price={item.price} 
            title={item.title} 
            desc={item.desc} 
            image={item.image}
            quantity={item.quantity}
            />))}
        </div>
        </>
    )
}
