import React from 'react'
import Silder from 'react-slick'
import ava01 from '../../assets/images/ava-01.jpg'
import ava02 from '../../assets/images/ava-02.jpg'
import ava03 from '../../assets/images/ava-03.jpg'


const Testimonial = () => {
    const settings = {
        dots: true,
        infinte: true,
        autoplay: ture,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpped: 2000,
        slideToshow: 3,
        responsive: 
        [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinte: true,
                    dots: true,
                },
            },
                {
                    breakpoint:576,
                    settings:{
                        slideToShow:1,
                        slideToScroll:1,
                    },
                },
                
        ]
    }
return <Silder {...settings}>
    <div className='testimonial py-4 py-3'>
        <p> happy happy happy happy happy happy</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">Jhon Doe</h5>
                <p>Customer</p>
            </div>

        </div>
    </div>
    <div className='testimonial py-4 py-3'>
        <p> happy happy happy happy happy happy</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">Lia Franklin</h5>
                <p>Customer</p>
            </div>

        </div>
    </div>
    <div className='testimonial py-4 py-3'>
        <p> happy happy happy happy happy happy</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">Jhon Doe</h5>
                <p>Customer</p>
            </div>

        </div>
    </div>
    <div className='testimonial py-4 py-3'>
        <p> happy happy happy happy happy happy</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">Jhon Doe</h5>
                <p>Customer</p>
            </div>

        </div>
    </div>
    <div className='testimonial py-4 py-3'>
        <p> happy happy happy happy happy happy</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">Lia Franklin</h5>
                <p>Customer</p>
            </div>

        </div>
    </div>
</Silder>
}

export default Testimonial