import React, {useState} from "react";
import NavBar from "./Navbar";
import './About.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import pageImg from './videos_and_pictures/IMG_3770.JPG'
import { motion } from "framer-motion";

function About(){
    const [shownCodingKnowledge, setShownCodingKnowledge]= useState('basic coding applications')
    const [showVideoTitle, setShowVideoTitle]= useState(true)
    const width= window.innerWidth
    const impactwarePictureAdress= 'data:image/png;base64,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'

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(

        <div
        className="mainBackground2"
        >

        <motion.div
        animate={{
            opacity: 1,
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
        className="aboutMainImageAndHeaderDiv"
        > 
        <div>
            <img 
            className="aboutMainImage"
            src={pageImg}>
            </img>

        </div>
        <div className="aboutMainHeader">
            <h1
            className="aboutTitle"
            >
                A Littlebit About Me
            </h1>
        </div>


        </div>
        <br />
        <br />
        <Container
        style={{
            zIndex: '-1'
        }}
        >
            <Accordion 
                      
            className="blackgradientBackground"
            elevation={8}>
            <AccordionSummary
            >
                <h1
                className="aboutTitle2"
                >My Personal Bio and Backstory into Coding </h1>
                <img
                style={{
                    margin: 'auto',
                    marginLeft: '2%'
                }}
                width={'30px'}
                height='30px'
                src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                ></img>
            </AccordionSummary>
            <AccordionDetails>
                <div
                className="aboutTextDiv"
                >
                    <h1
                     className="aboutBioTitle"
                    >How I Initially Got Into Coding</h1>
                <p>
                When it comes to the very start of  my coding journey, I like to tell people that I was <i>“coding before I even knew what coding was”.</i> Let me elaborate on that statement, when I was around eight years old I used to play an assortment of video games that revolved around its players being able to express their creativity and make content within the game. One of these games that I was absolutely addicted to growing up was called “Little Big Planet”.

               </p>
               <p>I’m not going to go too in depth about its details, but to make a long story short it’s a game centered around there being an infinite number of levels for players to play. This is because the game’s players are the main ones creating these levels. The tools that the game provides to help its players express their creativity are very efficient, but also very complicated to use. 
 </p>
               <Accordion
               onChange={(e, expanded)=>{
                if(expanded){
                    setShowVideoTitle(false)
                }
                else{
                    setShowVideoTitle(true)
                }
               }}
               elevation={0}
               style={{
                background: 'transparent',
                border: 'none'
               }}
               >
                <AccordionSummary
                onClick={()=>{
                    if(width <= 480 && showVideoTitle===true){
                        openInNewTab('https://drive.google.com/file/d/1J52J5aAOP6H7oSgaJL-xsQYZkad13aEd/preview')
                    }
                }}
                >
                    {showVideoTitle ? <h1
                    className="littleBigPlanetVideoTitle"
                    >
                        If your interested, Click This Title To See an In Depth Video Showing Off Little Big Planet's Creation System 
                        </h1> : <></>}
                </AccordionSummary>
                <AccordionDetails>
                  
                        {
                            width <= 480 ? <></> :
                             <iframe 
                    
                    src="https://drive.google.com/file/d/1J52J5aAOP6H7oSgaJL-xsQYZkad13aEd/preview" 
               
               className="mainAboutVideo"
               allow="autoplay" allowFullScreen></iframe>
                        }
                   
                
                    
                </AccordionDetails>
               </Accordion>
               
               
                <p>
                As cliche as it may sound, these games really gave me the  passion that I have for art today. I feel like they are also what gave me the natural niche for coding that I have as well. 

                </p>
                <h1
                className="aboutBioTitle"
                >My Background and Personaliy</h1>
                <p>
                I am an African American male born and raised in the city of Philadelphia. I am a proud member and advocate of the LGBT+ community. If I were to describe my personality with only a few character  traits, the first few traits that come to mind are my optimism, creativity, cheerfulness, passion, and determination. 


                </p>
                <p>
                When it comes to my creativity, I have many hobbies that I like to keep myself occupied with. I love making instrumentals on FL Studio, editing videos with Final Cut Pro X, making animations with Adobe After Effects, spray painting canvases, live streaming, writing,  gaming, etc. Anything that can really get my creative juices flowing. 

                </p>
                <p>
                When it comes to my optimism, I really feel like it is important to always try your hardest to maintain a positive mindset. At the end of the day, your mindset 100% affects your everyday life. It affects your daily interactions, your work ethic, your quality of work, and most importantly, your overall quality of life.

                </p>
                <p>
                When it comes to my passion and determination, when I am working on something, I really like to make sure the quality of its final product is the best it can be. I take great pride in the work that I produce, so when given an assignment, I am passionate and determined about going above and beyond in whatever way that I can. 


                </p>
                <p>
                What might come to you as a surprise, is that my focus throughout high school wasn’t actually coding at all, instead it was architectural engineering. I took a couple classes that focused on JavaScript in high school, but it wasn’t until I attended Flatiron School for coding that  I really plunged  into the programming world and learned everything that I needed to learn in order to become a certified full stack developer.

                </p>

                <h1
                className="aboutBioTitle"
                >
                    Giving Back To My Community
                </h1>
                <p>
                Being born and raised in the city of Philadelphia, I feel obligated to give back to my community in the best way that I can. I enjoy helping build my community by offering my software engineering expertise to small businesses that want a nice website to promote their work. It's a great feeling being able to give to people who might not be able to afford some of the common prices for a full stack developer to build their website from the ground up. I pride myself in assisting them, because at the end of the day I feel like I am contributing to the steady rise of  equality and ascension of the Black community within Philadelphia.


                </p>
                </div>
              
            </AccordionDetails>
        </Accordion>
        </Container>
       
        <div
        className="mainAboutContentDiv"
        >
            <div className="aboutBackgroundDiv">
                <div className="aboutBackgroundDivMaterial">
                    <h2
                    className="educationalBackgroundandWorkTitles"
                    >Educational Background</h2>
                    <div
                    className="educationDiv"
                    onClick={() => openInNewTab('https://flatironschool.com/')}
                    >
                        <div
                        className="educationHeaderDiv"
                        >
                        <p
                        className="educationParagrpah"
                        >
                            Flatiron School
                        </p>
                        <img 
                        className="educationImg"
                        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png"></img>
                        </div>
            
                        <p
                        className="educationParagrpah"
                        >
                            December 2021 - April 2022
                        </p>
                        <p
                        className="regularPTag"
                        >
                            <i>"
                            As a leader in the tech industry, Flatiron School believes that education is the best investment you can make in your future. We’re committed to helping  change lives and the world for the better.

Our courses provide an immersive, outcomes-driven curriculum for students looking to launch a career in Software Engineering, Cybersecurity, Data Science, or Product Design. Courses are offered both online and in-person on campuses across the country.

Flatiron School is frequently ranked as a top coding bootcamp by industry publications."
                            </i>
                           
                        </p>
                        <p
                        className="educationParagrpah"
                        >
                            Recieved Certificate of Completion, and Learned Ruby on Rails, React  and JavaScript.
                        </p>
                    </div>
                    <div
                    className="educationDiv"
                    onClick={() => openInNewTab('https://agora.org/')}
                    >
                        <div
                        className="educationHeaderDiv"
                        >
                        <p
                        className="educationParagrpah"
                        >
                            Agora Online Charter School
                        </p>
                        <img 
                        className="educationImg"
                        src='https://agora.org/wp-content/themes/agora/img/missingphoto-image.jpg'></img>
                        </div>
            
                        <p
                        className="educationParagrpah"
                        >
                            September 2018 - June 2019
                        </p>
                        <p
                        className="regularPTag"
                        >
                           <i>"Agora Cyber Charter School, established in 2005, is an online public school for Pennsylvania students in kindergarten through 12th grade. Agora’s rigorous curriculum is taught by Pennsylvania certified teachers trained to provide virtual instruction in real time and are focused on providing all students the educational resources and skills needed to become successful lifelong learners"</i>
                        </p>

                        <p
                        className="educationParagrpah"
                        >
                           Recieved High School Diploma
                        </p>
                    </div>
                    <div
                    className="educationDiv"
                    onClick={() => openInNewTab('https://hses.philasd.org/')}
                    >
                        <div
                        className="educationHeaderDiv"
                        >
                        <p
                        className="educationParagrpah"
                        >
                            George Washington Carver High School of Engineering and Science
                        </p>
                        <img 
                        className="educationImg"
                        src='https://www.philasd.org/hses/wp-content/uploads/sites/411/2017/12/Logo-Symbol-new@2x.png'></img>
                        </div>
            
                        <p
                        className="educationParagrpah"
                        >
                            September 2015 - June 2018
                        </p>
                        <p
                        className="regularPTag"
                        >
                           <i>"Carver E&S is a small high school, striving to attract academically talented, college-bound students from diverse backgrounds. We seek students who have interests in the fields of science, mathematics, engineering, technology, and medicine. We are committed to providing a rigorous curriculum with focus in these areas enriched by related extra-curricular opportunities. Our goals are to prepare our students with the academic and personal skills for collegiate success and to empower our students with the social and leadership skills to be lifelong learners and productive citizens."</i>
                        </p>
                    </div>


                </div>

                <div className="aboutBackgroundDivMaterial">
                    <h2
                    className="educationalBackgroundandWorkTitles"
                    >Work Experience</h2>

                    <div
                    className="educationDiv"
                    onClick={() => openInNewTab('https://www.linkedin.com/company/impactware-gotohelios/')}
                    >
                        <div
                        className="educationHeaderDiv"
                        >
                        <p
                        className="educationParagrpah"
                        >
                            Impactware
                        </p>
                        <img 
                        className="educationImg"
                        src={impactwarePictureAdress}
                        
                        ></img>
                        </div>
                        <p
                        className="educationParagrpah"
                        >
                        Front End Software Engineer Apprenticeship
                        </p>
            
                        <p
                        className="educationParagrpah"
                        >
                            November 2022 - February 2023
                        </p>
                        <ul>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                            {"Built out Impactware’s example client site (which is a test site for users to try out Impactware’s applications on) utilizing Next.js"}

                        </p>
                            </li>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                           {"Used vanilla JavaScript to build Impactware’s Event Tagger Menu for users to test on the example client website, and use in their own apps"}

                        </p>
                            </li>
                        <li>
                            <p
                        className="educationParagrpah"
                        >
                            {"Collaborated with coworkers to build out  Next.js/react components that were created on InVision"}

                        </p>
                        </li>

                        <li>
                            <p
                        className="educationParagrpah"
                        >
                            {"Utilized Cypress for end to end testing, and Story book for Component based UI/Frontend development"}

                        </p>
                        </li>


                        </ul>
                       
                    </div>
                    

                </div>
                

            </div>

            <div
            className="aboutcodingKnowledgeDiv"
            >
                <h2
                className="codingKnowledgeHeader"
                >Coding Knowledge</h2>
                <div
                className="aboutCodingKnowledgeFlexDiv"
                >
                    {/* <br />
                    <br /> */}

                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Java Script</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://cdn.worldvectorlogo.com/logos/next-js.svg">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Next.js</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >React</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Express js</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://www.adrenalina.es/wp-content/uploads/2020/04/desarrollador-ruby-on-rails.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Rails</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://w7.pngwing.com/pngs/390/229/png-transparent-logo-html5-brand-design-text-logo-number.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >HTML</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >CSS</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195568/sql-64a6e0f07773cf17581e76ca09e17dbc.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Sql</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Sqlite</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Postgresql</h3>

                    </div>
                   

                </div>



            </div>


        </div>
        
       </motion.div>
        </div>
    )
}

export default About