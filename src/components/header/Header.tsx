import React from 'react';
import {Box, Button, Container} from "@mui/material";
import logo2 from "../../assets/images/logo/logo2.png"
import "../../App.css"
import styles from "./header.module.css"
import MobileMenu from "./MobileMenu";
import {Link} from "react-router-dom";

export const Header = () => {
    const headerNavigation: string[] = ["About", "Skills", "Projects", "Education", "Contact"]

    const sectionScrollHandler = (sectionId: any) => {
        console.log('sectionId', sectionId)
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <Container>
            {/*DESKTOP*/}
            <Box className={styles.headerContainer}>
                <Box className={styles.logoSection}>
                    <img src={logo2} alt="logo"/>
                    <a href="mailto:petja314@gmail.com">petja314@gmail.com</a>
                </Box>

                <Box className={styles.headerContentBox}>
                    <Box className={styles.headerNavigation}>
                        {
                            headerNavigation.map((item, index) => (
                                <div className={styles.headerMenu} key={index}
                                     onClick={() => sectionScrollHandler(item)}
                                >
                                    <a href="#"> {item}</a>
                                </div>
                            ))
                        }
                    </Box>


                    <Button>Hire Me!</Button>

                    {/*MOBILE*/}
                    <MobileMenu headerNavigation={headerNavigation} sectionScrollHandler={sectionScrollHandler}/>
                </Box>
            </Box>

        </Container>
    );
};




