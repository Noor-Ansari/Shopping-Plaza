import React, {useState} from 'react';
import ItemCard from "../ItemCard/ItemCard";
import "./ItemCardBuilder.css";
import Items from "../items.js";

export default function ItemCardBuilder() {
    const [items] = useState(Items);
    return(
        <div className="container">
            {items.map(item=>(
            <ItemCard 
            key={item.id} 
            id={item.id} 
            price={item.price} 
            title={item.title} 
            desc={item.desc} 
            image={item.image}/>))}
        </div>
    )
}
