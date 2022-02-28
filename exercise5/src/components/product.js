import React from "react";

/* Shopping list item */
const Product = props => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.productNumber);
        }
    }

    if (props.adm) {
        return <li className={props.name} className='Product'>
            <img src={props.image} alt="kuva" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>manufacturer: {props.manufacturer}</p>
            <p>{props.price}€</p>
            <p>In stock: {props.stock}</p>
            <button>purchase</button>
            <button id={props.productNumber} onClick={(id) => handleClick(id)}>delete</button>
        </li >
    } else if (!props.adm) {
        return <li className={props.name} className='Product'>
            <img src={props.image} alt="kuva" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>manufacturer: {props.manufacturer}</p>
            <p>{props.price}€</p>
            <p>In stock: {props.stock}</p>
            <button>purchase</button>
        </li>
    }
}

export default Product;
