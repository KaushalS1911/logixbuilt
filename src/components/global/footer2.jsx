import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Divider,
    Container,
    Grid,
} from "@mui/material";
import Img from "../../assets/images/fotter2/f-1.webp"
import { Facebook, Twitter, Instagram, Telegram } from "@mui/icons-material";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Image from "next/image";
import img1 from "../../assets/images/fotter2/f-1.webp";

function Footer2() {
    return (
        <Box
            sx={{
                backgroundColor: "#0D1117",
                color: "white",
                padding: "60px 0",
            }}
        >
            <Container maxWidth="xl">

                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Image
                                src={img1}
                                alt={img1}
                                style={{
                                    width: '170px',
                                    height: '90px',
                                    objectFit: 'contain',
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 3,
                                }}
                            >
                                <Facebook sx={{ fontSize: 20, cursor: "pointer" }} />
                                <Twitter sx={{ fontSize: 20, cursor: "pointer" }} />
                                <Instagram sx={{ fontSize: 20, cursor: "pointer" }} />
                                <Telegram sx={{ fontSize: 20, cursor: "pointer" }} />
                            </Box>
                        </Grid>


                </Grid>
                <Divider sx={{ my: 4, backgroundColor: "gray" }} />

                <Divider sx={{ backgroundColor: "#333", marginBottom: "40px" }} />

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box
                            sx={{
                                padding: "20px",
                                backgroundColor: "#1A1F26",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                                Contact With Us!
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                2220 Plymouth Rd #302
                                <br />
                                Hopkins, Minnesota(MN), 55305
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Call us: (234) 109-6666
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Mail: Herringtonconsulting@gmail.com
                            </Typography>
                            <Typography variant="body2">
                                Mon–Sat: 8.00am–18.00pm / Holiday: Closed
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                padding: "20px",
                                backgroundColor: "#1A1F26",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                                Services Quick Links
                            </Typography>
                            {[
                                "Online Business Consulting",
                                "Portfolio Management",
                                "Search Engine Optimization",
                                "Managed IT Services",
                                "Conversion Optimization",
                            ].map((service, index) => (
                                <Typography
                                    variant="body2"
                                    key={index}
                                    sx={{ mb: 2 }}
                                >
                                    {service}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5}>
                        <Box
                            sx={{
                                padding: "20px",
                                backgroundColor: "#1A1F26",
                                borderRadius: "8px",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                                Subscribe Newsletter
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#353E47",
                                    borderRadius: "0px",
                                    padding: "10px",
                                    mb: 2,
                                }}
                            >
                                <TextField
                                    placeholder="Don't miss the latest news from us..."
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <Box
                                                sx={{
                                                    color: "white",
                                                    fontSize: "18px",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >

                                            </Box>
                                        ),
                                        style: {
                                            color: "white",
                                            fontSize: "14px",
                                            backgroundColor: "transparent",
                                            paddingRight: "10px",
                                        },
                                    }}
                                    sx={{
                                        flex: 1,
                                    }}
                                />
                                <Box
                                    sx={{
                                        width: "32px",
                                        height: "32px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: "8px",
                                        color: "white",
                                        fontSize: "18px",
                                        cursor: "pointer",
                                    }}
                                >
                                    ➔
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box

                                >
                                    <Box
                                        sx={{
                                            paddingRight: "10px",
                                            fontWeight: "900",
                                            fontSize: "40px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CircleNotificationsIcon sx={{ fontSize: "30px" }} />
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{ color: "white" }}>
                                    Please sign up to follow the latest news and events from us, we
                                    promise not to spam your inbox.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom */}
                <Divider sx={{ my: 4, backgroundColor: "gray" }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography variant="body2" sx={{ fontSize: "12px" }}>
                            Copyright © 2024 Graviton by BravisThemes. All Rights Reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "20px",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}
                        >
                            <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                Confidentiality & Privacy
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                Legal Information
                            </Typography>
                            <Typography variant="body2" sx={{ fontSize: "12px" }}>
                                Return and Refund Policy
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer2;