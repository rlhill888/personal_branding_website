import React from "react";
import NavBar from "./Navbar";
import './Contact.css'
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { motion } from "framer-motion";

function Contact(){

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <motion.div

        className="mainBackground2"
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
        <NavBar></NavBar>
        <div
        
        >
         {/* <h1>Contact</h1> */}
         <div
         className="mainContactImgDiv"
         >
            <img
            className="mainContactImg"
         src='https://i.ytimg.com/vi/uNcd7WwmVlY/maxresdefault.jpg'
         ></img>
        
         </div>
         <div
         className="mainContactTitleDiv"
         >
             <h1
            className="mainContactTitleText"
         >
            Contact
         </h1>
         </div>
         

        </div>
        <div
        className="mainContactConentContiner"
        >

            <div
            className="mainContactContentDivContainer"
            >
                <h1
                 className="mainContactDivHeaders"
                >Please Feel Free To Contact Me, and Check Out the Links to My Github, LinkedIn, Blog Posts, and Resume</h1>
                <br />
                <h1
                className="mainContactDivHeaders"
                
                >rlhill888@gmail.com
                <Button onClick={()=>{
                    navigator.clipboard.writeText('rlhill888@gmail.com')
                }}>

                    <ContentCopyIcon />
                </Button>
                
                </h1>

            </div>
            <div
            className="mainContactContentDivContainerlinks"
            >
                
                <div 
                onClick={() => openInNewTab('https://github.com/rlhill888')}
                className="link-content-div">
                    <img
                    className="logoImageIcon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    >
                    </img>
                    <h3
                    className="linkTitlesContact"
                    > Github</h3>
                    
                </div>
                <br />
                <div className="link-content-div"
                onClick={() => openInNewTab('https://www.linkedin.com/in/rodney-lawrence-hill/')}
                >
                    <img
                    className="logoImageIcon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                    >
                    </img>
                    <h3
                    className="linkTitlesContact"
                    > LinkedIn</h3>
                    
                </div>
                <br />
                <div className="link-content-div"
                 onClick={() => openInNewTab('https://dev.to/rlhill888')}
                >
                    <img
                    className="logoImageIcon"
                    src="https://cdn.worldvectorlogo.com/logos/devto.svg"
                    >
                    </img>
                    <h3
                    className="linkTitlesContact"
                    > Blog</h3>
                    
                </div>
                <br />
                <div className="link-content-div"
                 onClick={() => openInNewTab('https://docs.google.com/document/d/1GBdzV7akD7DVgg05yL-Cp21uFhPv5sgdaCRNJu_0b_0/edit?usp=sharing')}
                >
                    <img
                    className="logoImageIcon"
                    src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo-400x400.png"
                    >
                    </img>
                    <h3
                    className="linkTitlesContact"
                    > Resume</h3>
                    
                </div>

            </div>

        </div>
      
        </motion.div>
    )
}

export default Contact