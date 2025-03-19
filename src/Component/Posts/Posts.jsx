import { Link, useNavigate } from "react-router-dom";

const Posts = ({post}) => {
    const {userId,id , title , body} = post

    const navi = useNavigate() ; 
    
    const sty = {
        border :'2px solid white' , 
        gap : '10px',
        padding: '20px',
        margin: '20px'

    }

    const titlex = { 
        color : "red" , 
    }

    const btn ={ 
        display : 'flex',
        gap : '10px',       
    }

    const handleShowDetails =() =>{
        navi(`/Posts/${id}`)
    }
    
    const inside ={ 
        backgroundColor: 'white' , 
        color:'blue'
    }
    return (
        <div style={sty}>
        <p>Post Serial: {id}</p>
        <h2 style={titlex}>{title}</h2>
        <p>{body}</p> 
        <div style={btn}> 
        <button style={inside} onClick={handleShowDetails} >Click now</button>
        </div>
        
        </div>
    );
};

export default Posts;