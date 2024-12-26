import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import Img1 from "../../assets/images/blog/posts/Img1.jpg";
import Img2 from "../../assets/images/blog/posts/Img2.webp";
import Img3 from "../../assets/images/blog/posts/Img3.webp";
import Img4 from "../../assets/images/blog/posts/Img4.webp";
import Img5 from "../../assets/images/blog/posts/Img5.webp";
import Img6 from "../../assets/images/blog/posts/Img6.webp";
import Img7 from "../../assets/images/blog/posts/Img7.webp";
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

function Posts() {
    const Data = [
        {
            date: "23 April 2024",
            img: Img2,
            smallImg: Img1,
            btn: "Marketing",
            title: "5 Impactful Elements That Promote IT and Business",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        },
        {
            date: "23 April 2024",
            img: Img3,
            smallImg: Img1,
            btn: "Startup Consulting",
            title: "Revolutionizing the Future of Financial Services",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        },
        {
            date: "23 April 2024",
            img: Img4,
            smallImg: Img1,
            btn: "Corporate",
            title: "A Guide to Embracing Meaningful Change in Banking",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        },
        {
            date: "23 April 2024",
            img: Img5,
            smallImg: Img1,
            btn: "Startup Consulting",
            title: "For the Wealthy, Work Is the New Retirement",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        },
        {
            date: "18 April 2024",
            img: Img6,
            smallImg: Img1,
            btn: "Startup Consulting",
            title: "Providing better service for customers",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        },
        {
            date: "18 April 2024",
            img: Img7,
            smallImg: Img1,
            btn: "Corporate",
            title: "A New Age for Trade & Supply Chain Finance",
            describtion: "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis, Pellentesque leo…",
        }
    ];

    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 500, marginBottom: "120px" }}>
                    Recent Posts
                </Typography>
                <Grid container spacing={3}>
                    {Data.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Box
                                sx={{
                                    margin: "0 0 67px",
                                    padding: "0 15px",
                                    overflow: "hidden",
                                    position: "relative",
                                    transition: "transform 0.3s ease-in-out",
                                    '&:hover img': {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <Image
                                        src={item.smallImg}
                                        alt="Admin"
                                        width={30}
                                        height={30}
                                        style={{
                                            borderRadius: "50%",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ color: "mediumGray" }}>
                                        By Admin &nbsp;
                                    </Typography>
                                </Box>

                                {/* Image with Date and Button Overlay */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block",
                                            transition: "transform 0.3s ease-in-out",
                                        }}
                                    />

                                    {/* Date Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            background: "rgba(255, 255, 255, 0.25)", // Increased opacity for better visibility
                                            backdropFilter: "blur(2px)", // Increased blur effect
                                            WebkitBackdropFilter: "blur(2px)", // Cross-browser compatibility
                                            borderRadius: "10px", // Rounded corners for aesthetics
                                            color: "#fff", // Text color for better contrast
                                            textAlign: "center",
                                            padding: "20px 25px",
                                            fontSize: "35px", // Set to 35px
                                            fontWeight: 600,
                                            lineHeight: "1.2",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{ fontSize: "35px", lineHeight: "1.2" }} // Updated font size
                                        >
                                            {item.date.split(" ")[0]} {/* Extracts day */}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="div"
                                            sx={{ fontSize: "15px", lineHeight: "1.2" }} // Updated font size
                                        >
                                            {item.date.split(" ")[1]} {/* Extracts month */}
                                        </Typography>
                                    </Box>




                                    {/* Button Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: "10px",
                                            left: "10px",
                                            backgroundColor: "#fff",
                                            color: "#000",
                                            textTransform: "uppercase",
                                            borderRadius: "20px",
                                            padding: "10px 15px",
                                            fontSize: "12px",
                                            fontWeight: 400,
                                            lineHeight: "1",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s ease",
                                            '&:hover': {
                                                backgroundColor: "#000",
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {item.btn}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        fontSize: "23px",
                                        lineHeight: "33px",
                                        fontWeight: 500,
                                        marginBottom: "14px",
                                        marginTop: "22px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {item.title}
                                </Box>

                                <Box
                                    sx={{
                                        color: "mediumGray",
                                    }}
                                >
                                    {item.describtion}
                                </Box>

                                <Box
                                    sx={{
                                        marginTop: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        '&:hover .icon': {
                                            marginLeft: "20px",
                                        },
                                    }}
                                >
                                    Continue Reading <EastIcon className={'icon'} sx={{ transition: ".3s", marginLeft: "10px" }} />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Posts;
