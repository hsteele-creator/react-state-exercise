import React, {useState} from "react";
import './Eightball.css'

const EightBall = ({data}) => {
    const random = data[Math.floor(Math.random() * data.length)]
    console.log(random)
    const {saying, setSaying} = useState("Think of a Question")
    const {color, setColor} = useState("black")
    return (
        <div>
            <div className="eightball" style={{backgroundColor: color}}>{saying}</div>
        </div>
    )
}

export default EightBall