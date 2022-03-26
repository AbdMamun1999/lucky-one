import React from 'react';
import './Header.css'

const Header = ({name}) => {
    return (
        <div>
            <h2 className='header'>{name}</h2>
        </div>
    );
};

export default Header;