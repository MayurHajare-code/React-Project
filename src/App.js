import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'
import NoMatch from './components/noMatch';
import Product from './components/product';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Routes>
     <Footer/>
     </div>
  );
}

export default App;
