// about page
import React from 'react';

// component
import Label from '../../utils/Label/Label';

// styling
import './About.scss';

// usual formatting not used on this page as it's all text
const About = () => {

  return (
      <div className="about-div">
        <h2 className="about-title">About us</h2>
        <div>
          <h3 className="about-title">What is Truth Checker?</h3>
          <p>Truth Checker is a federally managed registry for confirmed and certified Facts. All submitted Facts are
            reviewed and a select, few individuals determine what is True and what is False for United States citizens
            and mankind.</p>
        </div>
        <div>
          <h3 className="about-title mid">Our Mission</h3>
          <p>Making our (not your) country safer by stopping Fake News™ and Misinformation™ by conducting independent
            Truth investigations, advocating Truth improvements, and deciding Fact certification appeals.</p>
        </div>
        <div>
          <h3 className="about-title mid">Legislative Mandate</h3>
          <ul className="about-list">
            <li>Maintaining our congressionally mandated independence and objectivity;</li>
            <li>Conducting objective, precise truth investigations and truth studies;</li>
            <li>Performing fair and objective truth and fact certification appeals;</li>
            <li>Advocating and promoting truth recommendation;</li>
            <li>Assisting victims of Fake News™ accidents and their families.</li>
          </ul>
          <br/>
          <p>The Department of Truth and Facts (DTF) is an independent Federal agency charged by Congress with
            investigating every civil Truth accident in the United States and significant Fake News™ accidents in other
            modes of communication – television, radio, internet, and everything else. The DTF determines the probable
            cause of the Fake News™ accidents and issues Truth recommendations aimed at preventing future Fake News™. In
            addition, the DTF carries out special Truth Studies concerning Truth safety and coordinates the resources of
            the Federal Government and other organizations to provide assistance to Fake News™ victims and their family
            members impacted by major Fake News™ disasters.</p>
        </div>
        <div>
          <h3 className="about-title mid">Department of Truth and Facts Board</h3>
          <p>The DTF has <Label type="classified"/> Board Members, each nominated by the President and confirmed by the
            Senate to serve <Label type="classified"/>-year terms. A <Label type="classified"/> is designated by the
            President as <Label type="classified"/> and another as <Label type="classified"/> for <Label
                type="classified"/>-year terms. The <Label type="classified"/> requires separate Senate confirmation.
            When there is no designated <Label type="classified"/>, the <Label type="classified"/> serves as
            Acting <Label type="classified"/>.</p>
        </div>
        <div>
          <h3 className="about-title mid">DTF History</h3>
          <p>The DTF originated in the N.O. F.E.A.R. Act 2020, in which the U.S. Congress charged the U.S. Department of
            Homeland Security with investigating the causes of Fake News™ accidents.</p>
        </div>
        <div>
          <h3 className="about-title mid">Employment at DTF</h3>
          <p>The DTF has approximately <Label type="classified"/> employees located in its Headquarters in Washington,
            DC, and in regional field offices in <Label type="classified"/>, <Label type="classified"/>, <Label
                type="classified"/>, and <Label type="classified"/>.</p>
        </div>
      </div>
  )

};

export default About;