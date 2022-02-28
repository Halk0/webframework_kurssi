import React from 'react'

const NewProduct = props => {
    return <form onSubmit={props.Submit} id='add'>
        <p>Add product</p>
        <title> name </title>
        <input placeholder='name' type='text' name='name' />
        <title> manufacturer </title>
        <input placeholder='manufacturer' type='text' name='manufacturer' />
        <title> description </title>
        <input placeholder='description' type='text' name='description' />
        <title>image link</title>
        <input placeholder='image' type='text' name='image'></input>
        <title>price without currency format eg. 10</title>
        <input placeholder='price' type='number' name='price'></input>
        <title>stock</title>
        <input placeholder='stock' type='number' name='stock'></input>
        <button type='submit' form='add' value={'add'}>
        </button>
    </form>
}

export default NewProduct;
