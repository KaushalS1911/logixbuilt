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

function TechnologyFirm(props) {
    return (
        <Box
            sx={{
                background: `url(${bgImg.src}) no-repeat center center`,
                backgroundSize: "cover",
                height: {xl:'100vh' , md:'125vh', sm:"150vh" , xs:"150vh"},
                width:"100%",
                padding: "148px 15px 300px"
            }}
        >
            <Container maxWidth={'xl'}>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{display: "flex", position: "relative", marginBottom: {xs:"50px" ,sm:"50px" , md :'0' }}}>
                            <Box sx={{
                                position: "absolute",
                                top: {xl:"100px",lg:"220px",md:"250px" ,xs:"50px" , sm:"50px" },
                                left: {xl:'280px',lg:"250px",sm:"350px",md:"120px", xs:"220px"},
                                borderRadius: "8px 8px 8px 8px",
                                overflow: 'hidden',
                                height:{xl:"425px" , sm:"280px" ,xs :"200px"},
                                maxWidth:{xl:"372px" ,sm:"280px" , xs:"200px"},
                                OObjectFit: "contain"
                            }}>
                                <Image src={img2} alt={"#"}></Image>
                            </Box>
                            <Box sx={{
                                borderRadius: "8px 8px 8px 8px",
                                overflow: 'hidden',
                                height:{xl:"425px" , sm:"280px" ,xs :"200px"},
                                maxWidth:{xl:"372px" , sm:"280px",xs:"200px"},
                                OObjectFit: "contain"
                            }}>
                                <Image src={img1} alt={"#"}></Image>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                padding: {xl:"0 0 0 80px", xs:"20px" , sm:"0"}
                            }}>
                                <Box
                                    sx={{
                                        background:'linear-gradient(90deg , #FBE0DF , #F1F5FF )',
                                        color:"#E64039",
                                        fontSize:"18px" ,
                                        fontWeight:"500" ,
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        width:'250px',
                                        height:"50px",
                                        borderRadius:'35px',
                                    }}
                                >
                                    <Box className={"rotate-icon"} sx={{display:"flex", mr:"10px" }}><SettingsIcon/></Box> WE ARE COMPANY
                                </Box>
                                <Box sx={{
                                    color: "#242E45",
                                    padding: "30px 0",
                                    lineHeight: "34px"
                                }}>
                                    <Typography variant="h3" component="h3" sx={{fontSize:{ md: "38px", lg: "50px", xs: "38px" },fontWeight: "700"}}>
                                        Modern Idea Driven <br/> Technology
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: {xs:"15px" , sm:"18px"},
                                        color: "mediumGray",
                                        lineHeight: "34px",
                                        paddingBottom: "30px"
                                    }}>
                                    We are Orritech, as a promising IT Company we are serving over a decade with
                                    our tremendous skill in  the software development industry.
                                </Box>
                                <Grid container sx={{paddingBottom: "40px"}}>
                                    {['Market Research', 'Competitive Analysis', 'Investment Decision', "Reporting & Analysis"].map((item, index) => (
                                        <Grid item xs={12} sm={6}>
                                            <Box
                                                sx={{
                                                    padding:"10px 0",
                                                    display:"flex",
                                                    alignItems:"center"
                                            }}>
                                                <Box sx={{marginRight:"10px" , color:"#4179D3"}}><AddTaskIcon/></Box>{item}
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Box
                                    sx={{
                                        height: {xs:"50px" , sm:"66px"},
                                        width: "245px",
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        background: 'linear-gradient(90deg, #2C54B5, #704D88 ,#D54143)',
                                        color:"#fff",
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
                    paddingTop:{sm:"130px" , xs:"50px" , lg:"180px" , xl : "120px" , md:"180px"}
                }}>
                <Box
                sx={{
                    background : `url(${bgImg2.src}) no-repeat`,
                    height:{sm:"280px", lg:"285px",xs:"296px"},
                    maxWidth:"100%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundSize:"cover",
                    borderRadius:"20px"
                }}>

                        <Grid container>
                            <Grid item xs={12} md={9}>
                                <Typography variant="h3" component="h3"
                                            sx={{
                                                fontSize:{md:"42px" ,xs:"35px"},
                                                fontWeight: "700",
                                                color:"#fff",
                                                marginLeft:{lg:"80px", xs:"20px"},
                                                display:{md:"",sm:"flex"},
                                                justifyContent:{md:"left",sm:"center"}
                                            }}>
                                    Have a project in mind?
                                </Typography>
                                <Box sx={{fontSize:{md:"42px" ,xs:"35px"},
                                    color:"#fff",
                                    fontWeight: "500",
                                    marginLeft:{lg:"80px", xs:"20px"},
                                    display:{md:"",sm:"flex"},
                                    justifyContent:{md:"left",sm:"center"}
                                }}>
                                    <i>Let's talk to us</i>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Box sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    paddingTop:{xs:"20px" ,sm:"20px"},
                                }}>
                                       <Box sx={{display:'flex' , alignItems:"center", justifyContent:{xs:"left" , sm:"center"} ,p: '20px 35px', backgroundColor:"#E64039",
                                           fontSize:"18px",
                                           color:"#fff",
                                           fontWeight: 600,
                                           borderRadius:"40px",
                                           textWrap:"nowrap"
                                       }}>
                                           <Typography sx={{fontWeight:"600" ,mr :1}}>
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
    );
}

export default TechnologyFirm;