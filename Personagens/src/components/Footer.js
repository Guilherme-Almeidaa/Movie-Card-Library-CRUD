import React from 'react';
import linkedin from '../imgs/linkedin.png';

function Footer () {
    return (
        <footer  >
            <div className="footer-cont" >
                <a  href="https://www.linkedin.com/in/guilherme-almeidaa/" target="_blank" rel="noreferrer" className="social" > 
                 <img className="img-social" alt="social" src ={linkedin}/>
                </a>
            </div>
            
        </footer>

    )
}

export default Footer;