import React from "react";
import { updateText, addObjMessage } from '../../../Redux/store'
import Messages from "../Messages";

const MessagesContainer = ({ dispatch }) => {

    const addPost = () => {
        dispatch(addObjMessage())
    }
    const inputChange = (textMess) => {
        updateText(textMess);
    }
    return (
        <Messages addPost={addPost} inputChange={inputChange} />
    )
}

export default MessagesContainer