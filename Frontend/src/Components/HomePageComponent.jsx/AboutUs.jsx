import { FaRegHandPointRight } from "react-icons/fa";

const About = () => {
    return ( 
        <section className="about">
            <div className="about-container">
                <div className="about-container-left">
                     <div>
                          <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1706892002/VirtuFit/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2023-10-21_lu%CC%81c_22.56_1_oep13t.svg" alt="people"/>
                     </div>
                </div>
                <div className="about-container-right">
                      <div className="about-container-right-box">
                      <h1>About <span>us</span></h1>
                      <h2>Chúng tôi cung cấp:</h2>
                      <ul>
                            <li>
                               <div><FaRegHandPointRight/></div>
                               <div>Trang phục đẹp</div>
                            </li>
                            <li>
                               <div><FaRegHandPointRight/></div>
                               <div>Trang phục đẹp</div>
                            </li>
                            <li>
                               <div><FaRegHandPointRight/></div>
                               <div>Trang phục đẹp</div>
                            </li>
                            <li>
                               <div><FaRegHandPointRight/></div>
                               <div>Trang phục đẹp</div>
                            </li>
                      </ul>
                      </div>
                </div> 
            </div>
        </section>
     );
}
 
export default About;