import '../styles/Footer.css'
import Email from "../assets/Email_logo.svg"
import Acc from "../assets/Acc_logo.svg"
import Article from "../assets/Article_logo.svg"
import Settings from "../assets/Settings_logo.svg"

function Footer({ children }) {
	return <div className='footer'>{children}
                
                    
                    <div class='footer-img'><img src={Article} /></div>
                    <div class='footer-img'><img src={Email} /></div>
                    <div>
                        <p> Coordonnées : adresse.random@gmail.com</p>
                    </div> 
                    <div class='footer-img'><img src={Settings} /></div>
                    <div class='footer-img'><img src={Acc} /></div>
               
                
            </div>
}

export default Footer