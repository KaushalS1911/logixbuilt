import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
// import bgImg from '../../assets/images/about/Aboutcompany/about-1.png'
import bgImg2 from '../../assets/images/about/Aboutcompany/about-2.jpg'
import SettingsIcon from '@mui/icons-material/Settings';
import bgImg3 from '../../assets/images/about/Aboutcompany/about-3.webp'
import Image from "next/image";
import {underline} from "next/dist/lib/picocolors";

function Aboutcompany(props) {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        background: `url(${bgImg2.src}) no-repeat`,
                        height: "405px",
                        maxWidth : "100%"
                    }}
                >
                    <Box sx={{
                        // background: `url(${bgImg.src}) no-repeat`,
                        height: "405px",
                        width : "100%",
                        position : "relative"
                    }}>
                        <Box sx={{
                            fontWeight :"bold",
                            fontSize : {md: "60px" , sm : "50px" , xs : "30px"},
                            position : "absolute",
                            top : "160px",
                            left : "180px",
                            color : "white"
                        }}>
                            About Us
                        </Box>

                    </Box>
                </Box>
            </Box>

            <Container maxWidth={'xl'}>
                <Box>
                <Box sx={{
                    pt : "120px"
                }}>
                    <Grid container >
                        <Grid item xs={12} md={6}>
                            <Box className={"bgbox"} sx={{
                                fontSize : {md: "18px" , sm : "17px" , xs : "14px"}
                            }}>
                                 <Box className="rotate-icon" sx={{
                                     display : "flex" ,
                                     mr : "10px"}}>
                                     <SettingsIcon/>
                                 </Box>
                                ABOUT COMPANY
                            </Box>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontSize: { md: "38px", lg: "50px", xs: "38px" },
                                    letterSpacing: "-1px",
                                    fontWeight: "700",
                                    marginTop: "20px",
                                    lineHeight: "58px",
                                    marginBottom: "20px",
                                }}
                            >
                                Bringing <span className={"underline"}>innovation</span> <br /> & new ideas in IT
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                fontSize : {md: "15px"},
                                margin : "0 0 25px",
                                color : "cardTextGrey",
                                lineHeight : "174%",
                                letterSpacing : "0.5px"
                            }}>
                                Orritech offers full range of technology & training methods for data analysis,
                                business consultation, and strategic ways for business. Its an opportunity for new  ventures.
                                So Orritech offers full range of consultancy & training methods for data analysis,
                                business consultation, and strategic ways for business. Its an opportunity  for new ventures.
                            </Box>
                            <Box sx={{
                                fontSize : {md: "15px"},
                                color : "cardTextGrey",
                                lineHeight : "174%",
                                letterSpacing : "0.5px"
                            }}>
                                Orritech offers full range of technology & training methods for data analysis,
                                business consultation, and  strategic ways for business. Its an opportunity for
                                new  ventures.
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginTop: "30px",
                            pb: "120px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            style={{
                                maxHeight: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                            src={bgImg3}
                            alt="img"
                        />
                    </Box>
                </Box>
            </Container>
        </>



    );
}

export default Aboutcompany;