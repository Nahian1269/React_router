import { useLoaderData, useNavigate } from "react-router-dom";

const Post_Details = () => {
    const sty = {
        border :'2px solid green' , 
        gap : '10px',
        padding: '20px',
        margin: '20px'

    }

    const titlex = { 
        color : "red" , 
    }

    const news_det = useLoaderData() ; 

    const{title, body , id} = news_det ;

    const nav = useNavigate() ; 

    const handleback = () => {
        nav(-1); 
    }

    return (
        <div style={sty}>
        <small><h2>{id}</h2></small>
            <h1 style={titlex}>{title}</h1>
            <h4>Post: {body}</h4>
            <button onClick={handleback}>Go back</button>
        </div>
    );
};

export default Post_Details;