import React from 'react'
import img from "../assets/Loading.gif"

const Spiner = () => {
    return (
        <div className="spiner text-center">
            <img src={img} alt="" />
        </div>
    )
}

export default Spiner