import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import bgImg from '../../assets/images/about/technologyFrim/modern-1.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import img1 from '../../assets/images/about/technologyFrim/mordern-2.jpg'
import img2 from '../../assets/images/about/technologyFrim/modern-3.jpg'
import Image from "next/image";
import bgImg2 from '../../assets/images/about/technologyFrim/modern-4.jpg'
import EastIcon from '@mui/icons-material/East';
import img3 from '../../assets/images/about/technologyFrim/modern-5.png'

function TechnologyFirm(props) {
    return (
        <>
            <Box
                sx={{
                    background: `url(${bgImg.src}) no-repeat center center`,
                    backgroundSize: "cover",
                    height: {xl: "1071px", md: "1080px", xs: "1200px"},
                    width: "100%",
                    padding: "148px 15px 300px",
                }}
            >

                <Container maxWidth={'xl'}>
                    <Box>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    position: "relative",
                                    height: '100%',
                                    width: '100%',
                                    display: {xs:'flex',md:'block'},
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 2,
                                    marginBottom: {xs: "50px", sm: "50px", md: '0'}
                                }}>
                                    <Box sx={{position: {md:'absolute'},borderRadius: '8px',overflow: 'hidden',left: {md:90},zIndex: 1,top: {md:20,lg: 'unset'},height: {xs: '90%',md:310, lg:410}}}>
                                        <Image src={img1} alt={img1} style={{width: '100%' ,height: '100%'}}/>
                                    </Box>
                                    <Box sx={{position: {md:'absolute'},borderRadius: '8px',overflow: 'hidden', bottom: {md:0},right: 0,top: {md:200,lg: 'unset'},height: {xs: '90%',md:310, lg:410}}}>
                                        <Image src={img2} alt={img2} style={{width: '100%' ,height: '100%'}}/>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    padding: {xl: "0 0 0 80px", xs: "20px", sm: "0"}
                                }}>
                                    <Box
                                        sx={{
                                            background: 'linear-gradient(90deg , #FBE0DF , #F1F5FF )',
                                            color: "#E64039",
                                            fontSize: "18px",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: '250px',
                                            height: "50px",
                                            borderRadius: '35px',
                                        }}
                                    >
                                        <Box className={"rotate-icon"}
                                             sx={{display: "flex", mr: "10px"}}><SettingsIcon/></Box> WE ARE COMPANY
                                    </Box>
                                    <Box sx={{
                                        color: "#242E45",
                                        padding: "30px 0",
                                        lineHeight: "34px"
                                    }}>
                                        <Typography variant="h3" component="h3" sx={{
                                            fontSize: {md: "50px", sm: "38px", xs: "40px"},
                                            fontWeight: "600"
                                        }}>
                                            Modern Idea Driven <br/> Technology
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: {xs: "15px", sm: "18px"},
                                            color: "mediumGray",
                                            lineHeight: "34px",
                                            paddingBottom: "30px"
                                        }}>
                                        We are Orritech, as a promising IT Company we are serving over a decade with
                                        our tremendous skill in the software development industry.
                                    </Box>
                                    <Grid container sx={{paddingBottom: "40px"}}>
                                        {['Market Research', 'Competitive Analysis', 'Investment Decision', "Reporting & Analysis"].map((item, index) => (
                                            <Grid item xs={12} sm={6}>
                                                <Box key={index + 1}
                                                     sx={{
                                                         padding: "10px 0",
                                                         display: "flex",
                                                         alignItems: "center"
                                                     }}>
                                                    <Box sx={{
                                                        marginRight: "10px",
                                                        color: "#4179D3"
                                                    }}><AddTaskIcon/></Box>{item}
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Box
                                        sx={{
                                            height: {xs: "50px", sm: "66px"},
                                            width: "245px",
                                            fontSize: "18px",
                                            fontWeight: "600",
                                            background: 'linear-gradient(90deg, #2C54B5, #704D88 ,#D54143)',
                                            color: "#fff",
                                            borderRadius: "50px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        Let's Work Together
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{
                        paddingTop: {xl: "250px", lg: "160px", md: "130px", sm: "20px", xs: "50px"}

                    }}>
                        <Box
                            sx={{
                                background: `url(${bgImg2.src}) no-repeat`,
                                height: {sm: "280px", lg: "285px", xs: "296px"},
                                maxWidth: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundSize: "cover",
                                borderRadius: "20px",
                                position: "relative"
                            }}>

                            <Grid
                                container
                                direction={{xs: "column", sm: "row"}}
                                justifyContent={{sm: "space-between", xs: "center"}}
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={7} md={5}>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        sx={{
                                            fontSize: {md: "42px", xs: "35px"},
                                            fontWeight: "600",
                                            color: "#fff",
                                            marginLeft: {lg: "80px", xs: "20px"},
                                            display: {sm: "flex", xs: "flex"},
                                            justifyContent: {sm: "left", xs: "center"},
                                        }}
                                    >
                                        Have a project in mind?
                                    </Typography>
                                    <Box
                                        sx={{
                                            fontSize: {md: "42px", xs: "35px"},
                                            color: "#fff",
                                            fontWeight: "500",
                                            marginLeft: {lg: "80px", xs: "20px"},
                                            display: {sm: "flex", xs: "flex"},
                                            justifyContent: {sm: "left", xs: "center"}
                                        }}
                                    >
                                        <i>Let's talk to us</i>
                                    </Box>
                                </Grid>

                                <Box
                                    sx={{
                                        display: {md: "flex", xs: "none"},
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "absolute",
                                        right: {xs: "10%", md: "35%"},
                                        bottom: {xs: "10%", md: "-15%"},
                                    }}
                                >
                                    <Image
                                        src={img3}
                                        alt={'#'}
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                        }}
                                    />
                                </Box>


                                <Grid item xs={12} sm={5} md={4}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: {xs: "20px", sm: "0px"},
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: {xs: "left", sm: "center"},
                                                p: {sm:"20px 35px", xs:"10px 30px"},
                                                backgroundColor: "#E64039",
                                                fontSize: "18px",
                                                color: "#fff",
                                                fontWeight: 600,
                                                borderRadius: "40px",
                                                textWrap: "nowrap",
                                            }}
                                        >
                                            <Typography sx={{fontWeight: "600", mr: 1}}>
                                                More About Us
                                            </Typography>
                                            <EastIcon/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default TechnologyFirm;