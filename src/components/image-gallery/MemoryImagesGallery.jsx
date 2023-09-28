import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MemoryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPonits={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {galleryImages}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MemoryImagesGallery