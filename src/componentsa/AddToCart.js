import React from 'react'
import productDetails from './Data/ProductDetails'

const AddToCart = (id) => {

    const cart=productDetails.map((product)=>{
        if (product.id==id){
            console.log(11111111111111111111);
            console.log({                ...product,
                inCart:true});
            return {
                ...product,
                inCart:true
            }
        }
        return product
    })
    
    console.log(cart);
    console.log(productDetails);
}

export default AddToCart