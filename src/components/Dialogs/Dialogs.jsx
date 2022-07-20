import React from "react";
import classes from './Dialogs.module.css'
import PersonList from './PersonList/PersonList'
import Messages from './Messages/Messages'


const Dialogs = ({ Names, personMessages, dispatch }) => {
    const { dialogs } = classes
    return (
        <div className={dialogs}>
            <PersonList
                Names={Names} />
            <Messages
                personMessages={personMessages}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Dialogs