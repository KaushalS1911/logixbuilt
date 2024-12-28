import React from 'react';
import {Box, Button, Container} from "@mui/material";
import { Grid, Typography, Card, CardContent } from '@mui/material';

function Ourproducts(props) {
    const data = {
        "Front-End": ["Angular", "React", "Vue", "Next.js", "Single-Spa", "Alpine.js", "Flutter"],
        "Back-End & Databases": [
            "Node.js",
            "Express.js",
            "NestJS",
            "Python",
            "FastAPI",
            "MongoDB",
            "PostgreSQL",
            "Redis",
            "AWS",
            "Cloudflare",
            "RabbitMQ",
        ],
        Infrastructure: ["Amazon EKS", "Google Cloud", "AWS", "Microsoft Azure", "Digital Ocean", "Kubernetes", "Red Hat", "Cloudflare"],
        "AI Data Frameworks": [
            "LlamaIndex",
            "AutoGen",
            "Langchain",
            "Hugging Face Transformers",
            "DeepSpeed",
            "AutoGPT",
            "Semantic Kernel",
            "Haystack",
            "PrivateGPT",
        ],
    };
    return (
        <Box sx={{padding:"100px 0 160px"}}>
           <Container maxWidth={"xl"}>
               <Box sx={{
                   fontSize:"62px",
                   fontWeight:"bold",

               }}>
                   The tech behind our products
               </Box>
               <Box sx={{
                   fontSize:"18px",
                   paddingTop:"30px",
               }}>
                   Our team of developers has a range of experience in cutting-edge <br/> technologies. This allows us to create a tailor-made tech stack that will <br/> best support your project’s needs.
               </Box>
               <Box sx={{ padding: 4 }}>
                   {Object.keys(data).map((category) => (
                       <Box key={category} sx={{ marginBottom: 6 }}>
                           {/* Category Title */}
                           <Typography variant="h5" sx={{
                               color:"#4A4A68",
                               fontSize:"17px",
                               fontWeight:"500",
                               padding:"20px 50px 20px 0",
                               display:"inline-block"
                           }}>
                               {category}
                           </Typography>

                           {/* Tech List */}
                           <Box
                               sx={{
                                   display: 'flex',
                                   flexWrap: 'wrap',
                                   gap: 2,
                               }}
                           >
                               {data[category].map((tech) => (
                                   <Box
                                       key={tech}
                                       sx={{
                                           padding: '10px 24px',
                                           borderRadius: 2,
                                           backgroundColor: '#f5f5f5',
                                           fontSize: '14px',
                                           fontWeight: 400,
                                           whiteSpace: 'nowrap',
                                       }}
                                   >
                                       {tech}
                                   </Box>
                               ))}
                           </Box>
                       </Box>
                   ))}
                   <Box sx={{paddingTop:"25px"}}>
                       <Button
                           sx={{
                               background: "#fff",
                               color: "#e7107e",
                               border: "2px solid #e7107e",
                               padding: "10px 50px",
                               borderRadius: "25px",
                               fontSize: "15px",
                               fontWeight: "600",
                               '&:hover': {
                                   backgroundColor: "#e7107e",
                                   color: "#fff",
                               },
                               transition: "background-color 0.3s, color 0.3s", // Smooth transition
                           }}
                       >
                           MORE ABOUT OUR TECH STACK
                       </Button>
                   </Box>
               </Box>
           </Container>
        </Box>
    );
}

export default Ourproducts;