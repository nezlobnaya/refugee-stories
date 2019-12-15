import React from 'react';
import '../../index.css';
import Image from '../../images/immigrants_make_america.jpg'



const Home = () => {
    return ( 
      <div className='home-page'>
        <section>
            <h2>Voices of Refugees</h2>
            <img
                className='main-img'
                src={Image}
                alt='immigrants' />
        </section>
      </div>
     );
}
 
export default Home;
