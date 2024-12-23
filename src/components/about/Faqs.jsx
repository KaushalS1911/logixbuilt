"use client"; // Add this directive at the top of the file

import React, { useState } from 'react';
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import Img from '../../assets/images/about/img-faq1.png';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from "@mui/icons-material/Settings";

function Faqs() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Grid container spacing={2}>
                    {/* First Grid */}
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={6}
                        xs={12}
                    >
                        <Box sx={{ padding: "15px" }}>
                            <Box
                                sx={{
                                    background: 'linear-gradient(90deg , #FBE0DF , #F1F5FF )',
                                    color: "#E64039",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: '310px',
                                    height: "50px",
                                    borderRadius: '35px',
                                    marginBottom: "25px"
                                }}
                            >
                                <span>
                                    <Box className={"rotate-icon"} sx={{ display: "flex", marginRight: "10px" }}>
                                        <SettingsIcon />
                                    </Box>
                                </span>
                                FREQUENTLY ASKED QUESTIONS
                            </Box>
                            <Box
                                sx={{
                                    fontSize: { xs: "38px", xl: "50px" },
                                    fontWeight: "700",
                                    lineHeight: "45px",
                                    marginBottom: "0px",
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "start",
                                }}
                            >
                                Have any Question to our team?
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    paddingTop: "45px",
                                    fontSize: "17px",
                                    fontWeight: "600",
                                    lineHeight: "162.5%",
                                    letterSpacing: "0.5px",
                                    alignItems: "center",
                                    color: "#242E45"
                                }}
                            >
                                Ask Questions Here{" "}
                                <span>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: "center",
                                        padding: "10px"
                                    }}>
                                        <EastTwoToneIcon />
                                    </Box>
                                </span>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid
                        item
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                    >
                        <Box
                            sx={{
                                padding: "15px",
                                display: "flex",
                                justifyContent: { xs: "center", lg: "flex-start" }, // Center on mobile, align left on larger screens
                                alignItems: "center",
                            }}
                        >
                            <Image src={Img} alt={"#"} />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={5}
                        md={4}
                        sm={12}
                        xs={12}
                    >
                        <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
                            <Accordion
                                sx={{
                                    marginBottom: '20px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: 'none',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #D3D3D3',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        '&.Mui-expanded': { color: 'red', fontWeight: '700' },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "600" }}>
                                        What papers are needed for software development?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#FFFFFF', color: '#6E6E6E' }}>
                                    <Typography>
                                        Orritech offers a full range of consultancy & training methods for data analysis, business consultation, and strategic way.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* Accordion 2 */}
                            <Accordion
                                expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                sx={{
                                    marginBottom: '20px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: 'none',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #D3D3D3',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        '&.Mui-expanded': { fontWeight: '700', color: 'red' },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "600" }}>
                                        How is EFT used for your premium payment method?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#fff', color: '#6E6E6E' }}>
                                    <Typography>
                                        Orritech offers a full range of consultancy & training methods for data analysis, business consultation, and strategic way.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* Accordion 3 */}
                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={handleChange('panel3')}
                                sx={{
                                    marginBottom: '20px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: 'none',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #D3D3D3',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        '&.Mui-expanded': { fontWeight: '700', color: 'red' },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "600" }}>
                                        What is the budget limit for a new project?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#fff', color: '#6E6E6E' }}>
                                    <Typography>
                                        Orritech offers a full range of consultancy & training methods for data analysis, business consultation, and strategic way.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* Accordion 4 */}
                            <Accordion
                                expanded={expanded === 'panel4'}
                                onChange={handleChange('panel4')}
                                sx={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: 'none',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4-content"
                                    id="panel4-header"
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #D3D3D3',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        '&.Mui-expanded': { fontWeight: '700', color: 'red' },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "600" }}>
                                        How to contact the development team?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ backgroundColor: '#fff', color: '#6E6E6E' }}>
                                    <Typography>
                                        Orritech offers a full range of consultancy & training methods for data analysis, business consultation, and strategic way.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Faqs;