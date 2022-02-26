import React from "react";

/* Shopping list item */
const ShoppingButton = props => {
    return <button onClick={props.onClick}>
        Add {props.product}
    </button>
}

export default ShoppingButton;
