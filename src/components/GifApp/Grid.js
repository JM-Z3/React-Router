import React, { useEffect, useState } from 'react'
import { GifGrid } from './GifGrid';
import { getGifs } from './helpers/getGifs';


export const Grid = ({search}) => {
    
    
    const [images, setImages] = useState([]);


    useEffect(() => {
        getGifs(search).then( st => {
            setTimeout(() => {
                setImages(st)
            }, 500);
        })
    }, [search])

    
    return (
        <div className='gif-flex container'>
            {
                images.map( img => {
                    return <GifGrid img={img} key={img.id}/>
                })
            }
        </div>
    )
}
