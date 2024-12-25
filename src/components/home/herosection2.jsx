'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../../assets/images/home/herosection2/her-2.webp';
import img2 from '../../assets/images/home/herosection2/hero-1.webp';
import Image from "next/image";
import { Box, Grid, Typography, Button } from "@mui/material";
const slides = [
    {
        title: "Excellence in Software Engineering.",
        description:
            "Achieve the right growth curve with the virtuous Technology Partner. " +
            "Utilizing the foremost technology accompanied by a great team will power " +
            "you to be world-class digital experiences and identity.",
        button: "Schedule A Free Consultation",
        image: img1,
    },
    {
        title: "Technology Made With Trust.",
        description:
            "Achieve the right growth curve with the virtuous Technology Partner. " +
            "Utilizing the foremost technology accompanied by a great team will power " +
            "you to be world-class digital experiences and identity.",
        button: "Schedule A Free Consultation",
        image: img2,
    },
];

function Herosection2() {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
            className="mySwiper"
            style={{ width: "100%", height: "100%" }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <Box sx={{ height: { xs: "auto", md: "615px" } }}>
                        <Grid
                            container
                            sx={{
                                height: "100%",
                                alignItems: "center",
                                flexDirection: { xs: "column", md: "row" },
                            }}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "darkBlue",
                                    height: "100%",
                                    width: "100%",
                                    p: { xs: '70px 15px', md: '0px 15px', lg: "unset" },
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "white",
                                        maxWidth: "630px",
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        sx={{
                                            fontSize: { xl: "55px", md: '45px', sm: "35px", xs: "28px" },
                                            fontWeight: 500,
                                            margin: "0 0 20px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: "60px",
                                            height: "4px",
                                            backgroundColor: "white",
                                            // mt:"10px",
                                            bottom:{marginBottom:".5px"}
                                        }}
                                    />
                                    <Box sx={{maxWidth: "100%",
                                        height: ".5px",
                                        backgroundColor: "#5A6168",
                                        margin: "0 0 25px",
                                        display:"flex",
                                        alignItems:"center",
                                    }}></Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: "17px",
                                            color: 'textGray',
                                            margin: { sm: "0 0 15px" },
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            padding: "15px 35px",
                                            fontSize: "15px",
                                            margin: "27px 0 0",
                                            background: "white",
                                            color: "#000",
                                            display: "inline-block",
                                            borderRadius: "1e3px",
                                        }}
                                    >
                                        {item.button}
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box
                                    sx={{
                                        height: { xs: "440px", sm: "auto" },
                                        ' img': { objectFit: 'cover' },
                                    }}
                                >
                                    <Image
                                        alt={`Hero section image ${index + 1}`}
                                        src={item.image}
                                        style={{
                                            width: "100%",
                                            maxHeight: "100%",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Herosection2;
