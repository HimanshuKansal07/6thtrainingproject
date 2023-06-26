import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    
    return(
        <Fragment>
            <Header />
            <div id="mainContent">
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default Layout