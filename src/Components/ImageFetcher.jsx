import React, { useEffect } from 'react'
import { Consumer } from './Context'

export default function ImageFetcher() {


    return (
        <Consumer>
            {({ data }) => {
                return (
                    <div className="col-4">
                        <div className="d-flex align-self-center justify-content-center h-100 ">
                            <img style={{maxHeight: '350px', width: 'auto' }} className=" rounded my-4" src={data} alt="A random dog breed" />
                        </div>
                    </div>
                )

            }}
        </Consumer>
    )
}

