import React from "react";
import fb from '../images/fb.png'
import insta from '../images/Instagram_logo_2022.png'
import twitter from '../images/Logo_of_Twitter.png'
import linkedin from '../images/linkedin.png'
import { Link } from "react-router-dom";

const Socials = () => {
    return(
        <div>
            
            <br/><br/>

            <div class="lower">
            <div class="imgs">
                <div class="insta"><Link to="https://www.instagram.com/"><img src={insta}/></Link></div>
                <div class="twitter"><Link to="https://twitter.com/i/flow/login"><img src={twitter}/></Link></div>
                <div class="linkedin"><Link to="https://www.linkedin.com/"><img src={linkedin}/></Link></div>
            </div>
            <div class="imgs">
                <div class="fb"><Link to="https://www.facebook.com/"><img src={fb}/></Link></div>
                
            </div>
            <div id="date"></div>
        </div>

        </div>
    )
}

export default Socials