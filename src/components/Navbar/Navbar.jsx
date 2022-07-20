import React from "react";
import NavbarFriends from './NavbarFriends/NavbarFriends'
import classes from './Navbar.module.css'
import NavbarList from "./NavbarList/NavbarList";

const Navbar = ({ navbar, friends }) => {
    const { nav, nav__list, nav__item, nav__link, active } = classes

    return (
        <nav className={nav}>
            <NavbarList navbar={navbar} />
            <NavbarFriends title='Best friends' persons={friends} />


        </nav >
    )
}

export default Navbar