import React, { useContext } from "react";
import { PostContext } from "../providers/PostProvider"

export const PostSearch = () => {
    const { setSearchTerms } = useContext(PostContext);

    return (
        <>
            Search Posts:
            <input type="text" className="input--wide"
                onKeyUp={(e) => setSearchTerms(e.target.value)}
                placeholder="Search for a Post..." />


        </>
    )
}
export default PostSearch;