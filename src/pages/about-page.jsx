import {useParams} from "react-router-dom";
import HomePage from "./home-page.jsx";
import Layout from "../layout/Layout.jsx";


const AboutPage = () => {
    const {home} = useParams();


    return (
        <Layout>
            <h1>About page {home}</h1>
        </Layout>
    );
};

export default AboutPage;