import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MemoryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPonits={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {galleryImages.maps((item,index)=>(
                <img className="mansonry__img"src={item} key={index} alt="" style={{'width':'100%','display':'block',borderRadius:"10px"}}/>
            ))}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MemoryImagesGallery