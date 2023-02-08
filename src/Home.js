import './Home.scss';
import Products from './components/Products';

const Home = () => {
  return (
    <>
      <section className='main__section'>
        <div className='content'>
          <h1>Solutions for every corner</h1>
          <button className=''>Discover</button>
        </div>

        <div className='bottom__text'>
            <p>10% off for all products</p>
        </div>
      </section>
      <Products />
    </>
  )
}

export default Home
