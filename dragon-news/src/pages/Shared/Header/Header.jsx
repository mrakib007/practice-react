import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
            <img src={logo} alt="" srcSet="" />
            <p className='text-secondary'><small>Journalism Without Fear of Favor</small></p>
            <p>{moment().format("dddd, MMMMM D, YYYY")}</p>
           </div>
        </div>
    );
};

export default Header;