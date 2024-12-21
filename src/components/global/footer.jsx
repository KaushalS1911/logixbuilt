import {Box, Button, Grid, Typography, useTheme} from "@mui/material";
import img1 from "../../assets/images/footer/left-1.png";
import img2 from "../../assets/images/logo/logo-white.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import background from "../../assets/images/footer/footer-3.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <>
            <Box sx={{mt: "50px"}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: {sm:"40px 130px",xs: '40px 0'},
                                background: `linear-gradient(90deg, #F61B10aa, #EF0963aa) , url(${img1.src})center/cover`,
                                height: {md: "540px", sm: "327px" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: {xs: "center", sm: "unset", md: "center"},
                                color: "white",
                                position: "relative",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: {sm:"15%",xs: "100%"},
                                    right:{sm : -40 , xs: 10,md: -50,xl:-5},
                                    width: {sm: "350px", xs: "230px",md: '300px', xl:"350px"},
                                    height: {sm: "350px", xs: "230px",md: '300px',xl:"350px"},
                                    zIndex: "0",
                                    backgroundImage: `url(${img2.src})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                },
                            }}
                        >
                            <Box sx={{zIndex: "50"}}>
                                <Typography sx={{fontSize: "16px", letterSpacing: "4px"}}>
                                    READY TO DO THIS
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: {sm: "50px", xs: "30px",md: "60px"},
                                        lineHeight: {sm: "90px", xs: "60px"},
                                        maxWidth:{sm:400}
                                    }}
                                >
                                    Let's get to work
                                </Typography>
                                {/*<NavLink style={{ color: "unset" }} to={"/contact"}>*/}
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "white ",
                                        border: "2px solid white ",
                                        fontSize: "17px",
                                        letterSpacing: "2px",
                                        textWrap: 'nowrap',
                                        ml: "0 ",
                                        p: {
                                            md: "15px 40px ",
                                            sm: "10px 30px ",
                                        },
                                        mt: {md: "40px", xs: "20px" },
                                        cursor: "pointer",
                                        "&:hover": {
                                            backgroundColor: "white ",
                                            color: `crimson`,
                                            border: "2px solid white ",
                                        },
                                    }}
                                >
                                    CONTACT US
                                </Button>
                                {/*</NavLink>*/}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "end",
                            }}
                        >
                            <Box
                                sx={{
                                    height: {md: "454px"},
                                    background: `linear-gradient(rgba(8, 8, 8, 0.6), rgba(8, 8, 8, 0.6)), url(${background.src})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100%",
                                    py: {md: "0px", xs: "40px"},
                                }}
                            >
                                <Grid
                                    container
                                    sx={{color: 'textGray', height: "100%"}}
                                >
                                    <Grid item sm={6} xs={12}>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: {sm: "center"},
                                                px: {xs: "30px"},
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: "500",
                                                        mb: {sm: "30px", xs: "25px"},
                                                    }}
                                                >
                                                    Company
                                                </Typography>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    Home
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    About
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    Portfolio
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    Service
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    Contact Us
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: {sm: "center"},
                                                px: {xs: "30px"},
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Box>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: "500",
                                                        mb: {sm: "30px", xs: "25px"},
                                                        mt: {sm: "0", xs: "30px"},
                                                    }}
                                                >
                                                    Address
                                                </Typography>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        display: 'flex',
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    <LocationOnIcon fontSize={'14px'}/>
                                                    <Typography sx={{ml: 1}}>
                                                        S-25/26 Satyam Plaza Raspaan Cross Road Nikol Ahmedabad,Gujarat
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        display: 'flex',
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    <EmailIcon fontSize={'14px'}/>
                                                    <Typography sx={{ml: 1}}>
                                                        beyondtech.official@gmail.com
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    variant="li"
                                                    sx={{
                                                        fontSize: "17px",
                                                        mb: "10px",
                                                        display: 'flex',
                                                        transition: ".5s",
                                                        "&:hover": {color: 'crimson'},
                                                    }}
                                                >
                                                    <LocalPhoneIcon fontSize={'14px'}/>
                                                    <Typography sx={{ml: 1}}>
                                                        +91 9016402670
                                                    </Typography>
                                                </Box>
                                                <Box variant="li" sx={{fontSize: "17px", mt: 3}}>
                                                    <FacebookIcon
                                                        sx={{
                                                            marginRight: "10px",
                                                            fontSize: "30px",
                                                            transition: ".3s",
                                                            "&:hover": {
                                                                transform: "translateY(-4px)",
                                                                color: "white",
                                                            },
                                                        }}
                                                    />{" "}
                                                    <LinkedInIcon
                                                        sx={{
                                                            marginRight: "10px",
                                                            fontSize: "30px",
                                                            transition: ".3s",
                                                            "&:hover": {
                                                                transform: "translateY(-4px)",
                                                                color: "white",
                                                            },
                                                        }}
                                                    />{" "}
                                                    <InstagramIcon
                                                        sx={{
                                                            marginRight: "10px",
                                                            fontSize: "30px",
                                                            transition: ".3s",
                                                            "&:hover": {
                                                                transform: "translateY(-4px)",
                                                                color: "white",
                                                            },
                                                        }}
                                                    />{" "}
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "30px",
                                                            transition: ".3s",
                                                            "&:hover": {
                                                                transform: "translateY(-4px)",
                                                                color: "white",
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        sx={{
                                            width: "100%",
                                            px: "20px",
                                            alignSelf: "center",
                                            mt: "30px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                alignSelf: {xs: "center"},
                                                textAlign: {sm: "center"},
                                            }}
                                        >
                                            Copyright © 2022 Rainbow-Themes. All Rights Reserved.
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;
