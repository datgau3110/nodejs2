import React from 'react';
import './styled.css';


const Newsletter = () => {
  return (
    <section id="newsletter" class="section-p1 section-m1">
    <div className="newstext">
        <h4> Sign Up For newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offters</span>  </p>
    </div>
    <div className="form">
        <input type="text" placeholder="Your email address"/>
        <button class="normal">Sign Up</button>
    </div>
</section>
  )
}

export default Newsletter