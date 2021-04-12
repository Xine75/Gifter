import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { PostContext } from "./PostProvider"

export const PostForm = () => {
    const { addPost } = useContext(PostContext);
    const history = useHistory();
}


//----------------Setting State ----------------

const [isLoading, setIsLoading] = useState(true);
const [post, setPost] = useState({
    title: "",
    imageUrl: "",
    caption: "",
    dateCreated: "",
})

//-------------Saving User Input --------------

const handleControlledInputChange = (e) => {
    const newPost = { ...post }
    newPost[e.target.id] = e.target.value;
    setPost(newPost);
}

//-------------------save new post upon click event-------------

const handleClickSavePost = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newPost = { ...post }
    addPost(newPost)
        .then(() => history.push("/posts"))
}

//-------------------------JSX Add Post ----------------------

