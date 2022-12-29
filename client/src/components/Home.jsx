import React from "react";
import NavBar from "./NavBar";
import { Image } from 'mui-image';
import recoupLogo from '../assets/images/new_recoup_logo.png'

function Home({ loginStatus, setLoginStatus }) {
    return (
        <>
            <NavBar loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            <Image src={recoupLogo} height="90vh" />
        </>
    )
}

export default Home