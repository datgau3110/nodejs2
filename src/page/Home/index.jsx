import React from 'react'
import Banner from '../../components/Home/Banner'
import Banner3 from '../../components/Home/Banner3'
import Feature from '../../components/Home/Feature'
import Header from '../../components/Home/Header'
import Hero from '../../components/Home/Hero'
import Newsletter from '../../components/Home/Newsletter'
import Product1 from '../../components/Home/Product1'
import Sectionp1 from '../../components/Home/Sectionp1'
import Smbanner from '../../components/Home/Smbanner'

const Home = () => {
  return (
    <div>
       {/* {header} */}
       <Header/>
       {/* {hero} */}
       <Hero/>
       {/* {feature} */}
       <Feature/>
       {/* {product1} */}
       <Product1/>
       {/* {banner} */}
       <Banner/>
       {/* {Product1} */}
       <Product1/>
       {/* {sm-banner} */}
       <Smbanner/>
       {/* {banner3} */}
       <Banner3/>
       {/* {newwsletter} */}
       <Newsletter/>

       {/* {section-p1} */}
       <Sectionp1/>

    </div>
  )
}

export default Home