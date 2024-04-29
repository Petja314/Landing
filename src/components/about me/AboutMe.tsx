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
        {number: "01", title: "React Architecture", description: "Architected and implemented React-based projects from scratch, ensuring a consistent user engagement level through the  implementation of interactive features and performance optimizations."},
        {number: "02", title: "Flexible Development", description: "Leveraged the usage of React.js and TypeScript concepts to implement generic components and functions to write reusable code that can operate on different data types, promoting flexibility and code reusability"},
        {number: "03", title: "Seamless UI Design", description: "Integrated and utilized pre-built React libraries or UI frameworks such as Material UI to expedite development and create consistent UI elements"},
        {number: "04", title: "REST API Integration", description: "Performed integrations with REST APIs to connect applications to different backend services, implementing error handling mechanisms to gracefully handle potential issues during API communication"},
    ]
    const [selectedInfo, setSelectedInfo] = useState<number>(0)


    return (
        <Box className={styles.aboutMeBox} id={'About'}>

            <Container className={styles.container}>
                <Typography variant={"h3"}>About Me</Typography>


                <Box className={styles.shortDescription}>
                    A solution-focused Junior Front-end Developer specializing in React.js.Innovative, determined, and committed to delivering solutions that perform under pressure.
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