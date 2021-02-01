import React, {useContext} from "react";
import "./ItemCard.css";
import {Context} from "../Context";

export default function ItemCard({id,title,price,image,desc }) {
    const context = useContext(Context);

    function clickHandler(id, title, price, image, desc){
        for (let i = 0; i<context.cart.length; i++){
            if(context.cart[i].id===id){
                return context.cart[i].quantity = context.cart[i].quantity+1
            }}
        context.setCart([...context.cart, {id:id, title:title, price:price, image:image, desc:desc, quantity:context.quantity}])
     }
    
     return (
        <div className="card">
            <img src={image} alt={id}/>
            <div className="wrapper">
                <div id="price">Price: ₹{price}</div>
                <br/>
                <div id="title">{title}</div>
            </div>    
            <div className="description">
                <p>{desc}</p>
            </div>
            <button className="button" onClick={()=>clickHandler(id, title, price,image, desc)}> Add to cart </button>
        </div>
    )
}
