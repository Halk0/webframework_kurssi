import React from 'react'
import Invoice from './invoice';

/* Shopping list item */
const Productlist = props => {
    return <ul className='Productlist'>
        {props.items.map(i => <Invoice {...i} key={i.productNumber} />)}
    </ul>
}

export default Productlist;
