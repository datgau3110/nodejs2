
import React, {useState, useEffect} from 'react';
import './style.css';
import Logo from './image/logo.png'
import {Link} from 'react-router-dom'
const Header = () => {
   const [toggleMenu , setToggleMenu] = useState(false)
   const[ScreenWidth, setScreenWidth] =useState
   (window.innerWidth)


   const toggleNav = () => {
       setToggleMenu(!toggleMenu)
   }
   useEffect(() =>{
          const changeWidth = () => {
              setScreenWidth(window.innerWidth);
          }
          window.addEventListener('resize', changeWidth)
          return () =>{
              window.removeEventListener('resize', changeWidth)
          }
   }, [])
    return (
        // <header>
        //     <img src={Logo} alt='Header' className='header-img' />
        //     <div> 
        //         {(toggleMenu || ScreenWidth  > 500) && (
        //         <ul id="Navbar">
                   
        //             <li><a className="active" href="index.html">Home</a></li>
        //             <li><Link to="/shop">Shop</Link></li>
                    
        //             <li><Link to="/about">About</Link></li>
        //             <li><Link to="/contact">Contact</Link></li>
        //             <li><Link to="/login">Login</Link></li>
        //             <li className="lg-bag"><a href="cart.html">
        //                 {/* <i className="far fa-shopping-basket"></i> */}
        //                 </a></li>
        //             <a  href="#" id="close"><i className="far fa-times"></i></a>
        //         </ul>
        //         )}
        //     </div>
        //     <div className="mobile">
        //      <a href="cart.html"><i className="far fa-shopping-basket"></i></a>
        //    <button  onClick={toggleNavbar} id="bar" className="fas fa-outdent"></button>
           
        // </div>
        // </header>
       <nav>
            <img src={Logo} alt='Header' className='header-img' />
           {(toggleMenu || ScreenWidth > 700) && (
             <ul className='list'>   
                   <li><a className="items" href="index.html">Home</a></li>
                     <li className='items'><Link to="/shop">Shop</Link></li>
                     
                      <li className='items'><Link to="/about">About</Link></li>
                      <li className='items'><Link to="/login">Login</Link></li>
                      <li className='items'><Link to="/Admin">Admin</Link></li>
            </ul>   
           )}
           
           <button onClick={toggleNav} id="bar"  className='fas fa-outdent'></button>
       </nav>
    )
}

export default Header