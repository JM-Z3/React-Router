import React from 'react'

export const GifGrid = ({img}) => {
    return (
        <div className='gif-flex-column'>
            <img className='gif-img' src={img.url}></img>
            <p className='gif-p'>{img.title}</p>
        </div>
    )
}
