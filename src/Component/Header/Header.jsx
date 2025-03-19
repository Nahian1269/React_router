import { Link } from "react-router-dom";


const Header = () => {
    const nav = { 
        display:'flex' , 
        justifyContent: 'center' , 
        gap: '20px',
        backgroundColor: 'White', 
        padding: '20px', 
    }

    const top ={
        display:'flex' , 
        justifyContent: 'center' ,
        fontSize:'40px'
    }
    return (
        <div >
            <h2 style={top}>React Router</h2>
            <nav style={nav}>
            <Link to = "/" >Home</Link>
            <Link to = "/About" >About</Link>
            <Link to = "/contact" >Contact</Link>
            <Link to = "/news" >News</Link>
            <Link to = "/Post" >Post</Link>
            </nav>
        </div>
    );
};

export default Header;