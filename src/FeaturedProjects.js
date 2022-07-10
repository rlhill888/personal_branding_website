import React from "react";
import NavBar from "./Navbar";
import './FeaturedProjects.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import { motion } from "framer-motion";

function FeaturedProjects(){
    return(
        <div
        className="mainBackground"
        >
       <motion.div
        animate={{
            opacity: 1
        }}
        initial={
            {
                opacity: 1
            }
        }
        transition={{
            duration: 1
        }}
       >

      

        <NavBar />
        
        <div
        className="mainCssDiv"
        >
             
            <div
            className="middleDiv"
            >
                <h1
                className="featuredProjectsHeaderTitle"
                >My Projects</h1>
                <div>
                    <Container>

                    <Accordion
                        className="AccordianProjectDiv"
                        elevation={5}
                        >
                        <AccordionSummary>
                            <div
                            className="AccordianSummaryDiv"
                            >
                                 <h2
                            className="AccordianProjectHeader"
                            >Workout 4 Me</h2>
                            <img
                            src="https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg"
                            className="AccordianSummaryImg"
                            >
                            </img>
                            </div>
                           
                        </AccordionSummary>
                        <AccordionDetails>
                            <div
                            className="accordianDiv"
                            >
                                 <iframe src="https://drive.google.com/file/d/1T7XLsCTSrxaGiDSARfdnTfdA4x51crm6/preview" 
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>
                                 <h1>Work Out For Me</h1>
                                 <h2>App for users to have a custom workout/meal plans created for them based on their personal goals, weight, age and height</h2>
                            </div>

                       
                            


                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion
                        className="AccordianProjectDiv"
                        elevation={5}
                        >
                        <AccordionSummary>
                            <div
                            className="AccordianSummaryDiv"
                            >
                                 <h2
                            className="AccordianProjectHeader"
                            >TKRL Beat/Instrumental Website</h2>
                            <img
                            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_626660256_2000108620009280158_388846.jpg"
                            className="AccordianSummaryImg"
                            >
                            </img>
                            </div>
                           
                        </AccordionSummary>
                        <AccordionDetails>
                        <div
                            className="accordianDiv"
                            >
                                 <iframe src="https://drive.google.com/file/d/1IMymEGd5ZhAFOlZ_FGJD4HR-AIR3mOoc/preview" 
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>
                                 <h1>TKRL Beat Website</h1>
                                 <h2>App that allows users to sort through, listen to, and purchase instrumentals that I created along with their licensing rights</h2>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion
                        className="AccordianProjectDiv"
                        elevation={5}
                        >
                        <AccordionSummary>
                            <div
                            className="AccordianSummaryDiv"
                            >
                                 <h2
                            className="AccordianProjectHeader"
                            >Habitual App</h2>
                            <img
                            src="https://images.erincondren.com/Stickers/Customizable_Event_Stickers/CSM_HTS_3_edit.jpg"
                            className="AccordianSummaryImg"
                            >
                            </img>
                            </div>
                           
                        </AccordionSummary>
                        <AccordionDetails>
                        <div
                            className="accordianDiv"
                            >
                                 <iframe src="https://drive.google.com/file/d/1mZAMSAIXWzvqksgHytnIpciz6SNzd1k-/preview"
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>
                                 <h1>Habitual</h1>
                                 <h2>Simple App where users can make habits and track their daily habit goals</h2>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                    </Container>


                    
                </div>


            </div>
            

        </div>

        
         </motion.div>
        </div>
    )
}

export default FeaturedProjects