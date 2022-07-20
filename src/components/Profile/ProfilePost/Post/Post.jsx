import React from "react";
import classes from "./Post.module.css"

const Post = ({ massage, likeClick, id }) => {

    const { posts__ava, posts__item, posts__like, posts__dislike, dislike, like, posts__number } = classes

    return (
        <div>
            <li className={posts__item} id={id}>
                <span className={posts__ava}></span>
                <span >{massage}</span>
                <span className={posts__like} >
                    <img className={like}
                        src="https://pngicon.ru/file/uploads/like.png"></img>
                </span>
                <span className={posts__number}>{likeClick}</span>
                <span className={posts__dislike}>
                    <img className={dislike}
                        src="https://pngicon.ru/file/uploads/like.png"></img>
                </span>
            </li>
        </div>
    )
}

export default Post