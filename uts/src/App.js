import './App.css';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import CardList from './components/Card';
import Testi from './components/Testi';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Hero/>
      <CardList/>
      <Testi/>
      <Footer/>

    </div>
  )
}
export default App;
