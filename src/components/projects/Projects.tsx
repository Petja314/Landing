import React from 'react';
import {Box, Container, IconButton, Paper, Typography} from "@mui/material";
import "../../App.css"
import web1 from "../../assets/images/portfolio/web1.png"
import web2 from "../../assets/images/portfolio/web2.png"
import NearMeIcon from '@mui/icons-material/NearMe';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from "./projects.module.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import {useNavigate} from "react-router-dom";


type ProjectsType = {
    title: string
    description: string
    hoverTitle: string
    hoverDescription: string
    img: string
    icon : any
    gitTitle : string
    gitLink : string
    webLink : string
}

const projects : ProjectsType[] = [
    {
        title: "Mi Crypto",
        description: "Mi Crypto offers a comprehensive suite of tools to effortlessly track, swap, and optimize your cryptocurrency investments.",
        hoverTitle: "Crypto Project",
        hoverDescription: "React-based application utilizing ...",
        // hoverDescription : "React-based application utilizing Material UI and Firebase back end...",
        img: web1,
        icon: <GitHubIcon/>,
        gitTitle: "Github",
        gitLink: "https://github.com/Petja314/Crypto-Project",
        webLink: "https://vibesites.com/",
    },
    {
        title: "Social Network",
        description: "React project enabling users to find friends, chat, ask an AI bot questions...",
        hoverTitle: "Geeks Network",
        hoverDescription: "React-based application utilizing ...",
        // hoverDescription : "Within this platform, users can discover and connect with new friends, engage in real-time chat conversations and much more.",
        img: web2,
        icon: <GitHubIcon/>,
        gitTitle: "Github",
        gitLink: "https://github.com/Petja314/Project",
        webLink: "https://geeksnetwork.online/login",
    },
]



const Projects = () => {

    const redirectToUrl = (url : any) => {
        window.location.replace(url)
    }

    return (
        <Box className={styles.projectsBox} id={"Projects"}>
            <Container>
                <Typography variant={"h3"}>Recent Projects</Typography>

                <Box className={styles.SectionDescription}>
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </Box>


                <Box className={styles.projectWrapper}>
                    {
                        projects.map((item, index) => (
                            <Box key={index}>
                                <Paper className={styles.projectPaperSection} onClick={() => redirectToUrl(item.webLink)} >
                                    <Box className={styles.projectImg}>
                                        <img src={item.img} alt="project image"/>
                                    </Box>

                                    <Paper className={styles.projectPaperInfo}>
                                        <Box><ArrowOutwardIcon className={styles.arrow}/> </Box>
                                        <Box className={styles.projectTitle}>{item.hoverTitle}</Box>
                                        <Box className={styles.projectDescription}>{item.hoverDescription}</Box>
                                    </Paper>
                                </Paper>

                                <Box className={styles.projectInfoBox}>
                                    <Box className={styles.projectInfoTitle}>{item.title}

                                    </Box>

                                    <Box key={index} className={styles.contactIconsSection}>
                                        <a href={item.gitLink}>
                                            <IconButton className={styles.iconBtn}>{item.icon}</IconButton>
                                            <Box className={styles.contactIconTitle}>{item.gitTitle}</Box>
                                        </a>
                                    </Box>

                                    <Box className={styles.projectInfoDescription}>{item.description}</Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;