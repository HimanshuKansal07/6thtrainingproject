import React from "react";
import { Link } from "react-router-dom";

const institute = () => {
    return(
        <div>
            <div class="hero-banner">
        University Institute of Engineering and Technology<br/>Panjab University
    </div><br/><br/>
    <div class="abouthead">About</div>
    <div class="about">
        Panjab University is located in Sector 14 and Sector 25 of Chandigarh, spreading across an area of almost 550 acres.<br/><br/>

        The layout of two campuses of the University has been conceived to meet the academic, administrative, sports/recreational, residential and other requirements of a growing University. To make it self-contained, infrastructural facilities like its own Shopping Centre, Health Centre, Bank, Post office, Swimming Pool, Gymnasium, Sports Grounds, Botanical Gardens, well maintained parks, Open Air Theatre, Guest Houses, Faculty House, Seminar Complexes, Alumni House, Community Centre and a school, have been provided. Besides these facilities, the University Campus has 8 hostels for boys, 9 hostels for girls, a Working Women Hostel and 2 sports hostels.<br/><br/>
        
        A cluster of prominent buildings like the Gandhi Bhawan, the Fine Arts Museum, the University Library and the Student Centre form the hub of social interaction. The three-winged structure of the Gandhi Bhawan, considered the pride of the University, is its most artistic building. The Fine Arts Museum, with its series of small galleries arranged around a courtyard, each gallery having a hyperbolic paraboloid roof (umbrella shaped), is not only an architectural but a structural marvel as well. The University Library, another key building, in the Sector 14 Campus is an RCC framed structure with red sandstone veneers. The Student Centre, with its circular base and a ramp pulsating around its cylindrical body, is another landmark building.<br/><br/>
    </div>

    <div>
        <h1>Useful Links</h1>
        <div class="nav2">
            <Link to={"/Contact"}>Contact Us</Link>
            <Link to={"https://www.google.com/search?q=campus+uiet+chandigarh&tbm=isch&ved=2ahUKEwjj3IPHn7z_AhVZMbcAHS9KCuQQ2-cCegQIABAA&oq=uiet+chandigarh+campus&gs_lcp=CgNpbWcQARgAMgYIABAIEB4yBwgAEBgQgAQ6BAgjECc6BwgAEIoFEEM6BAgAEAM6CAgAEIAEELEDOgUIABCABDoGCAAQBRAeOgQIABAeUMoIWNs8YIY_aABwAHgAgAHRBIgBgh-SAQwwLjEzLjQuMC4xLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=DEiGZOOmH9ni3LUPr5SpoA4&bih=746&biw=1536"} target="_blank">Campus tour</Link>
            <Link to={"/Stats"}>College Statistics</Link>
        </div>
    </div><br/><br/>

    <h2>What college dunia thinks about us!</h2>
    <div class="iframe"><iframe src="https://collegedunia.com/" height="300" width="1000"></iframe></div>

    <div id="date" />


        </div>
    )
}

export default institute