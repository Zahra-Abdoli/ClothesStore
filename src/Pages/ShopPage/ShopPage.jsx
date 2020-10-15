import React from 'react';
import SHOP_DATA from './Shop.Data';
import './ShopPage.scss';
export class ShopPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            collection: SHOP_DATA
            
             
        }
    }
    render(){
        return(
            <div>shop page</div>

        );
    }

}
export default ShopPage;
