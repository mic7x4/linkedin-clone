import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1614856700~hmac=c9fe8ca3c21344e4705f3645a7ee962c" alt=""/>
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            </div>
        </div>
    )
}

export default Header
