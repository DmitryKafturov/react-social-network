import React from "react";
import ProfilePicture from './ProfilePicture/ProfilePicture'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PrfileMyPosts from './ProfilePost/ProfileMyPosts'
import ProfileFormContainer from "./ProfileForm/ProfileFormContainer";


const Profile = ({ Posts, dispatch }) => {
    return (
        <div >
            <ProfilePicture />
            <ProfileInfo />
            <ProfileFormContainer
                dispatch={dispatch}
            />
            <PrfileMyPosts

                Posts={Posts}
            />
        </div>
    )
}

export default Profile
