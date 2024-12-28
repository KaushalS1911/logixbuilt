'use client';
import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/images/about/aboutSlider/ab2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const AboutSlider = () => {
    const timelineData = [
        {
            year: "Since 1996",
            title: "A Memorable Start",
            description:
                "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
        },
        {
            year: "2000 - 2008",
            title: "Milestone Development",
            description:
                "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
        },
        {
            year: "2009 - 2012",
            title: "Consulting Award",
            description:
                "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
        },
        {
            year: "2013 - 2016",
            title: "Scale Expansion",
            description:
                "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
        },
        {
            year: "2013 - 2016",
            title: "Scale Expansion",
            description:
                "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
        },
    ];
    return (
        <>
            <Box>

                <Box>
                    <Typography
                        component={"img"}
                        src={image.src}
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: { xs: "300px", md: "500px" },
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>

                <Box>
                    <Box
                        sx={{
                            backgroundColor: "#121C27",
                            color: "#fff",
                            padding: { xs: "20px 2px", md: "40px 5px" },
                            position: "relative",
                        }}
                    >
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            spaceBetween={1}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1400: { slidesPerView: 4 },
                            }}
                        >
                            {timelineData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            ":hover .dot": {
                                                border: "1px solid #fff",
                                                borderRadius: "50%",
                                                padding: "6px",
                                                transition: "0.3s",
                                                overflow: "hidden",
                                            },
                                        }}
                                    >
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography
                                                sx={{
                                                    marginTop: "30px",
                                                    fontSize: { xs: "13px", sm: "15px" },
                                                }}
                                            >
                                                {item.year}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginTop: "10px",
                                                fontWeight: "bold",
                                                fontSize: { xs: "18px", sm: "22px" },
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                margin: "30px 0",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box className="dot">
                                                <Typography
                                                    sx={{
                                                        width: "10px",
                                                        height: "10px",
                                                        backgroundColor: "white",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    border: "1px #353E47 solid",
                                                    width: "100%",
                                                    height: ".01px",
                                                }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                marginTop: "10px",
                                                fontSize: { xs: "13px", sm: "15px" },
                                                lineHeight: "1.5",
                                                color: "#D3D3D3",
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Custom Swiper Navigation */}
                        <ArrowForwardIcon
                            className="swiper-button-next"
                            sx={{
                                color: "#fff",
                                fontSize: "20px",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                backgroundColor: "#353E47",
                                padding: "13px",
                                ":hover": {
                                    backgroundColor: "white",
                                    color: "black",
                                },
                            }}
                        />
                        <ArrowBackIcon
                            className="swiper-button-prev"
                            sx={{
                                color: "#fff",
                                fontSize: "20px",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                backgroundColor: "#353E47",
                                padding: "13px",
                                ":hover": {
                                    backgroundColor: "white",
                                    color: "black",
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default AboutSlider;