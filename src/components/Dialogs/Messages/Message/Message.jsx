import React from "react";
import classes from './Message.module.css'


const Message = ({ text, name }) => {

    const { message, message__my_ava, message__name, message__text, cont, ava } = classes
    return (
        <div >
            <li className={message} >
                <div className={cont}>
                    {/* <span className={`${message__my_ava}  ${ava}`}></span> */}
                    <span className={message__name}>{name}</span>
                </div>
                <span className={message__text}>{text}</span>
            </li>
        </div>
    )
}

export default Message