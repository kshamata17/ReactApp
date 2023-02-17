import React from 'react';
import '../src/Contact.scss';
import HeroSection from './components/HeroSection/HeroSection';

const Contact = () => {
    const data = {
        name: "Contact Us",
        image: "./images/bg7.jpg",
      };

  return (
    <>
        <section>
            <HeroSection  {...data}/>
            <h2>Feel free to contact us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.883135720289!2d85.34015583080537!3d27.71818832459702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1910bbc9b25b%3A0xd9999b84ed09d731!2sUnitech%20IT%20Solution%20Pvt%20Ltd.!5e0!3m2!1sen!2snp!4v1676614547895!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className='container__form'>
            <h2>write us about your project</h2>
                <div className='contact__form'>
                    <form action='#' method='POST' className='contact__inputs'>
                        <input type="text"
                               name="Username"
                               placeholder="Username*"
                               autoComplete="off"
                               className="border__color"
                               required
                        />
                        <input type="email"
                               name="Email"
                               placeholder="Email*"
                               autoComplete="off"
                               className="border__color"
                               required
                        />
                        <textarea name='message' placeholder="Your Message" cols='30' rows='6'></textarea>
                        <input type='submit' value='SEND'/>

                    </form>
                </div>
            </div>

        </section>
        </>
  );
}

export default Contact
