import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MidContainer from './components/MidContainer';
import InvestContainer from './components/InvestContainer';
import Footer from './components/Footer';
import Figure from './components/Figure';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MidContainer/>
      <InvestContainer/>
      <Figure/>
      <Footer/>
    </div>
  );
}

export default App;
