import React from "react";
import './LandingPage.css'
import videobg from './videos_and_pictures/portfolio_background_finalized_AdobeExpress.mp4'

function LandingPage(){

    return(
        <>
        <div
        style={{
           width: '100vw',
           height: '100vh'

        }}
        >
           <video className="videoBackground" src={videobg} autoPlay loop muted/>
         

             <div
           className="container"
           >
           <div>

            
           </div>
           </div>
    
          
            

        </div>
        
        </>
    )
}

export default LandingPage