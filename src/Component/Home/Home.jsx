import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const bg ={ 
        backgroundColor: 'black'

    }

    return (
        <div style={bg}>
        <div>
        <Header></Header>
        </div>

  
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Home;