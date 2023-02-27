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
import ProductsGallery from './ProductsGallery';
import Payment from './Payment';
import Paint from './Paint';
import ServiceDetail1 from './ServiceDetail1';
import ServiceDetail2 from './ServiceDetail2';
import ServiceDetail3 from './ServiceDetail3';
import ServiceDetail4 from './ServiceDetail4';
import ServiceDetail5 from './ServiceDetail5';
import ServiceDetail6 from './ServiceDetail6';
import ServiceDetail7 from './ServiceDetail7';
import ServiceDetail8 from './ServiceDetail8';
import ServiceDetail9 from './ServiceDetail9';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHeader />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="productsGallery" element={<ProductsGallery />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="payment" element={<Payment />}/>
        <Route path="paint" element={<Paint />}/>
        <Route path="service1" element={<ServiceDetail1 />} />
        <Route path="service2" element={<ServiceDetail2 />} />
        <Route path="service3" element={<ServiceDetail3 />} />
        <Route path="service4" element={<ServiceDetail4 />} />
        <Route path="service5" element={<ServiceDetail5 />} />
        <Route path="service6" element={<ServiceDetail6 />} />
        <Route path="service7" element={<ServiceDetail7 />} />
        <Route path="service8" element={<ServiceDetail8 />} />
        <Route path="service9" element={<ServiceDetail9 />} />
        <Route path="*" element={<Error/>} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
