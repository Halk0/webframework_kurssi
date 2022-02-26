import React from 'react'
import Product from './product';

/* Shopping list item */
const Productlist = props => {
    return <ul className='Productlist'>
        {props.items.map(i => <Product {...i} key={i.key} />)}
    </ul>
}

export default Productlist;
