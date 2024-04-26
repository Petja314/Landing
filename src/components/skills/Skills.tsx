import React from 'react';
import "../../App.css"
import {Box, Container, Paper, Typography} from "@mui/material";
import js from "../../assets/images/skills icons/js.svg"
import CSS from "../../assets/images/skills icons/css.svg"
import HTML from "../../assets/images/skills icons/html.svg"
import ReactIcon from "../../assets/images/skills icons/react.svg"
import TypeScript from "../../assets/images/skills icons/typescript.svg"
import Redux from "../../assets/images/skills icons/redux.svg"
import MaterialUi from "../../assets/images/skills icons/material-ui-1.svg"
import API from "../../assets/images/skills icons/api.png"
import Marquee from 'react-fast-marquee';
import styles from "./skills.module.css"

type SkillsType = {
    title: string
    icon: string
}

const Skills = () => {
    const skills: SkillsType[] = [
        {title: "JavaScript", icon: js},
        {title: "CSS", icon: CSS},
        {title: "HTML", icon: HTML},
        {title: "React", icon: ReactIcon},
        {title: "TypeScript", icon: TypeScript},
        {title: "Redux", icon: Redux},
        {title: "MaterialUi", icon: MaterialUi},
        {title: "REST API", icon: API},
    ]

    return (
        <Box className={styles.skillsBox} id={'Skills'}>
            <Container>

                <Typography variant={"h3"}>My Skills</Typography>

                <Box className={styles.skillsDescription}>
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </Box>


                <Box className={styles.skillsBoxWrapper}>
                    {
                        skills.map((item, index) => (
                            <Box className={styles.skillsBox} key={index}>
                                <Paper className={styles.skillsPaperSection}>
                                    <img src={item.icon} alt="skills icons"/>
                                </Paper>

                                <Box className={styles.skillsTitle}>
                                    {item.title}
                                </Box>
                            </Box>
                        ))
                    }
                </Box>

            </Container>
        </Box>
    );
};

export default Skills;