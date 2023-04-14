import React from "react";

function Header({ name }) {

    return <header>
        <h1 id={name}>
            {name}
        </h1>
    </header>
}

export default Header