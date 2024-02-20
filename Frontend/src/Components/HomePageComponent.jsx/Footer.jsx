import { BsSendFill } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { SiZalo } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
const Footer = () => {
    return ( 
        <section className="footer">
           <div className="footer-container">
                <div className="footer-let">
                      <h1>Let's <span>contact</span> me</h1>
                      <div className="home-btn">
                          <div><IoHome/></div>
                          <div>Home</div>
                      </div>
                </div>
                <div className="line-red"></div>
                <div className="footer-contact">
                      <div className="footer-logo">
                              <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1706878343/VirtuFit/logo_rrtyva.svg" alt="logo"/>
                      </div>
                      <div className="info-contact">
                             <h1>Contact info</h1>
                             <ul>
                                 <li>thuyduyen090204@gmail.com</li>
                                 <li>086 687 0204</li>
                             </ul>
                            
                      </div>
                      <div className="send-mail-and-social">
                                  <h1>Send mail</h1>
                                  <div className="input-send-mail">
                                     <input type="email" placeholder="typing your email"/>
                                     <div><BsSendFill /></div>
                                  </div>
                                  <ul className="social">
                                          <li><a href=""><ImFacebook2/></a></li>
                                          <li><a href=""><SiZalo /></a></li>
                                          <li><a href=""><RiInstagramFill/></a></li>
                                  </ul>
                             </div>
                </div>
                <div className="line-red"></div>
                <div className="author">le thi thuy duyen</div>
           </div>
        </section>
     );
}
 
export default Footer;