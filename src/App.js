import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/About/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (

    <div>
      <BrowserRouter>
          <Header/>
       

          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            
          </Routes>
          <Footer/>
      
      </BrowserRouter>
      </div>
    
  );
}

export default App;
