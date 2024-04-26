import React, {useRef, useState} from 'react';
import {Box, Button, Container, IconButton, Paper, TextField, Typography} from "@mui/material";
import "../../App.css"
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "./contact.module.css"
import emailjs from '@emailjs/browser';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type ContactsType = {
    icon: any
    title: string
    description: string
    link: string
}

const contactIcons: ContactsType[] = [
    {icon: <GitHubIcon/>, title: "Github", description: "@Petja314", link: "https://github.com/Petja314"},
    {icon: <LinkedInIcon/>, title: "LinkedIn", description: "@dmitrijs-petrovs", link: "https://www.linkedin.com/in/dmitrijs-petrovs/"},
    {icon: <EmailIcon/>, title: "Email", description: "petja314@gmail.com", link: "mailto:petja314@gmail.com"},
    {icon: <WhatsAppIcon/>, title: "Phone", description: "+44 7834898962", link: "tel:+447834898962"},
]


export const ContactMe = () => {
    return (
        <Box className={styles.contactBox} id={'Contact'}>
            <Container>
                <Typography variant={"h3"}>Contant Me</Typography>

                <Box className={styles.contactWrapper}>


                    <Paper className={styles.contactFormPaper}>
                        <Typography variant={"h4"} className={styles.contactMeTitleForm}>Get in touch with me!</Typography>

                        <Box className={styles.formDescription}>
                            If you have any questions or concerns, please don't hesitate to contact me.
                            I am open to any work opportunities that align with my skills and interests.
                        </Box>
                        <ContactUs/>
                    </Paper>


                    <Box className={styles.contactIconsBox}>
                        {
                            contactIcons.map((item, index) => (
                                <Box key={index} className={styles.contactIconsSection}>
                                    <IconButton className={styles.iconBtn}>
                                        {item.icon}
                                    </IconButton>

                                    <Box>
                                        <a href={item.link}>
                                            <Box className={styles.contactIconTitle}>{item.title}</Box>
                                            <Box>{item.description}</Box>
                                        </a>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>




            </Container>
        </Box>
    );
};

export const ContactUs = () => {
    const [name, setName] = useState<string>('')
    const [emailText, setEmailText] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const form: any = useRef();
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_nsk8ck1', 'template_iuocgaj', form.current, {
            publicKey: 'xKrkvxfqAEWM5h4dd',
        })
            .then(
                () => {
                    setName('')
                    setEmailText('')
                    setMessage('')
                    console.log('SUCCESS!');
                },
                (error: any) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <label>Name</label>
            <input
                onChange={(event: any) => (setName(event.currentTarget.value))}
                value={name}
                type="text"
                name="user_name"
            />
            <label>Email</label>
            <input
                onChange={(event: any) => (setEmailText(event.currentTarget.value))}
                value={emailText}
                type="text"
                name="user_email"
            />
            <label>Message</label>
            <textarea
                onChange={(event: any) => (setMessage(event.currentTarget.value))}
                value={message}
                name="message"
            />
            <input className={styles.formBtn} type="submit" value="Send Message"/>
        </form>
    );
};