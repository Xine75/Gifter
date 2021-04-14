import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../providers/PostProvider";
import PostList from "./PostList";

export const PostForm = () => {
    const { addPost, getAllPosts, getPostsWithComments } = useContext(PostContext);



    //----------------Setting State ----------------

    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState({
        userProfileId: "",
        title: "",
        imageUrl: "",
        caption: "",
        comments: [],

    })

    //-------------Saving User Input --------------

    const handleControlledInputChange = (e) => {
        const newPost = { ...post }
        newPost[e.target.id] = e.target.value;
        setPost(newPost);
    }

    //-------------------save new post upon click event-------------

    const handleClickSavePost = (e) => {
        e.preventDefault()
        setIsLoading(true)

        addPost({
            userProfileId: post.userProfileId,
            title: post.title,
            imageUrl: post.imageUrl,
            caption: post.caption,

        })
            .then(() => {
                getPostsWithComments()
                setPost({
                    userProfileId: "",
                    title: "",
                    imageUrl: "",
                    caption: "",
                    comments: [],


                })
            })
    }


    //-------------------------JSX Add Post ----------------------

    return (
        <>
            <form className="postForm">
                <h3 className="postForm__title">Add a Gif!</h3>

                <br />
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">User Profile Id:</label>
                        <input type="text" id="userProfileId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="User ID" value={post.userProfileId} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Gif Title:</label>
                        <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title of Gif" value={post.title} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Gif Url:</label>
                        <input type="text" id="imageUrl" onChange={handleControlledInputChange} required className="form-control" placeholder="Paste Gif Url Here" value={post.imageUrl} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Caption:</label>
                        <input type="text" id="caption" onChange={handleControlledInputChange} required className="form-control" placeholder="Your Caption" value={post.caption} />
                    </div>
                </fieldset>
                <button className="btn btn-info" disabled={isLoading} onClick={handleClickSavePost}>Add Post</button>

            </form>
        </>
    )
}
export default PostForm;
