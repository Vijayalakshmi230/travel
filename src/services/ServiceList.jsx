import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import wetherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: wetherImg,
        title: "Calculate Weather",
        desc: "Click the picture shows its beauty",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Click the picture shows its beauty",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Click the picture shows its beauty",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=>(
         <Col lg='3' key={index}>
            <ServiceCard item={item}/>
            </Col>
    ))
  }
  </>
   }
export default ServiceList