import React from 'react'
import {Link} from 'react-router-dom'
import{ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.scss'
const Header=()=>(
<div className='header'>
    <Link to='/' className='logo-container'>
<Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link to='/Shop' className='option'>SHOP</Link>
    <Link to='/Shop' className='option'>CONTACT</Link>
</div>
</div>
)
export default Header;