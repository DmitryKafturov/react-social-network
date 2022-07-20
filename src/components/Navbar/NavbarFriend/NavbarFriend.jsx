import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavbarFriend.module.css'

const NavbarFriend = ({ persons }) => {
    const { list, list__item, list__ava, ava, list__link } = classes

    return (
        <ul className={list}>
            {persons.map(({ namePerson, id }) =>
                <li className={list__item} >
                    <span className={`${list__ava}  ${ava}`}>
                    </span>
                    <NavLink to={`/dialogs/${id}`} className={list__link}>
                        {namePerson}
                    </NavLink>
                </li>

            )}

        </ul>
    )
}

export default NavbarFriend