import React, {useState, useEffect} from "react";
import NavBar from "./Navbar";
import './FeaturedProjects.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container';
import { motion } from "framer-motion";

function FeaturedProjects(){

    const width= window.innerWidth
    const [deviceWidth, setDeviceWidth]=useState('')
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
       
        if (newWindow) newWindow.opener = null
      }
    useEffect(()=>{
        if(width<=480){
            setDeviceWidth('mobile')
        }

    }, [])
    
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
                                {
                                    deviceWidth==='mobile' ? <></> :

                                    <iframe
                                 
                                 src="https://drive.google.com/file/d/1T7XLsCTSrxaGiDSARfdnTfdA4x51crm6/preview" 
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>
                                }
                                   
                
                                 
                                 <h1
                                 className="titleAndDescription"
                                 >Work Out For Me</h1>
                                 <h2
                                 className="titleAndDescription"
                                 >App for users to have a custom workout/meal plans created for them based on their personal goals, weight, age and height</h2>

                                 {
                                      deviceWidth==='mobile' ? 
                                      <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab('https://drive.google.com/file/d/1T7XLsCTSrxaGiDSARfdnTfdA4x51crm6/preview')}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/149/149125.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            View Demo
                                        </h2>


                                      </div> : <></>

                                 }

                                    <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab('https://github.com/rlhill888/workout-app')}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            Github Link
                                        </h2>


                                      </div>

                                 
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
                            >TKRL Beat Website</h2>
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

{
                                    deviceWidth==='mobile' ? <></> :

                                 <iframe src="https://drive.google.com/file/d/1IMymEGd5ZhAFOlZ_FGJD4HR-AIR3mOoc/preview" 
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>

}
                                 <h1
                                 className="titleAndDescription"
                                 >TKRL Beat Website</h1>
                                 <h2
                                 className="titleAndDescription"
                                 >App that allows users to sort through, listen to, and purchase instrumentals that I created along with their licensing rights</h2>

                                {
                                      deviceWidth==='mobile' ? 
                                      <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab("https://drive.google.com/file/d/1IMymEGd5ZhAFOlZ_FGJD4HR-AIR3mOoc/preview")}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/149/149125.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            View Demo
                                        </h2>


                                      </div> : <></>

                                 }

                                    <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab('https://github.com/rlhill888/tkrl-beat-site')}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            Github Link
                                        </h2>


                                      </div>
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

{
                                    deviceWidth==='mobile' ? <></> :

                                 <iframe src="https://drive.google.com/file/d/1mZAMSAIXWzvqksgHytnIpciz6SNzd1k-/preview"
                                 
                                 className="videos"
                                 allowFullScreen
                                 
                                 ></iframe>

}
                                 <h1
                                 className="titleAndDescription"
                                 >Habitual</h1>
                                 <h2
                                 className="titleAndDescription"
                                 >Simple App where users can make habits and track their daily habit goals</h2>

{
                                      deviceWidth==='mobile' ? 
                                      <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab("https://drive.google.com/file/d/1mZAMSAIXWzvqksgHytnIpciz6SNzd1k-/preview")}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/149/149125.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            View Demo
                                        </h2>


                                      </div> : <></>

                                 }

                                    <div
                                      className="projectLink"
                                      onClick={()=> openInNewTab('https://github.com/alex-andria/Habit-Tracker')}
                                      >
                                        <img
                                       className="projectLinkImage"
                                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                                        >
                                        </img>
                                        <h2
                                        className="projectLinkTitle"
                                        >
                                            Github Link
                                        </h2>


                                      </div>
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