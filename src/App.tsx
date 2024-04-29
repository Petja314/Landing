import React from 'react';
import './App.css';
import {Box, CssBaseline, IconButton, ThemeProvider} from "@mui/material";
import Greeting from "./components/greeting/Greeting";
import AboutMe from "./components/about me/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {theme} from "./mui/MuiTheme";
import {ContactMe} from "./components/contant/ContantMe";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


function App() {




    const scrollOnTopHandler = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Box>
            <ThemeProvider theme={theme}>

                <IconButton
                    onClick={() => scrollOnTopHandler()}
                    sx={{border: "1px solid #8750f7", position: "fixed", bottom: "50px", right: "50px"}}>
                    <ArrowUpwardIcon sx={{color: "#8750f7"}}/>
                </IconButton>


                <CssBaseline/>
                <Header/>
                <Greeting/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Education/>
                <ContactMe/>
                <Footer/>


            </ThemeProvider>
        </Box>
    );
}

export default App;
