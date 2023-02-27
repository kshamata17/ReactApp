import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

const Home = () => {
  return (
    <>
      <div className='app'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Home
