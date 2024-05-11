import React from "react";
// import Navbar from "./Components/Navbar.jsx";
import WithSubnavigation from "./Components/navbar.jsx";
import Home from "./Components/hero.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "./Components/box.jsx";
import GridBlurredBackdrop from "./Components/testimonial.jsx";
import LargeWithAppLinksAndSocial from "./Components/footer.jsx";
import gridListWithCTA from "./Components/carousal.jsx";



const App=()=>{
  return(
    <div className="App">
      <WithSubnavigation/>
      <Home/>
      <CardComponent/>
      <GridBlurredBackdrop/>
      <gridListWithCTA/>
      <LargeWithAppLinksAndSocial/>
      
     
     
    </div>
  )
}
export default App;
