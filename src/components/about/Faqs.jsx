import React from 'react';
import Image from "next/image";
import {Accordion, AccordionDetails, AccordionGroup , AccordionSummary, Box, Container, Grid} from "@mui/material";
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import Img from '../../assets/images/about/img-faq1.png';

import SettingsIcon from "@mui/icons-material/Settings";




function Faqs(props) {
    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Grid container>
                    <Grid item lg={4}>
                   <Box sx={{padding:"15px"}}>
                       <Box
                           sx={{
                               background:'linear-gradient(90deg , #FBE0DF , #F1F5FF )',
                               color:"#E64039",
                               fontSize:"15px" ,
                               fontWeight:"600" ,
                               display:"flex",
                               alignItems:"center",
                               justifyContent:"center",
                               width:'310px',
                               height:"50px",
                               borderRadius:'35px',
                               marginBottom:"25px"
                           }}
                       >
                           <span><Box className={"rotate-icon"} sx={{display:"flex",marginRight:"10px" }}><SettingsIcon/></Box></span>FREQUENTLY ASKED QUESTIONS
                       </Box>
                       <Box sx={{
                           fontSize:"42px",
                           fontWeight:"700",
                           lineHeight:"45px",
                           marginBottom:"0px",
                           display:"flex",
                           justifyContent:"center",
                           textAlign:"start",
                       }}>
                           Have any Question to our team?
                       </Box>
                       <Box sx={{
                           display:"flex",
                           paddingTop:"45px",
                           fontSize:"17px",
                           fontWeight:"600",
                           lineHeight:"162.5%",
                           letterSpacing:"0.5px",
                           alignItems:"center",
                           color:"#242E45"
                       }}>
                           Ask Questions Here <span> <Box sx={{
                               display:'flex',
                                alignItems:"center",
                                padding : "10px"
                       }}><EastTwoToneIcon/></Box> </span>
                       </Box>
                   </Box>
                    </Grid>
                    <Grid item lg={3}>
                        <Box sx={{padding:"15px"}}>
                            <Image src={Img} alt={"#"} ></Image>
                        </Box>
                    </Grid>
                    <Grid item lg={5}>
                        <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
                            <AccordionGroup
                                sx={{
                                    maxWidth: 400,
                                    [`& .${accordionSummaryClasses.indicator}`]: {
                                        transition: '0.2s',
                                    },
                                    [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                                        transform: 'rotate(45deg)',
                                    },
                                }}
                            >
                                <Accordion>
                                    <AccordionSummary indicator={<AddIcon />}>First accordion</AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary indicator={<AddIcon />}>Second accordion</AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary indicator={<AddIcon />}>Third accordion</AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Faqs;