import React from "react"
import {withRouter} from 'react-router-dom';
import "./MenuItem.scss"
const MenuItem=({title,imageUrl,size,linkUrl,match,history})=>(
<div className={`${size} menu-item`} style={{backgroundImage:`url(${imageUrl})`}} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
            <div className="title">  
             {title.toUpperCase()}
             <span>Shop now</span>
        </div>
        </div>
        </div>
        
     
    )
    export default withRouter(MenuItem);