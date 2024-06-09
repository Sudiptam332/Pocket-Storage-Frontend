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
                    <p>Welcome to Pocket Storage, your go-to digital organizer. Seamlessly save notes, store images, and manage documents all in one secure and convenient platform. Whether you're at home or on the go, Pocket Storage keeps your digital life streamlined and accessible. Experience the ease and security of Pocket Storage.</p>
                    <Link to="/signup" class="btn btn-light">Create Your Account</Link>
                </div>
            </div>

            <div className="welNote">
                <div className="welNoteLeft">
                    <img src={img1} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Notebook</h2>
                    <p>With Pocket Storage, capturing your thoughts and ideas has never been easier. Our note-saving feature ensures your important notes are always accessible and organized. Jot down reminders, brainstorm new ideas, or keep a daily journal. Whatever you need to remember, Pocket Storage has got you covered, keeping your notes safe and at your fingertips.
                    </p>
                </div>
            </div>

            <div className="welGalary">
                <div className="welNoteLeft">
                    <img src={img2} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Galary</h2>
                    <p>Store and manage your images effortlessly with Pocket Storage. Upload your favorite photos, organize them into albums, and access them anytime, anywhere. Preserve your memories with high-quality image storage, and share your favorite moments with friends and family. With Pocket Storage, your photos are always just a click away.
                    </p>
                </div>
            </div>

            <div className="welDoc">
                <div className="welNoteLeft">
                    <img src={img3} alt="" />
                </div>
                <div className="welNoteRight">
                    <h2>Document</h2>
                    <p>Keep your important documents safe and well-organized with Pocket Storage. Our platform provides secure storage and easy access to all your files whenever you need them. From work documents to personal files, manage everything in one place with confidence. Enjoy peace of mind knowing your documents are securely stored and readily available when you need them.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Welcome