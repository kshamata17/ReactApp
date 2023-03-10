// import './Home.scss';
import Products from './components/Products';
import HeroSection from './components/HeroSection/HeroSection.js';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
const Home = () => {

  const data = {
    name: "Solutions for every corner",
    image: "./images/bg7.jpg",
  }
  return (
    <>
      <HeroSection {...data} />
      <Welcome />
      <Products />
      <Projects/>
      <Testimonials/>
    </>
  )
}

export default Home
