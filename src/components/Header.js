import React from "react";

//a `<header>` element with the following elements inside:
//- an `<h1>` with the name of the blog, passed as a prop called `name`

function Header(prop){
    return(
        <header>
            <h1>{prop.name}</h1>
        </header>
    )
}

export default Header;