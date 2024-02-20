import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
const Reviews = () => {
    return ( 
        <section className="reviews">
              <div className="reviews-container">
                   <div className="reviews-container-left">
                         <div className="background">
                              <div className="reviews-image">
                                     <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1706968527/VirtuFit/man-removebg-preview_tbl2zf.png" alt="reviewer"/>
                              </div>
                         </div>
                   </div>
                   <div className="reviews-container-right">
                           <div className="reviews-container-right-box">
                                 <h1>they <span>Said</span></h1>
                                 <h3>We love your service</h3>
                                 <h5>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                                 <div className="reviewer">
                                      <div className="avatar-reviewer">
                                            <img src="https://images.pexels.com/photos/18099926/pexels-photo-18099926/free-photo-of-dan-ba-mo-hinh-thanh-th-t-th-ch-p-nh.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="avatar"/>
                                      </div>
                                      <div className="info">
                                          <div>Le Thi Thuy Duyen</div>
                                          <div>20/12/2022</div>
                                      </div>
                                       
                                 </div>
                                 <div className="next-or-back">
                                      <div className="comment-btn">
                                             comment
                                      </div>
                                      <div className="next-or-back-btn">
                                           <div>
                                               <IoPlaySkipBack />
                                           </div>
                                           <div>
                                               <IoPlaySkipForward/>
                                           </div>
                                      </div>
                                 </div>
                           </div>
                    </div>
              </div>
        </section>
     );
}
 
export default Reviews;