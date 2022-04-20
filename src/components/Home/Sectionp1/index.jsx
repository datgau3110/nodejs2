import React from 'react'
import './styled.css'
import ogo from './image/logo.png'
import ogo1 from './image/pay.png'
import ogo2 from './image/play.jpg'
import ogo3 from './image/app.jpg'

const Sectionp1 = () => {
  return (
    <footer className="section-p1">
    <div className="col">
        <img className="logo" src={ogo} />
        <h4>Contact</h4>
        <p> <strong>Address:</strong>Tổ 6 LỆ SƠN BẮC HÒA VÀNG THÀNH PHỐ ĐÀ NẴNG</p>
        <p><strong>Hours:</strong>10:00 -18:00, Mon - Sat</p>
     <div className="follow">
        <h4>Follow us </h4>
        <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
            
        </div></div>
   
    </div>

    <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery</a>
        <a href="#">Privacy policy</a>
        <a href="#">term & conditions</a>
        <a href="#">Contact Us</a>
    </div>
    <div className="col">
        <h4>Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>
    <div className="col insall">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
            <img src={ogo3} alt=""/>
            <img src={ogo2} alt=""/>
        </div>
        <p>Secured payment Gateways</p>
        <img src={ogo1} alt=""/>

    </div>
    <div className="copyright" >
        <p>@ 2021, Tech2 etc - HtMl Ecommerce Template</p>
    </div>
</footer>
  )
}

export default Sectionp1