import Header from "./components/Header";
import About from "./components/About";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Pricing from "./components/Pricing";


function App() {
  return (
    <div className="md:container md:mx-auto">
     <Header />
     <About />
     <Brand />
     <Contact />
     <Mission />
     <Pricing />
     <Footer />
    </div>
  );
}

export default App;
