import React from 'react'
import { Consumer } from './Context'

export default function Counter() {
    return (
        <Consumer>
            { ({ message, score, actions}) => {
                return (
                    <div className="col-4 d-block align-self-center">
                        <h1>{message}</h1>
                        <h3>{score}</h3>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-lg btn-primary m-2" onClick={() => actions.updateScore(prevScore => prevScore + 1)}> + </button>
                            <button
                                style={{ padding: '0 .94em' }}
                                className="btn btn-lg btn-danger m-2"
                                onClick={() => actions.updateScore(prevScore => prevScore < 1 ? prevScore : prevScore - 1)}> - </button>
                        </div>
                        <div className="d-flex  justify-content-center">
                            <button className="btn btn-lg btn-info m-2" onClick={() => actions.updateScore(prevScore => prevScore + 10)}> +10 </button>
                            <button className="btn btn-lg btn-warning m-2" onClick={() => actions.updateScore(prevScore => prevScore < 1 ? prevScore : prevScore - 10)}> -10 </button>
                        </div>
                    </div>
                )
            }}

        </Consumer>
    )
}
