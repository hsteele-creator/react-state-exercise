import React, {useState} from "react";
import './Eightball.css'

const EightBall = ({data}) => {

    const randomFunc = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    const {saying, setSaying} = useState("Think of a Question")
    const {color, setColor} = useState("green")
    return (
        <div>
            <div className="eightball" style={{backgroundColor: color}}>{saying}</div>

            <button onClick={() => randomFunc(data)}>Choose a new saying</button>
        </div>
    )
}

export default EightBall