import React, {useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import "../../App.css"
import styles from "./aboutme.module.css"
import {Background} from "../particles/Background";

type AboutMeType = {
    number:string
    title:string
    description:string
}
const AboutMe = () => {
    const aboutMe : AboutMeType[] = [
        {number: "01", title: "Branding Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, eius exercitationem illo iste."},
        {number: "02", title: "Branding Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, eius exercitationem illo iste."},
        {number: "03", title: "Branding Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, eius exercitationem illo iste."},
        {number: "04", title: "Branding Design", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, eius exercitationem illo iste."},
    ]
    const [selectedInfo, setSelectedInfo] = useState<number>(0)


    return (
        <Box className={styles.aboutMeBox} id={'About'}>

            <Container className={styles.container}>
                <Typography variant={"h3"}>About Me</Typography>


                <Box className={styles.shortDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque deserunt doloribus est in.
                </Box>

                <Box>
                    {
                        aboutMe.map((item, index) => (
                            <Box
                                className={styles.aboutMeSection}
                                key={index}
                                onMouseEnter={() => setSelectedInfo(index)}
                                onMouseLeave={() => setSelectedInfo(0)}
                                sx={(index === selectedInfo) ? {backgroundImage: 'linear-gradient(to right, #8750f7 0%, #2a1454 100%)', color: '#fff', cursor: "pointer"} : {}}
                            >
                                <Box className={styles.title}>
                                    <Box component={'span'}>{item.number}</Box>
                                    {item.title}
                                </Box>

                                <Box className={styles.description}>{item.description}</Box>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default AboutMe;