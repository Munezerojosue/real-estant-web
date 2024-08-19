// src/App.jsx

import BestProperties from "./components/BestProperties";
import Footer from "./components/Footer";
import RealEstateMarkets from "./components/RealEstateMarkets";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="min-h-screen">
      <Testimonials />
      <BestProperties />
      <Team/>
      <RealEstateMarkets/>
      <Footer/>
    </div>
  );
}

export default App;
