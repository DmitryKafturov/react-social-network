import React from "react";
import NavbarFriend from "../NavbarFriend/NavbarFriend";
import classes from './NavbarFriends.module.css'

const NavbarFriends = ({ persons, title }) => {
    const { friends, friends__title } = classes;

    return (
        <div className={friends}>
            <h1 className={friends__title}>{title}</h1>
            <NavbarFriend persons={persons} />
        </div>
    )
}

export default NavbarFriends