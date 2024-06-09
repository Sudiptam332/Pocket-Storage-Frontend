import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext);
    return (
        <div className='abt'>
            <h2>About us</h2>
            <p>Welcome to Pocket Storage, your go-to digital organizer. Seamlessly save notes, store images, and manage documents all in one secure and convenient platform. Whether you're at home or on the go, Pocket Storage keeps your digital life streamlined and accessible. Experience the ease and security of Pocket Storage today! <br />  <br /> With Pocket Storage, capturing your thoughts and ideas has never been easier. Our note-saving feature ensures your important notes are always accessible and organized. Jot down reminders, brainstorm new ideas, or keep a daily journal. Whatever you need to remember, Pocket Storage has got you covered, keeping your notes safe and at your fingertips. <br />  <br /> Store and manage your images effortlessly with Pocket Storage. Upload your favorite photos, organize them into albums, and access them anytime, anywhere. Preserve your memories with high-quality image storage, and share your favorite moments with friends and family. With Pocket Storage, your photos are always just a click away. <br />  <br /> Keep your important documents safe and well-organized with Pocket Storage. Our platform provides secure storage and easy access to all your files whenever you need them. From work documents to personal files, manage everything in one place with confidence. Enjoy peace of mind knowing your documents are securely stored and readily available when you need them.</p>
        </div>
    )
}

export default About
