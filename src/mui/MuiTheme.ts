import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    typography: {
        fontFamily: "Sora, sans-serif",
        // h5: {
        //     fontFamily: "Russo One, sans-serif",
        // },
        h3: {
            fontWeight: "bold !important",
            background: "linear-gradient(to right, #8750f7 0%, #fff 100%)",
            "-webkit-text-fill-color": "transparent",
            "-webkit-background-clip": "text",
            textAlign: "center",
        },
    },
    palette: {
        background: {
            default: "#0f0715"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: '#fff',
                    // letterSpacing: "-0.5px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    textTransform: "capitalize",
                    backgroundSize: "200%",
                    backgroundImage: 'linear-gradient(to right, #8750f7 0%, #2a1454 51%, #8750f7 100%)',
                    border: "none",
                    borderRadius: "50px",
                    padding: "10px 35px",
                    transition: '0.4s',
                    '-webkit-transition': '0.4s',
                    '&:hover': {
                        backgroundPosition: "-100%"
                    },
                },
            },
        },
    },

});