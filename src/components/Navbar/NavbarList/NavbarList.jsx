import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavbarList.module.css'

const NavbarList = ({ navbar }) => {
    const { list, list__item, list__link } = classes

    return (
        <ul className={list}>
            {navbar.map(({ value, href }, index) =>
                <li className={list__item}
                    key={index}>
                    <NavLink
                        to={href}
                        activeclassName={list__link}>
                        {value}
                    </NavLink >
                </li>
            )}
        </ul>
    )
}

export default NavbarList