import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getAllPosts = () => {
        //the proxy that was set up in package.json will be handling the first part of the URL
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const searchPosts = (searchTerms) => {
        return fetch(`/api/post/search?q=${searchTerms}`)
            .then((res) => res.json())
            .then(setPosts);
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPosts, setSearchTerms, searchTerms }}>
            {props.children}
        </PostContext.Provider>
    );
};
export default PostProvider;