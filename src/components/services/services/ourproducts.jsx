import React from 'react';
import {Box, Button, Container} from "@mui/material";
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Img1 from "../../../assets/images/services/ourproducts/tech-figma.svg"
import Img2 from "../../../assets/images/services/ourproducts/tech-nativescript.svg"
import Img3 from "../../../assets/images/services/ourproducts/tech-node-js.svg"
import Img4 from "../../../assets/images/services/ourproducts/tech-express-js.svg"
import Image from "next/image";

function Ourproducts(props) {


        const data = {
            "FRONT-END": [
                { name: "Figma", image: Img1 },
                { name: "NativeScript", image: Img2 },

            ],
            "BACK-END & DATABASES": [
                { name: "Node.js", image: Img3 },

            ],
            "INFRASTRUCTURE": [
                { name: "MongoDB", image: Img4 },

            ]

        };

    return (
        <Box sx={{padding:"100px 0 160px"}}>
           <Container maxWidth={"xl"}>
               <Box sx={{
                   fontSize: {md:"62px",sm:"48px"},
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

                           <Typography variant="h5" sx={{
                               color:"#4A4A68",
                               fontSize:"16px",
                               fontWeight:"500",
                               padding:"20px 50px 20px 0",
                               display:"inline-block"
                           }}>
                               {category}
                           </Typography>

                           <Box
                               sx={{
                                   display: 'flex',
                                   flexWrap: 'wrap',
                                   gap: 2,
                               }}
                           >
                               {data[category].map((tech) => (
                                  <Box key={tech + 1} sx={{display:"flex",padding: '10px 24px',
                                      borderRadius: 2,
                                      backgroundColor: '#f5f5f5',}}>
                                      <Image src={tech.image} alt={"#"} />
                                          <Box
                                              key={tech.name + 1}
                                              sx={{
                                                  marginLeft:"15px",
                                                  fontSize: '14px',
                                                  fontWeight: 400,
                                                  whiteSpace: 'nowrap',
                                              }}
                                          >
                                              {tech.name}
                                          </Box>
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
                               transition: "background-color 0.3s, color 0.3s",
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