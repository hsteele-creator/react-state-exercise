import React, { useState } from 'react';
import './Eightball.css'

const EightBall = ({data}) => {
    const [saying, setSaying] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    const random = (arr) => {
        const random =  arr[Math.floor(Math.random() * arr.length)]
        return [random.color, random.msg]
    }

    // const randomSaying = (arr) => {
    //     const random =  arr[Math.floor(Math.random() * arr.length)]
    //     return random.msg
    // }

    const UpdateBall = () => {
        const ballData = random(data)

        setColor(ballData[0])
        setSaying(ballData[1])
    }

    return (
        <div>
            <div className="eightball" style={{backgroundColor: color}}>{saying}</div>

            <button onClick={() => UpdateBall()}>Choose a new saying</button>
        </div>
    )
}

export default EightBall