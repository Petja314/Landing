import React from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import "../../App.css"
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import styles from "./education.module.css"



type EducationType = {
    year: string
    title: string
    description: string
}
type ExperienceType = {
    year: string
    title: string
    description: string
}
const Education = () => {
    const education : EducationType[] = [
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
    ]
    const experience : ExperienceType[] = [
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
        {year: "2020 - 2023", title: "PROGRAMMING COURSE", description: "Harverd University"},
    ]


    return (
        <Box className={styles.educationBox} id={'Education'}>
            <Container>
                <Box className={styles.educationWrapper}>
                    <Box className={styles.educationColumn}>
                        <Typography variant={"h3"}>
                            <SchoolIcon className={styles.educationIcon}/>Education
                        </Typography>
                        <Box className={styles.educationSection}>
                            {
                                education.map((item , index) => (
                                    <Paper  key={index} className={styles.educationPaper}>
                                        <Box className={styles.educationYear}>{item.year}</Box>
                                        <Box component={'span'}>{item.title}</Box>
                                        <Box>{item.description}</Box>
                                    </Paper>
                                ))
                            }
                        </Box>
                    </Box>

                    <Box className={styles.educationColumn}>
                        <Typography variant={"h3"}>
                            <EngineeringIcon className={styles.educationIcon}/>Experience
                        </Typography>
                        <Box className={styles.educationSection}>
                            {
                                experience.map((item,index) => (
                                    <Paper key={index} className={styles.educationPaper}>
                                        <Box className={styles.educationYear}>{item.year}</Box>
                                        <Box component={'span'}>{item.title}</Box>
                                        <Box>{item.description}</Box>
                                    </Paper>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Education;