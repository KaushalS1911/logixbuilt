import React from 'react';
import {Box, Container, Typography} from "@mui/material";
// import img1 from '../../../assets/images/portfolio/techuse/tech-figma.svg'
// import img2 from '../../../assets/images/portfolio/techuse/tech-nativescript.svg'
// import img3 from '../../../assets/images/portfolio/techuse/tech-node-js.svg'
// import img4 from '../../../assets/images/portfolio/techuse/tech.mongodb.svg'
// import img5 from '../../../assets/images/portfolio/techuse/tech-express-js.svg'
import Image from "next/image";


const app = [
    {
        name:"SOCIAL MEDIA",
        // image: img1,
    },
    {
        name:"FINTECH",
        // image: img2,
    },
    {
        name:"FINTECH",
        // image: img3,
    },
    {
        name:"FINTECH",
        // image: img4,
    },
    {
        name:"FINTECH",
        // image: img5,
    },

];

function TechUse() {
    return (
        <Box sx={{padding:"96px 0px"}}>
            <Container maxWidth={'xl'}>
                <Typography variant="h2" component="h2" sx={{color:"#0F172A" , fontSize:"36px" , fontWeight:"700" , textAlign:"center"}}>
                    Tech Use
                </Typography>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    {app.map((item , index) => (
                        <Box  key={index+1}  sx={{
                            margin:"30px 20px",
                        }}>
                            <Box sx={{padding:"10px 20px" , display:"flex" , alignItems:"center" , background:"#F5F7F9" ,borderRadius:"10px"}}>
                                <Image
                                    src={item.image}
                                    style={{
                                        marginRight:"10px"
                                    }}
                                />
                                <Box sx={{color:"#0F72A"}}>
                                    {item.name}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default TechUse;