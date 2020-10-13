import React from "react"
import "./MenuItem.scss"
const MenuItem=({title,imageUrl})=>(
<div className="menu-item" style={{backgroundImage:`url(${imageUrl})`}}>
        <div className="content">
            <div className="title">  
             {title}
             <span>Shop now</span>
        </div>
        </div>
        </div>
        
     
    )
    export default MenuItem;