import './App.css';
import Navabar from './Components/Navabar';
import Home from './pages/Home';
import Footer from './Components/Footer';
import About from './pages/About';
import Smartwatch from './pages/Smartwatch';
import Iphone from  './pages/Iphone'
import Lovepower from './pages/Lovepower';
import Second from './pages/Second';
import Section from './pages/Section';
function App() {
  return (
    <div className='App'>
      <Navabar/>
      <Home/>
      <Smartwatch/>
      <Iphone/>
      <Lovepower/>
      <Second/>
      <Section/>
      <About/>
      <Footer/>
    </div>
  );
}
export default App;
