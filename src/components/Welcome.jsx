import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/Welcome.png"
import img1 from "../assets/note.jpg"
import img2 from "../assets/galary.jpg"
import img3 from "../assets/doc.png"
import Footer from './Footer'
import Spiner from './Spiner'

const Welcome = () => {
    return (
        <>

            <div className="welcomeContainer">
                <div className="welcomeLeft">
                    <img src={img} alt="" />
                </div>
                <div className="welcomeRight">
                    <h2>Pocket Storage</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis.
                    </p>
                    <Link to="/signup" class="btn btn-light">Create Your Account</Link>
                </div>
            </div>

            <div className="welNote">
                <div className="welNoteLeft">
                    <img src={img1} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Notebook</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis.
                    </p>
                </div>
            </div>

            <div className="welGalary">
                <div className="welNoteLeft">
                    <img src={img2} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Galary</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis.
                    </p>
                </div>
            </div>

            <div className="welDoc">
                <div className="welNoteLeft">
                    <img src={img3} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Document</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nisi beatae? Mollitia odit sunt in voluptatem quaerat ullam nisi debitis.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Welcome