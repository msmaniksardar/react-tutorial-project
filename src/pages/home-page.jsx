import Layout from "../layout/Layout.jsx";
import  {ToastContainer ,toast} from "react-toastify";
import {useState} from "react";


const HomePage = () => {
   //  const [alerts, setAlerts] = useState({});
    return (
        <Layout>
            <ToastContainer/>
            <h1>Home page</h1>
            <button onClick={()=> toast.warning("hello" , {position:"top-center" , theme:"light" })}>Click Me</button>
        </Layout>
    );
};

export default HomePage;