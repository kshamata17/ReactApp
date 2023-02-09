// import './Home.scss';
import Products from './components/Products';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection/HeroSection.js';
// import './components/HeroSection/HeroSection.js;'
// import Bedroom from '../src/images/bedroom1.jpg'
const Home = () => {

  const data = {
    name: "Solutions for every corner",
    image: "./images/bg1.jpg",
  }
  return (
    <>
      {/* <section className='main__section'>
        <div>
          <img src={image}/>
        </div>
        <div className='content'>
          <h1>{name}</h1>
          <button className=''>Discover</button>
        </div>

        <div className='bottom__text'>
            <p>10% off for all products</p>
        </div>
      </section> */}
      
      {/* <HeroSection {...data}/> */}
      <HeroSection {...data} />
      <Products />
      <Cards />
    </>
  )
}

export default Home
