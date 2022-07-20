import React, { useRef } from "react";
import classes from './Messages.module.css'
import Message from './Message/Message'

const Messages = ({ personMessages, addPost, inputChange }) => {
    const { wrapper, messages, container, text, button_text } = classes

    const onAddPost = () => {
        addPost()
    }
    const onInputChange = (event) => {
        let textMess = event.current;
        inputChange(textMess);
    }
    return (
        <div className={wrapper}>
            <ul className={messages}>
                {personMessages.map(({ text, name, id }) =>
                    <Message
                        text={text}
                        name={name}
                        id={id}
                    />
                )}
            </ul>
            <div className={container}>
                <input className={text}
                    onChange={onInputChange}
                    type='text'
                    placeholder="Please add a message...."
                >
                </input>
                <button className={button_text}
                    onClick={onAddPost}>
                    Add message
                </button>
            </div>
        </div>
    )
}

export default Messages