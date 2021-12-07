import React from 'react'
import ReactPlayer from 'react-player'

export const Christmas = ({christmas}) => {
    return(
        <div className="container">
            <div className="container">
                <ReactPlayer url="macarena.mp4" controls={true} playing={true} loop={true} width='100%' height='100%' />
            </div>
        </div>
    )
}