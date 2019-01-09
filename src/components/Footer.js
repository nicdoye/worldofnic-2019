import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const Footer = (props) => (
    <footer id="footer">

    <ul class="icons">
        <li><a href="https://twitter.com/nicdoye" title="twitter"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
        <li><a href="https://www.strava.com/athletes/3181147" title="strava"><FontAwesomeIcon icon={['fab', 'strava']}/></a></li>
        <li><a href="https://instagram.com/nicdoye" title="instagram"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
        <li><a href="https://github.com/nicdoye" title="github"><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
    </ul>

    <p class="copyright">
        Licence: <a href="https://creativecommons.org/licenses/by/4.0/">
            <FontAwesomeIcon icon={['fab', 'creative-commons']}/>
            <FontAwesomeIcon icon={['fab', 'creative-commons-by']}/></a> |
        Design: <a href="http://html5up.net" title="HTML5 UP">HTML5 UP</a> |
        Powered by: <a href="https://aws-amplify.github.io" title="AWS Amplify">AWS Amplify <FontAwesomeIcon icon={['fab', 'aws']}/></a> |
        Built with: <a href="https://www.gatsbyjs.org/" title="gatsby">Gatsby.js <FontAwesomeIcon icon={['fab', 'react']}/></a> |
        Src: <a href="https://github.com/nicdoye/worldofnic-2019" title="src">GitHub <FontAwesomeIcon icon={['fab', 'github']}/></a>
        </p>
</footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
