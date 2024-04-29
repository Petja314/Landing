import React from 'react';
import {Box, Button, Container, IconButton, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import me from "../../assets/images/greeting/me.png"
import "../../App.css"
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
                        I excel at dissecting intricate user experience challenges, leveraging React to architect solutions that seamlessly integrate design and functionality.
                    </Box>

                    <Box className={styles.greetingResumeBox}>
                        <Button onClick={() => window.location.href = 'https://drive.google.com/file/d/1E0F5rGaDlsjcjWcP3On-2cgM2hKumjpy/view'} >
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

        </Container>


    );
};

export default Greeting;