import React from 'react';
import {Box, Container, IconButton, Paper, Typography} from "@mui/material";
import "../../App.css"
import web1 from "../../assets/images/portfolio/web1.png"
import web2 from "../../assets/images/portfolio/web2.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from "./projects.module.css"
import GitHubIcon from "@mui/icons-material/GitHub";


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
        description: "A React-based project empowers users with cryptocurrency tracking, analytics, and portfolio management.",
        hoverTitle: "Crypto Project",
        hoverDescription: "React-based application utilizing MUI and Firebase...",
        img: web1,
        icon: <GitHubIcon/>,
        gitTitle: "Github",
        gitLink: "https://github.com/Petja314/Crypto-Project",
        webLink: "https://vibesites.com/",
    },
    {
        title: "Social Network",
        description: "Geek community connections, with real-time chat, AI chatbot, and modern tech integration.",
        hoverTitle: "Geeks Network",
        hoverDescription : "Discover, connect, chat, and more...",
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
                    In recent portfolio projects, I translate my ideas into captivating web experiences, inspiring myself and potential visitors.
                </Box>


                <Box className={styles.projectWrapper}>
                    {
                        projects.map((item, index) => (
                            <Box key={index} className={styles.projectContainer} >
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