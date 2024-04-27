import React from 'react'

const ImageCard = ({title,price,image}) => {
  return (
    <div className='card'>
        <div style={{width:"100%" ,borderTopRightRadius: '10px', overflow: 'hidden',borderTopLeftRadius: '10px'}}>
            <img src={image} alt="" width="100%" height='100%'/>
        </div>
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default ImageCard