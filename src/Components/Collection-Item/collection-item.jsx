import React from 'react'
import './Collection-item.scss'
const CollectionItem=({id,imageUrl,name,price})=>(
    <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='collection-footer'>
         <span className='name'>{name}</span>
         <span className='price'>{price}0kr</span>
        </div>
    </div>
);
export default CollectionItem;