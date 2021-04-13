import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

export const PostList = () => {
    const { posts, getAllPosts, searchTerms, searchPosts } = useContext(PostContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change

    useEffect(() => {
        if (searchTerms !== "") {
            searchPosts(searchTerms)
        } else {
            getAllPosts()
        }
    }, [searchTerms])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PostList;
