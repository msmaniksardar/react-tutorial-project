import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul style={{ listStyle:"none", display:"inline-flex" , backgroundColor:"green" ,width:'100%' }}>
                <li style={{padding:10}}> <Link to={"/"}>Home</Link> </li>
                <li style={{padding:10}}> <Link to={"/about"}>About</Link> </li>
                <li style={{padding:10}}> <Link to={"/contact"}>Contact</Link> </li>

            </ul>
        </div>
    );
};

export default HeaderComponent;