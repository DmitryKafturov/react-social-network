import React from "react";
import Post from "./Post/Post"
import classes from './ProfileMyPosts.module.css'

const PrfileMyPosts = ({ Posts }) => {
    const { posts, posts__ava, posts__list, posts__item } = classes

    return (
        <div className={posts} >
            <ul className={posts__list}>
                {Posts.map(({ massage, likeClick, id }) =>
                    <Post massage={massage} likeClick={likeClick} id={id} />)}
            </ul>
        </div>
    )
}

export default PrfileMyPosts