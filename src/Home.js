// import './Home.scss';
import Products from './components/Products';
import HeroSection from './components/HeroSection/HeroSection.js';
import Welcome from './components/Welcome';
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
      <Welcome />
      <Products />

    </>
  )
}

export default Home
