import React from "react";
import { addText, addPost } from '../../../Redux/store'
import ProfileForm from "./ProfileForm";

const ProfileFormContainer = ({ dispatch }) => {

    const addPosts = () => {
        dispatch(addPost())
    }
    const addTexts = (text) => {
        dispatch(addText(text))
    }
    return (
        <ProfileForm addPosts={addPosts} addTexts={addTexts} />
    )
}

export default ProfileFormContainer