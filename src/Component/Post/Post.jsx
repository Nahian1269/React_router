import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";


const Post = () => {
    const post = useLoaderData() ; 
    console.log(post);
    
    return (
        <div>
           {
            post.map((post) =>(<Posts post = {post} ></Posts>) )
           } 
        </div>
    );
};

export default Post;