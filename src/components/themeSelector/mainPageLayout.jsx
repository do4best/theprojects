import React, {useContext} from 'react';
import {ThemeContext} from "./themecontext.jsx";

function MainPageLayout(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <>
            <div style={{backgroundColor : theme.backgroundColor, color : theme.color}} className={"h-svh"}>

        <h1>Main Page Layout</h1>
            <header>Header</header>
            <main>Toggle Theme</main>
            <footer>Footer</footer>
            </div>

        </>
    );
}

export default MainPageLayout;