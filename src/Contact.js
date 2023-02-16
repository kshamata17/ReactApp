import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const gotoHome = () =>{
        navigate("/");
    };
    const goBack = () =>{
        navigate(-1);
    }

  return (
    <>
        <section>
            <h1>Contact Page</h1>
            <h2>Write us about your project</h2>
            <button onClick={gotoHome}>Go To Home Pge</button>
            <button onClick={() => goBack()}>Go Back</button>
        </section>
        </>
  );
}

export default Contact
