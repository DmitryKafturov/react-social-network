import React, { useRef } from "react";
import classes from './ProfileForm.module.css'


const ProfileForm = ({ addPosts, addTexts }) => {

    const refInput = useRef();

    const onAddPosts = () => {
        addPosts()
    }
    const onTextChange = () => {
        let text = refInput.current.value
        addTexts(text)
    }

    return (
        <div className={classes.form}>
            <h2 className={classes.form__title}>
                My posts
            </h2>
            <input className={classes.form__input}
                onChange={onTextChange}
                type="text"
                placeholder="yours post..."
                ref={refInput}
            />
            <button className={classes.form__btn}
                onClick={onAddPosts}>
                Seld
            </button>
        </div>
    )
}

export default ProfileForm