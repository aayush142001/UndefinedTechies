import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AuthModal from '../Components/Authentication/AuthModal';
import UserSidebar from "../Components/Authentication/UserSidebar";
import { CurrencyState } from '../CurrContext';
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const {user} = CurrencyState();

    return (
        <div className='header'>
            <div className='container'>
                <h1>Crypto <span className='primary'>Geeks</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/home'>Coins</Link>
                    </li>
                    <li>
                        <Link to='/'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/'>Earn</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
                {/* <div className='btn-group'>
                    <button className='btn'>Log In</button>
                </div> */}
                {user ? <UserSidebar /> : <AuthModal/>}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
