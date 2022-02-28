import React from "react";

/* Shopping list item */
const Invoice = props => {
    return <li className={props.invoiceNumber} className='Invoice'>
        <h5>Invoice: {props.productName}</h5>
        <p>price total: {props.total}€</p>
        <p>pcs bought: {props.amount}</p>
        <p>Invoice number: {props.invoiceNumber}</p>
    </li>
}

export default Invoice;
