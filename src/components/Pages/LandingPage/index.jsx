import React from 'react'
import Header from '../../header'
import HeroSection from '../../hero-section'
import ServiceSection from '../../services-section'
import ScheduleSection from '../../schedule-section'
import ReviewSec from '../../review-section'
import LocationSec from '../../location-section'
import Footer from '../../footer'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ServiceSection />
            <ScheduleSection />
            <ReviewSec />
            <LocationSec />
            <Footer />
        </div>
    )
}

export default LandingPage
