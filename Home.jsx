import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Testimony from './Testimonial'
import Faq from './Faq'
import PartnerLogo from './PartnerLogo'
import Hero from './Hero'

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <PartnerLogo/>
            <Testimony/>
            <Faq/>
            <Footer/>
            

            
        </div>
    )
}

export default Home
