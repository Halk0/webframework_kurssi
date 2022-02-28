import React from 'react'
import Product from './product';

/* Shopping list item */
const ProductList = props => {
    return <ul className='Productlist'>
        {props.items.map(i => <Product {...i} adm={props.adm} key={i.productNumber} onClick={(id) => props.onClick(id)} />)}
    </ul>
}

export default ProductList;
