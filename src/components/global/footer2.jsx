'use client';
import React from "react";
import {
    Box,
    Typography,
    TextField,
    Divider,
    Container,
    Grid,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Telegram } from "@mui/icons-material";
import img1 from "../../assets/images/fotter2/Png-03.png";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

function Footer2() {
    const footerData = {
        logo: img1,
        socialLinks: [
            { name: "Facebook", link: "https://facebook.com" },
            { name: "Twitter", link: "https://twitter.com" },
            { name: "Instagram", link: "https://instagram.com" },
            { name: "Telegram", link: "https://telegram.org" },
        ],
        contact: {
            title: "Get in Touch!",
            details: [
                "s-25/26 Satyam Plaza Raspaan Cross Road Nikol Ahemdabad,Gujarat",
                "Call us: +91 9016402670",
                "Email: beyondtech.official@gmail.com",
                "Mon–Sat: 8.00am–18.00pm / Holiday: Closed",
            ],
        },
        services: {
            title: "Our Services",
            links: [
                "Web Development",
                "SEO",
                "IT Consulting",
                "Conversion Optimization",
            ],
        },
        newsletter: {
            title: "Stay Updated!",
            placeholder: "Enter your email",
            description: "Sign up for updates and exclusive content.",
        },
        footerBottom: {
            left: "© 2024 Custom Company. All rights reserved.",
            links: ["Privacy Policy", "Terms of Use", "Support"],
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: "#1A1F26",
                color: "white",
                padding: "60px 0",
            }}
        >
            <Container maxWidth="xl">
                <Grid container alignItems="center" spacing={2}>
                    <Grid  item xs={12} md={4}>
                        <Box  sx={{ display: "flex", justifyContent: { xs: "center" , md: "left" }}}>
                        <Image
                            src={footerData.logo}
                            alt="Logo"
                            style={{
                                width: '75%',
                                height: '150px',
                                objectFit: 'cover'
                            }}
                        />
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                            }}
                        >
                            {footerData.socialLinks.map((social, index) => {
                                const Icon = {
                                    Facebook: Facebook,
                                    Twitter: Twitter,
                                    Instagram: Instagram,
                                    Telegram: Telegram,
                                }[social.name];
                                return Icon ? (
                                    <Icon
                                        key={index}
                                        sx={{ fontSize: 25, cursor: "pointer" }}
                                        onClick={() => window.open(social.link, "_blank")}
                                    />
                                ) : null;
                            })}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, backgroundColor: "gray" }} />

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ padding: "20px", backgroundColor: "#1A1F26", borderRadius: "8px" }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3, }}>
                                {footerData.contact.title}
                            </Typography>
                            {footerData.contact.details.map((detail, index) => (
                                <Typography key={index} variant="body2" sx={{ mb: 2 ,color:"#C4C4C4"}}>
                                    {detail}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ padding: "20px", backgroundColor: "#1A1F26", borderRadius: "8px" }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3,color:"#C4C4C4",marginLeft:"23px" }}>
                                {footerData.services.title}
                            </Typography>
                            {footerData.services.links.map((service, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        transition: "color 0.5s, transform 0.5s",
                                        color: "#C4C4C4",
                                        '&:hover': {
                                            color: "#fff",
                                            transform: "translateX(10px)",
                                        },
                                        '&:hover .icon': {
                                            opacity: "1",
                                            display:"flex"
                                        },
                                    }}
                                >
                                    <Box
                                        className={"icon"}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0 10px 0 0",
                                            opacity: "0",
                                            transition: "opacity 0.5s",
                                        }}
                                    >
                                        <EastIcon fontSize={"xx-large"} />
                                    </Box>
                                    {service}
                                </Typography>

                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5}>
                        <Box sx={{ padding: "20px", backgroundColor: "#1A1F26", borderRadius: "8px" }}>
                            <Typography variant="h6" sx={{ fontWeight: 500, mb: 3, }}>
                                {footerData.newsletter.title}
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
                                    placeholder={footerData.newsletter.placeholder}
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            color: "white",
                                            fontSize: "14px",
                                            backgroundColor: "transparent",
                                            paddingRight: "10px",
                                        },
                                    }}
                                    sx={{ flex: 1 }}
                                />
                                <Box
                                    sx={{
                                        width: "32px",
                                        height: "32px",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "white",
                                        fontSize: "18px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <EastIcon/>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box

                                >
                                    <Box
                                        sx={{
                                            mr: 1,
                                            fontWeight: "900",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CircleNotificationsIcon sx={{ fontSize: "30px" }} />
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{ color:"#C4C4C4" }}>
                                    Please sign up to follow the latest news and events from us, we
                                    promise not to spam your inbox.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, backgroundColor: "gray" }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography variant="body2" sx={{ fontSize: "12px" ,color:"#C4C4C4" }}>
                            {footerData.footerBottom.left}
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
                            {footerData.footerBottom.links.map((link, index) => (
                                <Typography key={index} variant="body2" sx={{ fontSize: "12px",color:"#C4C4C4" }}>
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer2;
