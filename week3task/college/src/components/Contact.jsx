import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const  Contact = () =>{
    return (
        <div>
            <div class="form-container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Your Name"  id="name" required /> 
                    <input type="text" placeholder="Your Email" id="email" required />
                    <textarea placeholder="Message" required id="question"></textarea>
                    <input type="submit" value="Submit" onclick="submitbutton()" />
                </form>
            </div>

            <div class="form-container">
                <h2 class="questions">Do you have any questions about us?</h2>
                <div class="questionform">
                    <input type="text" placeholder="Your Name"  id="name" /> 
                    <input type="text" placeholder="Your Email" id="email" /><br/>
                    <textarea placeholder="Your Query" id="query"></textarea>
                    <button type="submit" onclick="buttonsubmit()" class="submitBtn">Submit</button>
                </div>
            </div>

            <h2>Frequently asked questions</h2>
            <div class="taskList">
            <table class="faq">
                <tbody id="listing">
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, animi.</td><td>10 Jan 2023</td><td>John Doe</td>
                </tbody>
            </table>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    )    
}



export default Contact