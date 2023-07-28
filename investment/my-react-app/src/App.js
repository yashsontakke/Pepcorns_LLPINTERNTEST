import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MidContainer from './components/MidContainer';
import InvestContainer from './components/InvestContainer';
import Footer from './components/Footer';
import Figure from './components/Figure';

function App() {
  return (
    <div>
      <Navbar />
      <div className='middle' style={{margin:'2rem' , marginTop:"50px"}}>
        <MidContainer />
        <div style={{display:'flex'}}>
          <Figure />
          <InvestContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
