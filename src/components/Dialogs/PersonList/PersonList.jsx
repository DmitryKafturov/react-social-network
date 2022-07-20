import React from "react";
import classes from './PersonList.module.css'
import Person from './Person/Person'

const PersonList = ({ Names }) => {
    const { person } = classes

    return (
        <div>
            <ul className={person}>
                {Names.map(({ name, id }) =>
                    <Person
                        name={name}
                        id={id}
                    />
                )}
            </ul>
        </div >
    )
}

export default PersonList