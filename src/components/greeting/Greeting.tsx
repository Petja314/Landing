import React from 'react';
import {AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import me from "../../assets/images/greeting/me.png"
import "../../App.css"
import {TypeAnimation} from "react-type-animation";
import {Background} from "../particles/Background";
import styles from "./greeting.module.css"


type GreetingInfoType = {
    title : string
    description : string
}
type ContactIconsBoxType ={
    icon: any
    link: string
}

const Greeting = () => {
    const greetingBottomInfo : GreetingInfoType[] = [
        {title: "14", description: "Years of Experience"},
        {title: "50+", description: "Project Completed"},
        {title: "1.5K", description: "Happy Clients"},
        {title: "14", description: "Years of Experience"},
    ]

    const contactIconsBox : ContactIconsBoxType[]  = [
        {icon : <GitHubIcon/>,          link : "https://github.com/Petja314"} ,
        {icon :  <LinkedInIcon/>,       link : "https://www.linkedin.com/in/dmitrijs-petrovs/"} ,
        {icon : <EmailIcon/>,           link : "mailto:petja314@gmail.com"} ,
    ]



    return (
        <Container >
            <Box className={styles.greetingBox} >

                <div className={styles.animationBackground}>
                    <Background/>
                </div>



                <Box className={styles.contentSection}>
                    <Typography variant={"h4"} className={styles.greetingTitle}>I am Dmitrijs!</Typography>
                    <Box  className={styles.animationText}>React Front End Developer</Box>


                    <Box className={`${styles.profileMobileImg} ${styles.profileImageBox} `}>
                        <img src={me} alt="profile photo"/>
                    </Box>


                    <Box className={styles.greetingDescription}>
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                    </Box>

                    <Box className={styles.greetingResumeBox}>
                        <Button>
                            GET RESUME
                            <DownloadIcon className={styles.cvIcon}/>
                        </Button>
                        <Box className={styles.iconBtnSection}>
                            {
                                contactIconsBox.map((item, index) => (
                                    <IconButton className={styles.iconBtn} key={index}>
                                        <a href={item.link}>
                                            <span>{item.icon}</span>
                                        </a>
                                    </IconButton>
                                ))
                            }
                        </Box>
                    </Box>

                </Box>


                <Box className={`${styles.profileDesktopImg} ${styles.profileImageBox} `}>
                    <img src={me} alt="profile photo"/>
                </Box>
            </Box>

            {/*--------------------------------------------------------------------------------------------------------------------------------------------*/}

            <Box className={styles.greetingFooter}>
                {
                    greetingBottomInfo.map((item, index) => (
                        <Box key={index} className={styles.greetingBoxFooter}>
                            <Box className={styles.greetingFooterTitle}>{item.title}</Box>
                            <span>{item.description}</span>
                        </Box>
                    ))
                }
            </Box>
        </Container>


    );
};

export default Greeting;