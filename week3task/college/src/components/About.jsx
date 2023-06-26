import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import dirpic from '../images/4.jpeg'

const  About = () =>{
    return (
        <div>
            <main className="aboutpage">
                <h2>About Us</h2>
                <p className="aboutp">Welcome to our educational institute! We are dedicated to providing high-quality education and fostering a positive learning environment for our students.</p>
                <p className="aboutp">At our institute, we offer a wide range of programs and courses designed to meet the diverse needs and interests of our students. Our experienced faculty members are passionate about teaching and committed to helping students succeed.</p>
                <p className="aboutp">Our institute is equipped with state-of-the-art facilities, including modern classrooms, well-equipped laboratories, and a library with a vast collection of resources. We believe in providing a holistic education that focuses not only on academic excellence but also on the overall development of our students.</p>
                <p className="aboutp">Whether you're looking to acquire new skills, enhance your career prospects, or pursue higher education, we have the right program for you. Join us on this exciting educational journey and unlock your full potential.</p>
                <h2>Director's Message</h2>
                <img class="dirpic" src={dirpic}/>

                <p>I am happy to take this opportunity to introduce you to the University Institute of Engineering and Technology (UIET), an in-campus Engineering Institute situated in the heart of Panjab University, Chandigarh. Since its establishment, UIET has come a long way and is geared towards a rapid growth. This is possible because of highly competitive students which are selected through an all India entrance test, research oriented faculty and an infrastructure that is most suited towards learning. Apart from focusing on academics, the institute also lays emphasis on soft skills of students to prepare them for the professional world.</p>

                <p>Networking with leading organizations and institutes has benefitted the institute hugely in orienting students to R&D activities as per the requirements of industry. Corporate sector has been very forthcoming in assessing UIET students. As a result majority of our students are placed through campus placements. I strongly feel that the industry can benefit from the tremendous potential that UIET has and can further collaborate in creating an industry-academic interface. | extend an invitation to the corporate sector to participate in the Campus Recruitment Program of UIET.</p>
            </main>
        </div>
    )    
}



export default About