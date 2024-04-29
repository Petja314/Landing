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

const Education = () => {
    const education : EducationType[] = [
        {year: "2012 - 2016", title: "COMPUTER SCIENCE", description: "Rēzekne Technical College, Latvia"},
        {year: "2022 - 2022", title: "JS HTML CSS COURSE", description: "iTGid's Front-End courses, covering JS, HTML5, CSS3."},
        {year: "2022 - 2024", title: "FRONT END COURSE", description: " IT-Incubator's Front End Courses, React.js, Redux, TypeScript, JS."},
    ]



    return (
        <Box className={styles.educationBox} id={'Education'}>
            <Container>
                {/*<Box className={styles.educationWrapper}>*/}
                    <Box className={styles.educationColumn}>
                        <Typography variant={"h3"}>
                            <SchoolIcon className={styles.educationIcon}/>Education
                        </Typography>
                        <Box className={styles.educationSection}>
                            {
                                education.map((item , index) => (
                                    <Paper  key={index} className={styles.educationPaper} sx={{height : "150px"}} >
                                        <Box className={styles.educationYear}>{item.year}</Box>
                                        <Box component={'span'}>{item.title}</Box>
                                        <Box>{item.description}</Box>
                                    </Paper>
                                ))
                            }
                        </Box>
                    </Box>

            </Container>
        </Box>
    );
};

export default Education;