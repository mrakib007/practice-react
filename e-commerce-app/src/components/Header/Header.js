import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result=> {})
        .catch(error => console.log(error));
    }

    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
           <nav>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to={"/signup"}>Signup</Link>
            {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Log Out</button></span>}
           </nav>
        </div>
    );
};

export default Header;