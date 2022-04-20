import React from 'react';
import './style.css'
import eature from './image/480.jpg';
import Feature1 from './image/480.jpg';
import Feature2 from './image/480.jpg';
import Feature3 from './image/480.jpg';
import Feature4 from './image/480.jpg';
import Feature5 from './image/480.jpg';

const Feature = () => {
  return (
    <section id="feature" class="section-p1">
    <div className="fe-box">
    <img src={eature} />
        <h6>Free shipping</h6>
    </div>
    <div className="fe-box">
    <img src={Feature1} />
        <h6>Online Order</h6>
    </div>
    <div className="fe-box">
    <img src={Feature2} />
        <h6>Save Money</h6>
    </div>
    <div className="fe-box">
    <img src={Feature3} />
        <h6>Promotions</h6>
    </div>
    <div className="fe-box">
    <img src={Feature4} />
        <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
    <img src={Feature5} />
        <h6>Support</h6>
    </div>

</section>
  )
}

export default Feature