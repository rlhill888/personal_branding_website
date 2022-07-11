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
                <AccordionSummary>
                    {showVideoTitle ? <h1
                    className="littleBigPlanetVideoTitle"
                    >
                        If your interested, Click This Title To See an In Depth Video Showing Off Little Big Planet's Creation System 
                        </h1> : <></>}
                </AccordionSummary>
                <AccordionDetails>
                    <iframe src="https://drive.google.com/file/d/1J52J5aAOP6H7oSgaJL-xsQYZkad13aEd/preview" 
               
               className="mainAboutVideo"
               allow="autoplay" allowFullScreen></iframe>
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
                        src="https://yt3.ggpht.com/OdqbqZ6lz56qqxAxrnEqXV077THYZKbMioRHHJziknXycajWeueGwvhi-VRy88H3cfpYeUy6JQ=s900-c-k-c0x00ffffff-no-rj"></img>
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
                            Recieved Certificate of Completion, and Learned Full Stack Web Development, Ruby on Rails, React  and JavaScript.
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
                        src='https://scontent.fewr1-5.fna.fbcdn.net/v/t39.30808-6/279508686_399261502204860_9068764250762831577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SHbAZMBCDu8AX9FHli8&_nc_ht=scontent.fewr1-5.fna&oh=00_AT8skgcZYYOXN-BpACU-dxRUHm_q_Rz-AJha0Hi-Nqyh5w&oe=62CE4182'></img>
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
                    onClick={() => openInNewTab('https://www.courts.phila.gov/')}
                    >
                        <div
                        className="educationHeaderDiv"
                        >
                        <p
                        className="educationParagrpah"
                        >
                            First Judicial District of Philadelphia
                        </p>
                        <img 
                        className="educationImg"
                        src="https://www.courts.phila.gov/assets/img/sliders/fjd-seal250.png"></img>
                        </div>
                        <p
                        className="educationParagrpah"
                        >
                           Position Title: Judicial Clerk
                        </p>
            
                        <p
                        className="educationParagrpah"
                        >
                            January 2015 - March 2020
                        </p>
                        <ul>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                            Organized bar codes, scanned and entered Civil Case Management Reports and related documentation into Court's Civil Case Management System

                        </p>
                            </li>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                            Received and sorted mail, distributing mail to appropriate recipients and departments

                        </p>
                            </li>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                            Maintained record of incoming mail, ensuring delivery of outgoing mail to courier or post office 

                        </p>
                            </li>
                            <li>
                            <p
                        className="educationParagrpah"
                        >
                            Checked postal rates and weighed outgoing mail, and posted shipping labels on packages

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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Ruby</h3>

                    </div>
                    <div className="indivisualCodingKnowledgePlatform">
                        <img
                        className="indidivisualCodingKnowledgeImage"
                        src="https://w7.pngwing.com/pngs/782/228/png-transparent-ruby-on-rails-rubygems-amazon-dynamodb-ruby-text-logo-ruby-thumbnail.png">
                        </img>
                        <h3
                        className="indivisualCodingKnowledgeText"
                        >Rails</h3>

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