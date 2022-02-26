import React from "react";

/* Shopping list item */
const Product = props => {
    return <li className={props.name} className='Product'>
        <img src={props.img} alt="kuva" />
        <h5>{props.name}</h5>
        <p>{props.desc}</p>
        <p>{props.price}€</p>
        <button>Add to cart</button>
    </li>
}

export default Product;
