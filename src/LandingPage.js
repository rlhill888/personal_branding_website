import { height } from "@mui/system";
import React, {useState, useEffect}from "react";
import './LandingPage.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";
import mainImg from './videos_and_pictures/IMG_3752.JPG'

function LandingPage(){

    const width= window.innerWidth

    const [animationStep, setAnimationStep]= useState('')
    const [pictureRollIn, setPictureRollIn]= useState(false)
    const [mainHeaderFadeIn, setMainHeaderFadeIn]= useState(false)
    const [showFullStackDeveloper, setShowFullStackDeveloper]= useState(false)
    const [showSoftwareEnginer, setShowSoftwareEngineer]= useState(false)
    const [showNavBar, setShowNavBar]= useState(false)

    const history = useHistory()
    useEffect(()=>{
        setTimeout(()=> setMainHeaderFadeIn(true), 500)
        setTimeout(()=> setPictureRollIn(true), 1000)
        setTimeout(()=> setShowFullStackDeveloper(true), 1500)
        setTimeout(()=> setShowSoftwareEngineer(true), 1600)
        setTimeout(()=> setShowNavBar(true), 1900)

    }, [])

    function setShowNavBarTextSize(){
        
        if(width<=480){
            return '13px'
        }

        if(width<=769){
            return '18px'
        }
        else{
            return '24px'
        }
    }

    return(
        <>
        <div
        style={{
           width: '100vw',
           height: '100vh',
           display: 'flex',
           justifyContent: 'center',
           alignItems:  'center',
           flexDirection: 'column'

        }}
        >
            <img 
            className="videoBackground"
            src='https://wallpaperaccess.com/full/85814.jpg'></img>
         

             <motion.div
           className="glasscontainer"
           animate={{
            opacity: 1

           }}
           initial={{
            opacity: 0
           }}
           transition={{
            duration: 1
           }}
           >

          

            {/* <div
           className="welcomeFlexContainer"
           > */}

            <motion.div
            className="welcomeHeaderDiv"
            animate={{
                opacity: mainHeaderFadeIn ? 1 : 0
            }}
            transition={{
                duration: 1
            }}

            initial={{
                opacity: 0
            }}
            >
                <div
                className="rodneyHillTitleDiv"
                >
                    <h1
                    className="rodneyHillTitle"
                    >RODNEY HILL</h1>
                </div>
                <motion.div
                animate={{
                    x: showFullStackDeveloper ? 0 : -1000,
                    opacity: showFullStackDeveloper ? 1 : 0
                }}

                initial={{
                    x: 0,
                    opacity: 0
                }}

                transition={{
                    duration: .5
                }}
                >

                    <h1
                    className="rodneyHillTitle2"
                    >
                        Full-Stack Web Developer
                    </h1>
                </motion.div>
                <motion.div
                 animate={{
                    x: showSoftwareEnginer ? 0 : -1000,
                    opacity: showSoftwareEnginer ? 1 : 0
                }}

                initial={{
                    x: 0,
                    opacity: 0
                }}

                transition={{
                   duration: .5
                }}
                >
                    <h1
                    className="rodneyHillTitle2"
                    >
                        Software Engineer
                    </h1>
                </motion.div>
                {/* <h2>Full Stack Web Developer And Software Engineer</h2> */}
            </motion.div>

           
           <motion.div 
           className="welcomeImgDiv"
           animate={{
            x: pictureRollIn ? 0: 1000,
            opacity: pictureRollIn ? 1 : 0
           }}
           initial={{
            x:1000,
            opacity: 0

           }}

           transition={{
            type: 'spring',
            stiffness: 50
           }}
           >
             <img
                height={'700vw'}
                width={'700vw'}
                className="mainPictureImage" src={mainImg}></img>
           </motion.div>
               
        

            

            
           {/* </div> */}

           </motion.div>

           <motion.div
           animate={{
            opacity: showNavBar ? 1 : 0
           }}
           initial={{
            opacity: 0,
           }}
           transition={{
            duration: .0001
           }}
           className="buttonGroupDiv"
           >

           
            <Button
            className="landingPageButtonGroup"
            style={{
                fontSize: setShowNavBarTextSize(),
                fontWeight: '800'
            }}
            onClick={()=> history.push('/about')}
            >
                    About Me
               
                
            </Button>
            <Button
            onClick={()=> history.push('/contact')}
            className="landingPageButtonGroup"

            style={{
                fontSize: setShowNavBarTextSize(),
                fontWeight: '800'
            }}
            >
                Contact
            </Button>
            <Button
            onClick={()=> history.push('/featured_projects')}
            className="landingPageButtonGroup"

            style={{
                fontSize: setShowNavBarTextSize(),
                fontWeight: '800'
            }}
            >
                Featured Projects
            </Button>
            {/* <Button
            onClick={()=> history.push('/freelance_inquiries')}
            className="landingPageButtonGroup"
            >
                Free Lance Inquiries
            </Button> */}
           </motion.div>

           
          
    
          
            

        </div>
        
        </>
    )
}

export default LandingPage