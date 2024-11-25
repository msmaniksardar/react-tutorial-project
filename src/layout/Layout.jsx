import React from 'react';
import HeaderComponent from "../components/header-component.jsx";
import FooterComponent from "../components/footer-component.jsx";

const Layout = (props) => {
    return (
        <div>
            <HeaderComponent/>
            {props.children}
            <FooterComponent/>
        </div>
    );
};

export default Layout;