import React from 'react';
import {Box, Container} from "@mui/material";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <Box className={styles.footerBox}>
            <Container>
                <Box className={styles.footerDesc}>© Developer Portfolio by <span>Dmitrijs Petrovs</span></Box>
            </Container>

        </Box>
    );
};

export default Footer;