import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./tour-card.css"
import calculateAvgRating from '../utils/avgRating';


const Tourcard = ({ tour }) => {
    const { id, title, city, photo, price, featured, reviews } = tour
    const {totalRating,avgRating}=calculateAvgRating(reviews)
    return(
         <div className="tour__card">
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" />
                {featured && <span>Featured</span>}
            </div>
        </Card>

        <Card>
            <CardBody>
                <div className="card__top d-felx align-item-center justify-content-betwen">
                    <span className='tour__location d-flex align=items-center gap-1'>
                        <i class="ri-map-pin-line"></i> {city}
                    </span>
                    <span className='tour__rating d-flex align=items-center gap-1'>
                        <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}

                    </span>
                </div>
                <h5 className='tour_title'><Link to={`/tours/${id}`}>{title}</Link></h5>
                <div className="card__bottom d-felx align-item-center justify-content-between mt-3">
                    <h5>${price}<span>/per person</span></h5>
                    <button className='btn booking_btn'>
                        <Link to={`/tours/${id}`}>Book Now</Link>
                    </button>
                </div>
            </CardBody>
        </Card>
    </div>
    )
};

export default Tourcard