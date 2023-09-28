import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Imagesgallery from './Imagesgallery'
const MasonryGalleryImages = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }} >
            <Masonry >
                {
                    Imagesgallery.map((item, index) => (
                        <img
                         className='mansonry__img'
                         src={item}
                          key={index} 
                          alt="" 
                          style={{'width': '100%', display: "block", borderRadius: "10px"
                        }} />
                    ))
                }

            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryGalleryImages