import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'



const  Stats = () =>{
    return ( 
    <div className="statslower">
        <h1>UIET, Chandigarh-Statistics</h1>

        <div class="bottom">
            <table class="table">
                <tr>
                    <th rowspan="2">Year</th>
                    <th colspan="6">No of Admissions</th>
                    <th rowspan="2">No of Graduates</th>
                    <th rowspan="2">No of papers pubished</th>
                </tr>
                <tr>
                    <th>CSE</th>
                    <th>IT</th>
                    <th>ECE</th>
                    <th>EEE</th>
                    <th>ME</th>
                    <th>Bio Tech</th>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>120</td>
                    <td>90</td>
                    <td>60</td>
                    <td>49</td>
                    <td>80</td>
                    <td>20</td>
                    <td>500</td>
                    <td>15</td>
                </tr>

                <tr>
                    <td>2021</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2020</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <br/><br/>
        <h1>Placement Statistics</h1>
        <br/>
        <h2 class="pla0">2022-23</h2>
        <br/>
        <table class="placement0">
            <tr>
                <th>Company</th>
                <th>Offers</th>
            </tr>

            <tr>
                <td>Amazon</td>
                <td>5</td>
            </tr>
            <tr>
                <td>American Express</td>
                <td>14</td>
            </tr>
            <tr>
                <td>Deloitte</td>
                <td>14</td>
            </tr>
            <tr>
                <td>KPMG</td>
                <td>21</td>
            </tr>
            <tr>
                <td>ZS Associates</td>
                <td>17</td>
            </tr>
        </table>
        <br/>
        <h2 class="pla1">2021-22</h2>
        <br/>
        <table class="placement1">
            <tr>
                <th>Company</th>
                <th>Offers</th>
            </tr>

            <tr>
                <td>Amazon</td>
                <td>5</td>
            </tr>
            <tr>
                <td>American Express</td>
                <td>14</td>
            </tr>
            <tr>
                <td>Deloitte</td>
                <td>14</td>
            </tr>
            <tr>
                <td>KPMG</td>
                <td>21</td>
            </tr>
            <tr>
                <td>ZS Associates</td>
                <td>17</td>
            </tr>
        </table>
        <br/>
        <h2 class="pla2">2020-21</h2>
        <br/>
        <table class="placement2">
            <tr>
                <th>Company</th>
                <th>Offers</th>
            </tr>

            <tr>
                <td>Amazon</td>
                <td>5</td>
            </tr>
            <tr>
                <td>American Express</td>
                <td>14</td>
            </tr>
            <tr>
                <td>Deloitte</td>
                <td>14</td>
            </tr>
            <tr>
                <td>KPMG</td>
                <td>21</td>
            </tr>
            <tr>
                <td>ZS Associates</td>
                <td>17</td>
            </tr>
        </table>
        <br/><br/>
        <h1>Past Recruiters</h1>
        <div class="pr">
            <div class="pastrec">
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img1}/><br/><br/>
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img2}/><br/><br/>
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img3}/><br/><br/>
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img4}/><br/><br/>
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img5}/><br/><br/>
                <img className = "imgstats" onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={img6}/><br/><br/>
            </div>
        </div>
    </div>

    )    
}



export default Stats