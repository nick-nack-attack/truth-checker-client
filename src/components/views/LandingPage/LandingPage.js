// this is the landing page that explains what the app's purpose and what it does
import React from 'react';
import config from '../../../config'

// styling
import '../About/About.scss';

const LandingPage = () => {

  return (
      <div>

        <div className="about-div">
          <h2 className="about-title">
            Truth Checker
          </h2>
          <div>
            <h3 className="about-title">
              Welcome
            </h3>
            <p>
              This app is intended to be a marketing piece for a music album.
              The main antagonist, within the context of the concept album, is the Department of Truth and Facts.
              This fictitious entity has a 'Truth Checker' web application (this app) that users can submit facts to be
              'approved' by the administrator.
              This is supposed to be an attempt to combat 'fake news' and 'misinformation' but hopefully highlights the
              pitfalls of trying to make a single-source of truth.
            </p>
          </div>
          <div>
            <h3 className="about-title mid">
              How to get started
            </h3>
            <p>
              <a href={config.FACTS_FEED}>Click here to view all the current facts</a>.
              Or you can select the menu in the header to select a page to visit.
              On the Facts Feed, you can search or filter by status (i.e. has a fact been approved yet? Has it been
              determined to be 'Not true?')
            </p>
          </div>
          <div>
            <h3 className="about-title mid">
              Logging in
            </h3>
            <p>
              You can login to the <a href={config.LOGIN_PAGE}>Admin account</a> and see facts that have been reported
              and change details of submitted facts.
            </p>
          </div>

        </div>

      </div>
  )

}

export default LandingPage;