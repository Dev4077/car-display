import React from 'react'
import './index.scss'
import FiveStar from '../../assets/images/5-star.png'
import person1 from '../../assets/images/dave.png'
import person2 from '../../assets/images/lambmich.png'
import person3 from '../../assets/images/melissa.png'

const ReviewSec = () => {
    return (
        <div className="review-section container my-5">
            <h2 className="text-center text-primary mb-5 review-title">ABOVE AND BEYOND</h2>
            <div className="row">
                <div className="col-12 col-md-4 text-center">
                    <div className="card p-3 h-100 review-card review-card">
                        <img src={FiveStar} alt='5 star' className="mb-3 five-star" />
                        <img src={person1} alt="Dave" className="rounded-circle mb-3 img-icon" />
                        <p className="">Best shop to have your windshield or any other glass work installed or replaced on your car or truck. They are the best with classic cars and trucks. Even able to work with custom auto glass.</p>
                        <p className="font-weight-bold">- Dave Lawless</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <div className="card p-3 h-100 review-card">
                        <img src={FiveStar} alt='5 star' className="mb-3 five-star" />
                        <img src={person2} alt="Lambmich" className="rounded-circle mb-3 img-icon" />
                        <p className="">I was referred to Team Acme by my auto insurance company to complete a windshield replacement on my vehicle. Acme did a fantastic job! Doyle, the office manager, was great with communication. The job was completed on time and in a professional manner. Highly recommended!</p>
                        <p className="font-weight-bold">- Lambmich</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <div className="card p-3 h-100 review-card">
                        <img src={FiveStar} alt='5 star' className="mb-3 five-star" />
                        <img src={person3} alt="Melissa" className="rounded-circle mb-3 img-icon" />
                        <p className="">I had a perfect experience. Cody booked my appointment and got my vehicle tinted perfectly in a very timely manner and at a very fair price. I highly recommend Team Acme!</p>
                        <p className="font-weight-bold">- Melissa Danielson</p>
                    </div>
                </div>
            </div>
            <div className="btn-read-more container d-flex">
                <button className='mx-auto'>read more</button>
            </div>
        </div>
    )
}

export default ReviewSec
