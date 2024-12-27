import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import Img1 from '../../../assets/images/portfolio/mediaProject/simple.png'
import phoneimg1 from '../../../assets/images/portfolio/mediaProject/phone.png'
import phoneimg2 from '../../../assets/images/portfolio/mediaProject/phone-02.png'
import phoneimg3 from '../../../assets/images/portfolio/mediaProject/phone-03.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';



const slides = [
    {
        name:"The Challenges",
        number:"01",
        title1: "Fans creating artist-related content",
        title2: "Creators want to monetize their intellectual property",
        title3: "Native vs. hybrid",
        description1:"From an architectural perspective, the solution had a challenge from the beginning, which was the realtime ingestion of data from hundreds of different sources, to keep server stability.",
        description2:"Fave allows creators to monetize their IP through their fans’ content and gives access to in-depth data. This uses the latent potential of a digital footprint from fans. Creators can fight the waves against the usage by fans of their intellectual property or surf the wave by accepting it and monetizing it.",
        description3:"There was from moment one a great challenge of matching the budget with the scope. Hybrid solutions are very flexible and powerful but are not meant for media-centric apps. Native has the security of having all features supported but it always takes longer and needs a larger team. We did a benchmark of hybrid technologies for the development and we’ve come to the conclusion Native Script would be possible for a quick MVP launch which later should be replaced by a fully native app.",
        icon:<ArrowCircleRightIcon fontSize={"large"}/>,
        image: phoneimg1,
    },{
        name:"The Process",
        number:"02",
        title1: "Product Scope",
        title2: "Product Rationale and Tech Scope",
        title3: "Clickable Prototype",
        title4: "Final UX/UI Development",
        description1:"We focused on the business vision and created a comprehensive brief for the project by gathering all the research on the market, competitor benchmarks and any other necessary information. Then we met with the client in an immersive session to craft a value proposition and set the main assumptions to prove. Finally, we created the ultimate list of user stories and features necessary to prove those main assumptions within the MVP.",
        description2:"After an immersive session with all the stakeholders, we had all the information we needed to create the ultimate list of User Stories and features necessary to prove the main assumptions in a Proof of Concept (POC). Our experts in Product, UX/UI and Tech Architecture focused on finding the answers to all of the questions raised throughout the scope preparation.",
        description3:"We developed a non-functional prototype to simulate user interaction. The experience of using the clickable prototype was very much like the final product itself, this was the adequate phase to test the information architecture, the UX and most importantly to present all involved counterparts a concrete outcome.",
        description4:"With the decisions closed in the previous steps, we went on developing the product through agile cycles.",
        icon:<LightbulbCircleIcon fontSize={"large"}/>,
        image: phoneimg2,
    },{
        name:"Key Features",
        number:"03",
        title1: "Fandom",
        title2: "Coin System",
        title3: "Leaderboard",
        description1:"A digital place where fans can upload content about their favourite creator and relate with other fans. The purpose is to have a centralized area where the creator can interact with her fans and where all creator related content is posted.",
        description2:"Rewarding users for uploading content on their creator’s fandom with coins that can be used to purchase merchandise from the same creator.",
        description3:"Fans and creators can visualize the fans with most points won inside each fandom and win specific prizes depending on their scoring.",
        icon:<ArrowCircleRightIcon fontSize={"large"}/>,
        image: phoneimg3,
    },

];

function MediaProject(props) {
    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{padding:"10px 0" }}>
                            <Typography variant="h6" component="h6" sx={{color:"#4A4A68" , fontSize:"16px" , fontWeight:"500" , lineHeight:1.5 ,marginBottom:"15px"}}>
                                About the Client
                            </Typography>
                            <Box sx={{fontSize:"24px", color:"0F172A" , fontWeight:700 ,marginBottom:"15px"}}>
                                For over a decade, Jacquelle Amankonah Horton has been dedicated to innovating within the music industry, launching award-winning music and entertainment apps.
                            </Box>
                            <Box sx={{fontSize:"16px" , marginBottom:"15px"}}>
                                Before founding Fave, she worked at Google for 7 years – 5 of which she spent at YouTube as a product manager, driving product development for YouTube creators and artists.
                            </Box>
                            <Box sx={{fontSize:"16px" , marginBottom:"15px" , color:"1F1C31"}}>She’s been named one of the “Top 100 Young Entrepreneurs in the World”, “Top 50 Women Product Managers in Europe”, and in 2020 she made the esteemed “Forbes 30 Under 30” list.</Box>
                            <Box sx={{fontSize:"16px" , marginBottom:"15px"}}>It’s no wonder, therefore, that just one year after launch, Fave is already an award-winning startup disrupting it’s sector.</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box>
                            <Image
                                src={Img1}
                                alt={Img1}
                                objectFit={"cover"}
                                style={{
                                    height:"100%",
                                    width:"100%",
                                    margin:"0 0 0 80px"
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    {slides.map((item , index) => (
                        <Box sx={{padding:"96px 0px"}}>
                            <Grid container>
                                <Grid item md={6} xs={12}>
                                    <Image
                                        src={item.image}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Box sx={{display:"flex"}}>
                                        <Typography variant="h6" component="h6" sx={{color:"#0FA4E4" , fontSize:"36px" , fontWeight:"700" , lineHeight:1.5 ,marginBottom:"15px" , padding:"0 20px 0 0" }}>
                                            {item.number}
                                        </Typography>
                                        <Typography variant="h6" component="h6" sx={{color:"#0F172A" , fontSize:"36px" , fontWeight:"700" , lineHeight:1.5 ,marginBottom:"15px"}}>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display:"flex"}}>
                                        <Box sx={{color:"#0FA4E4", marginRight:"10px"}}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Box sx={{color:"#0F172A" , fontSize:"24px" , fontWeight:600 , marginBottom:"20px"}}>
                                                {item.title1}
                                            </Box>
                                            <Box sx={{color:"#4A4A68", paddingBottom:"20px"}}>
                                                {item.description1}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{display:"flex"}}>
                                        <Box sx={{color:"#0FA4E4", marginRight:"10px"}}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Box sx={{color:"#0F172A" , fontSize:"24px" , fontWeight:600 , marginBottom:"20px"}}>
                                                {item.title2}
                                            </Box>
                                            <Box sx={{color:"#4A4A68" ,  paddingBottom:"20px"}}>
                                                {item.description2}
                                            </Box>
                                        </Box>
                                    </Box><Box sx={{display:"flex"}}>
                                        <Box sx={{color:"#0FA4E4", marginRight:"10px"}}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Box sx={{color:"#0F172A" , fontSize:"24px" , fontWeight:600 , marginBottom:"20px"}}>
                                                {item.title3}
                                            </Box>
                                            <Box sx={{color:"#4A4A68"}}>
                                                {item.description3}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{display:"flex"}}>
                                        <Box sx={{color:"#0FA4E4", marginRight:"10px"}}>
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Box sx={{color:"#0F172A" , fontSize:"24px" , fontWeight:600 , marginBottom:"20px"}}>
                                                {item.title4}
                                            </Box>
                                            <Box sx={{color:"#4A4A68" , paddingBottom:"20px"}}>
                                                {item.description4}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default MediaProject;