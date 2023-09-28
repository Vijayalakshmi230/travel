import React from 'react'
import Tourcard from '../../shared/Tourcard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

const FeaturedTour = () => {
  return <>
  {
    tourData?.map(tour=>(
        <Col lg='3' className='mb-4'>
            <Tourcard tour={tour}/>

        </Col>
    ))
  }
  </>
}

export default FeaturedTour