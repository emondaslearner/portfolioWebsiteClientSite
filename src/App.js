import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Connect></Connect>
      <Footer></Footer>
    </>
  );
}

export default App;
