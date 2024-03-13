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
import Login from './components/login';
import Register from './components/register';
import ProductDetail from './components/productDetail';
import AllProducts from './components/allProducts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<AllProducts/>}></Route>
        {/* <Route path="/product/:id" element={<ProductDetail/>}></Route> */}
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Routes>
     <Footer/>
     </div>
  );
}

export default App;
