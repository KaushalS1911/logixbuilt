'use client';
import {Box, Typography, Button, Container} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import EastIcon from "@mui/icons-material/East";
import {useRef} from "react";

const slides = [
    {
        title: "MODREN CREATIVE STUDIO",
        description:
            "Lorem Ipsum has been the industry's standard dummy. Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy.",
        button: "LEARN MORE",
        image: "https://via.placeholder.com/600x400",
    },
    {
        title: "INNOVATIVE DESIGNS",
        description:
            "We bring innovation and creativity to your projects with a touch of modern style and design. Your ideas come to life here.",
        button: "DISCOVER",
        image: "https://via.placeholder.com/600x400",
    },
    {
        title: "YOUR SUCCESS, OUR MISSION",
        description:
            "We focus on delivering exceptional results that drive success. Partner with us for quality and creative solutions.",
        button: "CONTACT US",
        image: "https://via.placeholder.com/600x400",
    },
];
function Herosection() {
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
        <Box>
            <Box sx={{height: {xs: '110vh',sm: '95vh', md: "70vh"}, display: 'flex', alignItems: 'center', position: 'relative'}}>
                <Container maxWidth={'xl'}>
                    <Box sx={{position: 'relative',mt: {xs:10,md:0}}} className={'heroSection'}>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, EffectFade]}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            loop={true}
                            effect="fade-out"
                            className="mySwiper"
                            style={{width: "100%", height: "100%", marginTop: '-50px'}}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: {xs: "column", md: "row"},
                                            color: "white",
                                            p: {sm:4},
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: {xs: 'center',md: 'unset'},
                                                textAlign: {xs: "center", md: "left"},
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                fontWeight="bold"
                                                className={'oswald'}
                                                sx={{lineHeight: 1.2,width: {xs:'100%',sm:'90%',md:'70%'},mt: {xs:8,md:0}, fontSize: {xs:'45px',sm:'60px'}}}
                                            >
                                                {slide.title}
                                            </Typography>
                                            <Typography sx={{my: 5, maxWidth: {xs:'100%',sm:"560px"}, letterSpacing: 0.9}}>
                                                {slide.description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "crimson",
                                                    color: "white",
                                                    borderRadius: '50rem',
                                                    border: '1px solid white',
                                                    padding: '10px 30px',
                                                    fontSize: '13px',
                                                    transition: '0.5s',
                                                    mb: {xs:6,md:0},
                                                    "&:hover": {
                                                        backgroundColor: "white",
                                                        color: 'black'
                                                    },
                                                    alignSelf: {xs: "center", md: "flex-start"},
                                                }}
                                            >
                                                {slide.button}
                                            </Button>
                                        </Box>
                                        <Box
                                            component="img"
                                            src={slide.image}
                                            alt={slide.title}
                                            sx={{
                                                width: {xs: "80%", md: "50%", lg: "44%"},
                                                objectFit: "cover",
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                            }}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Box
                            className="swiper-button-prev"
                            sx={{
                                position: 'absolute',
                                left: 'unset',
                                right: 100,
                                top: {xs:'95%',lg:'108%'},
                                backgroundColor: 'black',
                                color: 'white',
                                height: 45,
                                width: 45,
                                padding: 1.2,
                                borderRadius:'50%',
                                display: {xs: "none", md: "block"},
                                transition: '0.4s',
                                "&:hover": {
                                    backgroundColor: 'springGreen',
                                },
                            }}
                            onClick={handlePrev}
                        >
                            <KeyboardArrowRightIcon/>
                        </Box>
                        <Box
                            className="swiper-button-next"
                            sx={{
                                position: 'absolute',
                                right: 170,
                                backgroundColor: 'black',
                                top: {xs:'95%',lg:'108%'},
                                color: 'white',
                                height: 45,
                                width: 45,
                                padding: 1.2,
                                borderRadius:'50%',
                                display: {xs: "none", md: "block"},
                                transition: '0.4s',
                                "&:hover": {
                                    backgroundColor: 'springGreen',
                                },
                            }}
                            onClick={handleNext}
                        >
                            <KeyboardArrowLeftIcon/>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{
                    position: 'absolute',
                    backgroundColor: 'crimson',
                    height: '100%',
                    width: {xs: '100%', md: '73%'}
                }}/>
            </Box>
        </Box>
    );
}

export default Herosection;