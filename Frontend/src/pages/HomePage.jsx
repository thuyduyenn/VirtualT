import Home from "../Components/HomePageComponent.jsx/Home"
import About from "../Components/HomePageComponent.jsx/AboutUs";
import Shop from "../Components/HomePageComponent.jsx/Shop";
import Reviews from "../Components/HomePageComponent.jsx/Reviews"
import Footer from "../Components/HomePageComponent.jsx/Footer"
const HomePage = () => {
     
    return ( 
        <div className="home-page">
              <Home/>
              <About/>
              <Shop/>
              <Reviews/>
              <Footer/>
        </div>
     );
}
 
export default HomePage;