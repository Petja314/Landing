import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./header.module.css"


type MobileMenuPropsType = {
    headerNavigation : string[]
    sectionScrollHandler : (sectionId: any) => void
}
export default function MobileMenu ({headerNavigation , sectionScrollHandler}: MobileMenuPropsType) {
    const [open, setOpen] = React.useState<boolean>(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    }

    return (
        <div className={styles.mobileMenu}>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {/*{DrawerList}*/}
                <Box className={styles.mobileMenuDrawer} role="presentation" onClick={toggleDrawer(false)}>
                    {headerNavigation.map((text: any, index: any) => (
                        <Box
                            onClick={() => sectionScrollHandler(text)}
                            key={index}
                            sx={{fontWeight: "bold", color: "#fff", fontSize: "20px", display: "flex", justifyContent: "center", marginTop: "60px"}}
                        >
                            {text}
                        </Box>
                    ))}
                </Box>
            </Drawer>

            {
                open === false ? (
                    <MenuIcon onClick={toggleDrawer(true)}  className={styles.menuIcon}/>
                ) : (
                    <CloseIcon onClick={toggleDrawer(true)} className={styles.menuIcon}/>
                )
            }
        </div>
    );
}
