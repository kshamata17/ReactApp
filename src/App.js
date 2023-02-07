import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import Portfolio from './Portfolio';
import Services from './Services';
import Blog from './Blog';
import Cart from './Cart';
import Error from './Error';
import MainHeader from './MainHeader';
import './App.scss';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHeader />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />

        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
