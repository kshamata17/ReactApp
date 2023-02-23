import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Services from './Services';
import Blog from './Blog';
import Cart from './Cart';
import Error from './Error';
import MainHeader from './MainHeader';
import Privacy from './Privacy';
import './App.scss';
import Products_gallery from './Products_gallery';
import Payment from './Payment';
import Paint from './Paint';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHeader />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="productsGallery" element={<Products_gallery />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="payment" element={<Payment />}/>
        <Route path="paint" element={<Paint />}/>
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
