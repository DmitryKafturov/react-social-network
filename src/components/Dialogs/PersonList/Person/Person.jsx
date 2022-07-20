import React from "react";
import classes from './Person.module.css'
import { NavLink } from "react-router-dom";

const Person = ({ name, id }) => {
    const { person__item, person__ava } = classes;
    let path = `/dialogs/${id}`;

    return (
        <div>
            <li className={person__item}>
                <img className={person__ava}
                    src="http://www.avotarov.ru/picture/avatar-64/kartinki/874.jpg">
                </img>
                <NavLink to={path} >
                    {name}
                </NavLink>
            </li>
        </div>
    )
}

export default Person