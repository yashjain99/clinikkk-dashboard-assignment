import React from 'react';
import styles from "./UserInfo.module.css";
import {
    CircularProgress,
    Typography,
    Box,
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core";
import { Courses } from '../Courses/Courses';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#000000"
    }
}});

export function UserInfo() {
    return (
        <MuiThemeProvider theme = { theme } >
            <div>
                <div className = { styles.userData } >
                    <div>
                        <h1 className = { styles.username } >
                            Hello Josh!
                        </h1>
                        <div>
                            It's good to see you again.
                        </div>
                    </div>
                    <div>
                        <img className = { styles.profileImg } src = "/Images/profile.png" alt = "User Image"/>
                    </div>
                </div>
                <div className =  { styles.flexRow } >
                    <div className =  { styles.language } >
                        <div>
                            <img className =  { styles.flag } src = "https://media.istockphoto.com/vectors/spain-round-flag-vector-flat-icon-vector-id990992334?k=6&m=990992334&s=612x612&w=0&h=uZgrroaR73TYIzBEJYunoFu_BdUrzOnkJ5iAyn0KjRk=" alt = "Spain"/>
                        </div>
                        <div>
                            <div>
                                <strong>
                                    Spanish B2
                                </strong>
                            </div>
                            <div>
                                by Alejandro Velazquez
                            </div>
                        </div>
                        <div >
                            <Box position="relative" display="inline-flex">
                                <CircularProgress variant="determinate" value = {83} color="primary" />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography variant="caption">
                                        83%
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div>
                            <button className = { styles.continueButton } >
                                Continue
                            </button>
                        </div>
                    </div>
                    <div className = { styles.buttons } >
                        <div className = { styles.arrowButton } >
                            ←
                        </div>
                        <div className = { styles.arrowButton } >
                            →
                        </div>
                    </div>
                </div>
                <Courses />
            </div>
        </MuiThemeProvider>
    )
}
