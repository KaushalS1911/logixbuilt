import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import CloudQueueTwoToneIcon from '@mui/icons-material/CloudQueueTwoTone';

const Feature = () => {

    const Details = [
        {
            icon: <DashboardCustomizeTwoToneIcon/>,
            title: "Custom Featuring",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber"
        },
        {
            icon: <SecurityTwoToneIcon/>,
            title: "Cyber Security",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber"
        },
        {
            icon: <DashboardCustomizeTwoToneIcon/>,
            title: "Database Management",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber",
        },
        {
            icon: <PublicTwoToneIcon/>,
            title: "Global Reach",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber",
        },
        {
            icon: <InsertChartOutlinedTwoToneIcon/>,
            title: "Server Management",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber"
        },
        {
            icon: <CloudQueueTwoToneIcon/>,
            title: "Cloud Computing",
            description: "Ensuring security of your web data of your company website, so we help to ensure cyber"
        },
    ]

    return (
        <>
            <Box>
                <Container>


                    <Box sx={{padding:"120px 0px"}}>
                       <Box sx={{
                           display:"flex",
                           justifyContent:"center",
                            paddingTop:{xs:"60px" , sm:"0px"}
                       }}>

                           <Typography sx={{
                               background:'linear-gradient(90deg , #FBE0DF , #fff,#FBE0DF)',
                               color:"#E64039",
                               fontSize:"16px" ,
                               fontWeight:"500" ,
                               display:"flex",
                               alignItems:"center",
                               justifyContent:"center",
                               width:'250px',
                               height:"50px",
                               borderRadius:'35px',
                               marginBottom:"25px"
                           }}>EXPLORE OUR FEATURE</Typography>
                       </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: '100%',
                            fontSize:{md:"38px" , xl:"50px"},
                            fontWeight: "700",
                            lineHeight: {xs:"20px",sm:"35px" , md:"50px"},
                            letterSpacing:-1,
                            textAlign: "center",
                            color:"#242E45"

                        }}>
                            We are continuously improving <br/> our skills in technology
                        </Box>
                        <Box sx={{
                            justifyContent: "space-between",
                            display: "flex",
                            padding:"20px",

                        }}>
                            <Grid container>
                                {Details.map((item, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >

                                        <Box sx={{
                                            paddingTop: "50px",
                                            display: {lg:"flex"},
                                            textAlign:{xs:"center" , lg:'start'},

                                            "&:hover .rotate": {

                                                transform: 'rotateY(360deg)',
                                            },
                                            "&:hover .rotatparant": {

                                                backgroundColor: "#FEEAEE",
                                                // border: "2px solid #FEEAEE",
                                            },

                                        }}>
                                            <Box className={"rotatparant"}
                                                sx={{
                                                    ' svg': { fontSize: '40px' },
                                                    backgroundColor: "#F6F6FD",
                                                    height: "90px",
                                                    padding:3,
                                                    // marginLeft:"50px",
                                                    borderRadius: "50%",
                                                    display: "inline-block",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    transition: "0.5s",

                                                }}
                                            >
                                                <Box
                                                    className="rotate"
                                                    sx={{
                                                        transition: "transform 1s",

                                                    }}
                                                >
                                                    {item.icon}
                                                </Box>

                                            </Box>

                                            <Box sx={{
                                                margin: "0 25px",
                                                // paddingTop:"40px"
                                            }}>
                                                <Box sx={{
                                                    paddingBottom: "20px",
                                                    fontWeight:"700",
                                                    fontSize:"16px",
                                                    paddingTop:{xs:"15px" , lg:"0px"}
                                                }}>
                                                    {item.title}
                                                </Box>
                                                <Box sx={{
                                                    color:"mediumGray",
                                                    fontSize:"15px",
                                                    paddingBottom:"60px",
                                                    lineHeight:"28px"
                                                }}>
                                                    {item.description}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Feature;