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
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation, EffectFade]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            autoplay={{
                delay: 3000, // Delay between transitions (in milliseconds)
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            loop={true}
            effect="fade"
            className="mySwiper"
            style={{ width: "100%", height: "100%", marginTop: '-50px' }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <Grid
                        container
                        sx={{
                            height: "auto",
                            alignItems: "center",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        {/* Left Section: Title and Description */}
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: { xs: "auto", md: "595px" },
                            }}
                        >
                            <Box
                                sx={{
                                    background: "black",
                                    color: "white",
                                    padding: { xs: "70px 15px", md: "119px 15px 129px" },
                                    // display: "flex",
                                    flexDirection: "column",
                                    justifyContent: {xs:"start" , md :"center"},
                                    height: { md: "595px", xs: "auto" },
                                    // maxWidth: "743px",
                                    width: {xs:"900px" ,md:"100%"},
                                    margin:{xs:"70px 0 0" , md:"0"}
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                        // marginBottom: "20px",
                                        // whiteSpace: "pre-wrap",
                                        fontSize: {  md: "45px", sm: "35px", xs: "28px" },
                                        fontWeight: { lg: "600", xs: "500"  },
                                        // lineHeight: { lg: "60px", md: "60px", xs: "45px" },
                                        margin: "0 0 29px",
                                        padding: "0 0 25px",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        // marginBottom: "20px",
                                        fontSize: "17px",
                                        maxWidth: "600px",
                                        margin: {sm:"0 0 15px"},
                                    }}
                                >
                                    {item.description}
                                </Typography>
                                <Box

                                    sx={{
                                        padding: "15px 35px",
                                        fontSize: "15px",
                                        margin: "27px 0 0",
                                        background:"white",
                                        color:"#000",
                                        display:"inline-block",
                                        borderRadius:"1e3px"

                                    }}
                                >
                                    {item.button}
                                </Box>
                            </Box>
                        </Grid>
                        {/* Right Section: Image */}
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: { xs: "400px", md: "595px"},
                                width: '100%',
                                background: "white",
                            }}

                        >
                            <Image
                                alt={`Hero section image ${index + 1}`}
                                src={item.image}
                                height={'100%'}
                                width={'100%'}
                            style={{
                                    objectFit: "cover",
                                    width: "100%", // Ensures responsiveness
                                    height: "100%", // Automatically adjusts height based on width
                                }}
                            />

                        </Grid>
                    </Grid>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
export default Herosection2;