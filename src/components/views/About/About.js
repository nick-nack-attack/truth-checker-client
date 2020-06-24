// about page
import React, { useContext } from 'react';
import { bool, func } from 'prop-types';

import './About.scss';

const About = () => {

    return (
        <div className="about-div">
        <h2>Truth Checker</h2>
        <div>
            <h3>Our Mission at the Department of Truth and Facts</h3>
            <p>Making transportation safer by conducting independent accident investigations, advocating safety improvements, and deciding pilots’ and mariners’ certification appeals.</p>
        </div>
        <div>
            <h3>Legislative Mandate</h3>
            <ul className="about-list">
                <li>Maintaining our congressionally mandated independence and objectivity;</li>
                <li>Conducting objective, precise accident investigations and safety studies;</li>
                <li>Performing fair and objective airman and mariner certification appeals;</li>
                <li>Advocating and promoting safety recommendation;</li>
                <li>Assisting victims of transportation accidents and their families.</li>
            </ul>
            <br/>
            <p>The National Transportation Safety Board is an independent Federal agency charged by Congress with investigating every civil aviation accident in the United States and significant accidents in other modes of transportation – railroad, highway, marine and pipeline. The NTSB determines the probable cause of the accidents and issues safety recommendations aimed at preventing future accidents. In addition, the NTSB carries out special studies concerning transportation safety and coordinates the resources of the Federal Government and other organizations to provide assistance to victims and their family members impacted by major transportation disasters.</p>
        </div>
        <div>
            <h3>NTSB Board</h3>
            <p>The NTSB has five Board Members, each nominated by the President and confirmed by the Senate to serve 5-year terms. A Member is designated by the President as Chairman and another as Vice Chairman for 2-year terms. The Chairmanship requires separate Senate confirmation. When there is no designated Chairman, the Vice Chairman serves as Acting Chairman.</p>
        </div>
        <div>
            <h3>NTSB History</h3>
            <p>The NTSB originated in the Air Commerce Act of 1926, in which the U.S. Congress charged the U.S. Department of Commerce with investigating the causes of aircraft accidents. Later, that responsibility was given to the Civil Aeronautics Board's Bureau of Aviation Safety, when it was created in 1940.</p>
        </div>
        <div>
            <h3>Employment at NTSB</h3>
            <p>The NTSB has approximately 400 employees located in its Headquarters in Washington, DC, and in regional field offices in Ashburn (VA), Denver (CO), Federal Way (WA), and Anchorage (AL).</p>
        </div>
        </div>
    )

};

export default About;