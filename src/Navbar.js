import React from "react";
import './Navbar.css'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


function NavBar(){

    function setActiveClass(name){

        const currentWindow= window.location.pathname

        if(currentWindow===name){
            return('navbarButtonActive')
        }
        else{
            return('navbarButton')
        }
    }


    const history = useHistory()

    return(
       <div
       className="navBar"
       >
        <button
        className={setActiveClass('/about')}
        onClick={()=> history.push('/about')}
        >
            <h1
            className="navbarHeader"
            >
                About
            </h1>
            

        </button>
        <button
       className={setActiveClass('/contact')}
       onClick={()=> history.push('/contact')}
        >
            <h1
             className="navbarHeader"
            >
                 Contact
            </h1>
           

        </button>
         <button
         className={setActiveClass('/featured_projects')}
         onClick={()=> history.push('/featured_projects')}
         >
            <h1
             className="navbarHeader"
            >
                Featured Projects
            </h1>
            
        </button>
        {/* <button
         className={setActiveClass('/freelance_inquiries')}
        onClick={()=> history.push('/freelance_inquiries')}
        >
            <h1>
                Freelance Inquiries
            </h1>
            
        </button> */}

       </div>
    )
}


export default NavBar