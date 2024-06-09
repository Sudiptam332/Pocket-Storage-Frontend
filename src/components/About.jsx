import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext);
    return (
        <div className='abt'>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste magni sed quibusdam tempore voluptates omnis tempora, veniam temporibus deserunt vel reprehenderit explicabo dolor earum. Quia inventore animi adipisci voluptates, quaerat fuga accusantium tenetur natus possimus, esse sed ex consectetur nulla voluptas eum autem corrupti molestias ducimus. Iure iusto odio sequi ea rerum non dolores vero laboriosam! Vel eaque odit neque itaque non quibusdam iure odio? Ut repudiandae esse optio id natus laboriosam distinctio odio aliquid quis suscipit, in eos temporibus magni! Iure mollitia velit tenetur perspiciatis totam, delectus dolor officia. Voluptatum iure est accusamus maxime, asperiores sit aliquam earum.</p>
        </div>
    )
}

export default About
