import React, { useState } from 'react'
import img1 from '../Assets/AMZN.svg';
import img2 from '../Assets/FB.png';
import img3 from '../Assets/GOOGL.png';


function Navbar() {


    return (
        <div>
            <h5 style={{ margin: '2px auto', color: 'blue', textAlign: 'center' }}> Stock Market Application</h5>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px auto' }}>
                <img style={{ width: '160px', height: '160px' }} src={img1} alt='img1' />
                <img style={{ width: '160px', height: '160px' }} src={img2} alt='img1' />
                <img style={{ width: '160px', height: '160px' }} src={img3} alt='img1' />


            </div>


        </div>
    )
}

export default Navbar
