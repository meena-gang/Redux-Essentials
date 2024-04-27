import React from 'react'
import ImageCard from '../ImageCard'

const Gallery = () => {
  return (
    <div className='cards'>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=1" title="Random title 1" price="$10.99"/>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=2" title="Random title 2" price="$12.99"/>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=3" title="Random title 3" price="$15.99"/>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=4" title="Random title 4" price="$11.99"/>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=5" title="Random title 5" price="$12.99"/>
        <ImageCard image="https://source.unsplash.com/random/200x200?sig=6" title="Random title 6" price="$18.99"/>

    </div>
  )
}

export default Gallery