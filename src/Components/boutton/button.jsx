import React from 'react'
import './button.scss'
const CostumButton=({children,...props})=>(
<button {...props} className='custom-button'>{children}</button>

)
export default CostumButton