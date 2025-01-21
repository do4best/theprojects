import React, {useContext, useEffect, useState} from 'react';


const themes ={
    dark:{
        backgroundColor:"#000000",
        color : "#ffffff"
    },
    light:{
        backgroundColor: "#ffffff",
        color : "#000000"
    }
}
const initialState ={
    theme : themes.light,
    handelToggle : () =>{},
    isDarkTheme : false
}







const ThemeContext = useContext("our theme object")
const ThemeProvider = ({childern}) =>{
    const [isDarkTheme,setIsDarkTheme] = useState(false)
    useEffect(() => {
        const extraDarkThemeFlag = JSON.parse(localStorage.getItem('isDarkTheme'))
        setIsDarkTheme(extraDarkThemeFlag)
    }, []);
    const handelToggleIcon=()=>{
        const updateDarkTheme  = !isDarkTheme;
        localStorage.setItem(isDarkTheme,JSON.stringify(updateDarkTheme))
        setIsDarkTheme(updateDarkTheme)
    }
    const theme = isDarkTheme ? themes.dark : themes.light;
    return(
        <ThemeContext.Provider value={{theme,handelToggleIcon,isDarkTheme}}>
            {childern}
        </ThemeContext.Provider>

            )
            }


function Themecontext(props) {
    return (
        <></>
    );
}

export default ThemeProvider