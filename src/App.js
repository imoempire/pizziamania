import Carousel from './Components/Carousel/Carousel';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutPizza from './Components/AboutPizza/PizzaTypes';
import PizzaTypes from './PizzaTypes/PizzaTypes';

function App() {
  return (
   <>
  <Navbar />
  <Carousel />
  <AboutPizza />
  <PizzaTypes type="Pizza Types" />
  <Footer />
   </>
  );
}

export default App;
