import { useContext } from "react";
import {AllContext} from "../../context/allContext"
import { FaShopify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoPlaySkipBack } from "react-icons/io5";
const Home = () => {
    const {
        user,
        dispatchReducerNavUserMain,
        initialNavUserMain,
        dispatchReducerNavProfileMain,
        navInProfileMain,
        infoRegister,
        Register,
        registerError,
        registerLoading,
        handleChangeInfoRegister,
        infoLogin,
        handleChangeInfoLogin,
        Login,
        loginError,
        loginLoading,
        Logout 
    } = useContext(AllContext)
    
    return ( 
        <section className="home-section">
           <div className="home-container">
                <div className="navbar">                 
                       <div className="navbar-container">
                             <div className="logo">
                                   <img src="https://res.cloudinary.com/doquwihm4/image/upload/c_scale,h_29,w_109/v1706878343/VirtuFit/logo_rrtyva.svg" alt="logo"/>
                             </div>
                             <ul>
                                   <li className="stick">Home</li>
                                   <li>About us</li>
                                   <li>Shop</li>
                                   <li>Reviews</li>
                                   <li>Contact</li>
                             </ul>
                             <div className="auth-btn">
                                    {user == null ? (
                                   <div className="in-up">
                                          <div className="signIn-btn" onClick={()=> dispatchReducerNavUserMain("Login")}>
                                               Login
                                          </div>
                                          <div className="signUp-btn" onClick={()=>dispatchReducerNavUserMain("SignUp")}>
                                               Sign up
                                          </div>
                                    </div>
                                   
                                    ) : (
                                   <div className="avatar"  onClick={()=> {
                                        dispatchReducerNavUserMain("Profile"),
                                        dispatchReducerNavProfileMain("ProfileMain")
                                        }} >
                                        <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1706968527/VirtuFit/man-removebg-preview_tbl2zf.png" alt="avatar"/>
                                   </div>
                                    )}
                                    
                                  
                             </div>

                       </div>
                       <div className="profile-and-cart" style={{display: initialNavUserMain?.isProfile == true ? "flex" : "none"}}>
                          <div className="profile-and-cart-container" >
                          <div className="profile" style={{display: navInProfileMain?.isProfileMain == true ? "block" : "none"}}>
                                    <div className="close-btn"><IoClose/></div>
                                    <div className="background-avatar">
                                     <div className="avatar">
                                         <img src="https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?auto=compress&cs=tinysrgb&w=800" alt="avatar"/>
                                     </div>
                                     </div>
                                     <div className="add-avatar-btn">
                                         <div>
                                             thêm ảnh đại diện
                                         </div>
                                       
                                      </div>
                                      <ul>
                                          <li onClick={()=> dispatchReducerNavProfileMain("Cart")}>Your cart</li>
                                          <li onClick={()=>Logout()}>Đăng xuất</li>
                                      </ul>
                              </div>
           
                              <div className="cart" style={{display: navInProfileMain?.isCart == true ? "block" : "none"}}>
                                  <div className="close-btn" onClick={()=>dispatchReducerNavProfileMain("closeCart")}><IoClose/></div>
                                  <h2>your cart</h2>
                                  <div className="table">
                                        <table>
                                             <thead>
                                                <tr>
                                                  <th>Ảnh sản phẩm</th>
                                                   <th>Giá</th>
                                                   <th>SL</th>
                                                   <th>Thành tiền</th>
                                                   <th>Xoá</th>
                                                </tr>
                                                  
                                             </thead>
                                             <tbody>
                                                 <tr>
                                                 <td>
                                                        <div>
                                                            <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1707122430/VirtuFit/j3oc912qiqouibirwkgq.png" alt="product"/>
                                                        </div>
                                                   </td>
                                                   <td>20.000</td>
                                                   <td>2</td>
                                                   <td>40.000 đ</td>
                                                   <td><MdDelete/></td>
                                                 </tr>
                                             
                                             </tbody>
                             
                                             
                                        </table>
                                  </div>
                                  <div className="line-horizon"></div>
                                  <div className="buy-btn" onClick={()=> dispatchReducerNavProfileMain("BuyNow")}>
                                        <div>Buy</div>
                                        <div>100K</div>
                                  </div>
                              </div>
                              <div className="info-order" style={{display: navInProfileMain?.isBuyNow == true ? "block" : "none"}}>
                                     <div className="info-order-container">
                                            <div className="back-btn" onClick={()=>dispatchReducerNavProfileMain("closeBuyNow")}><IoPlaySkipBack/></div>
                                            <h1>Thông tin người nhận</h1>
                                            <div className="form">
                                                  <div>
                                                     <strong>Tên người nhận</strong>
                                                     <input type="text" placeholder="typing here"/>
                                                  </div>
                                                  <div>
                                                     <strong>Số điện thoại</strong>
                                                     <input type="text" placeholder="typing here"/>
                                                  </div>
                                                  <div>
                                                     <strong>Địa chỉ nhận hàng</strong>
                                                     <input type="text" placeholder="typing here"/>
                                                  </div>
                                                  <textarea placeholder="Bạn cần lưu ý điều gì???"></textarea>
                                                  <div className="submit-btn">
                                                          Chốt đơn
                                                  </div>
                                            </div>
                                     </div>
                              </div>
                          </div>
                             
                       </div>
                          
               </div>
             
                <div className="intro-info">
                       <div className="intro-info-left">
                            <div className="intro-text">
                                <h3>I'm here</h3>
                                <h1>Try on trends</h1>
                                <h2> shine<span> bright</span></h2>
                                <h5>Bạn có thể dễ dàng khám phá và trải nghiệm các xu hướng thời trang mới nhất mà không cần phải tốn thời gian đi mua sắm. Thử qua các phong cách khác nhau, tìm kiếm những trang phục phù hợp với vóc dáng và sở thích của bạn, và tự tin thể hiện bản thân một cách rạng rỡ nhất.</h5>
                            </div>
                            <div className="shop-btn">
                                <div className="circle">
                                     <FaShopify/>
                                </div>
                                <div className="ellipse">
                                       shop now
                                </div>
                            </div>
                       </div>
                       <div className="intro-info-right">
                            <div>
                                <img src="https://res.cloudinary.com/doquwihm4/image/upload/v1706883089/VirtuFit/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2023-10-21_lu%CC%81c_21.00_1_aiygj1.svg"/>
                            </div>
                       </div>
                </div>
           </div>
           <div className="form-in-up" style={{display:initialNavUserMain?.isLogin == true || initialNavUserMain?.isSignUp == true ? "flex" : "none"}}>

                <div className="form-in-up-container">
                     <div className="form-in" style={{display: initialNavUserMain?.isLogin == true ? "flex" : "none"}}>
                              <div className="logo">
                                   <img src="https://res.cloudinary.com/doquwihm4/image/upload/c_scale,h_29,w_109/v1706878343/VirtuFit/logo_rrtyva.svg" alt="logo"/>
                              </div>
                              <div className="slogan">
                                   Try all, chose your best
                              </div>
                              <div className="text-please">
                                   Please login to your account
                              </div>
                              <div className="form-input">
                                   <input type="text" placeholder="your email" onChange={(e)=> handleChangeInfoLogin({
                                        ...infoLogin,
                                        email:e.target.value
                                   })} value={infoLogin.email}/>
                                   <input type="password" placeholder="your password" onChange={(e)=> handleChangeInfoLogin({
                                        ...infoLogin,
                                        password:e.target.value
                                   })} value={infoLogin.password}/>
                                   <div className="error">{loginError?.error}</div>
                                   <button onClick={()=>Login()}>{registerLoading ? "loading" : "Login"}</button>
                              </div>
                              <div className="nav-to-up">
                                   <div>
                                      Don't have an account
                                   </div>
                                   <div  onClick={()=>dispatchReducerNavUserMain("SignUp")}>sign up</div>
                              </div>
                      </div>
                     <div className="form-up" style={{display: initialNavUserMain?.isSignUp == true ? "flex" : "none"}}>
                              <div className="logo">
                                   <img src="https://res.cloudinary.com/doquwihm4/image/upload/c_scale,h_29,w_109/v1706878343/VirtuFit/logo_rrtyva.svg" alt="logo"/>
                              </div>
                              <div className="slogan">
                                   Try all, chose your best
                              </div>
                              <div className="text-please">
                                   Please create an account
                              </div>
                              <div className="form-input">
                                   <input type="text" placeholder="your name" onChange={(e)=>handleChangeInfoRegister({
                                        ...infoRegister,
                                        name:e.target.value
                                   })} value={infoRegister.name}/>
                                   <input type="text" placeholder="your email" onChange={(e)=>handleChangeInfoRegister({
                                        ...infoRegister,
                                        email:e.target.value
                                   })} value={infoRegister.email}/>
                                   <input type="password" placeholder="your password" onChange={(e)=>handleChangeInfoRegister({
                                        ...infoRegister,
                                        password:e.target.value
                                   })} value={infoRegister.password}/>
                                   <div className="error">{registerError?.error}</div>
                                   <button onClick={()=>Register()}>{registerLoading ? "loading" : "Register"}</button>
                              </div>
                              <div className="nav-to-in">
                                   <div>
                                      You have had an account
                                   </div>
                                   <div onClick={()=>dispatchReducerNavUserMain("Login")}>sign in</div>
                              </div>
                     </div>
                     <div className="form-only-text">
                       <div className="close-btn" onClick={()=>dispatchReducerNavUserMain("closeAll")}> <IoClose/></div>
                       <div className="text-box">
                            <h1>We are more than just a company</h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                       </div>
                    </div>
                </div>
               
               
           </div>
          
        </section>
     );
}
 
export default Home;
