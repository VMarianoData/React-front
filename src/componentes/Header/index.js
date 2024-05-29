import React from "react";
import "./styles.css"
const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <a class = "navbar-brand" href="http://localhost:3000/">
                        Pesqueiros - Fatec Diadema
                    </a>
                </nav>
            </header>
        </div>
    );
};

export default Header;