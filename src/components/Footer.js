import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer">

    <ul class="icons">
        <li><a href="https://twitter.com/nicdoye" title="twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.strava.com/athletes/3181147" title="strava"><i class="fab fa-strava"></i></a></li>
        <li><a href="https://instagram.com/nicdoye" title="instagram"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://github.com/nicdoye" title="github"><i class="fab fa-github"></i></a></li>
    </ul>

    <p class="copyright">
        Licence: <a href="https://creativecommons.org/licenses/by/4.0/">
            <i class='fab fa-creative-commons' aria-hidden="true"></i>
            <i class='fab fa-creative-commons-by' aria-hidden="true"></i></a> |
        Design: <a href="http://html5up.net" title="HTML5 UP">HTML5 UP</a> |
        Powered by: <a href="https://aws-amplify.github.io" title="AWS Amplify">AWS Amplify <i class="fab fa-aws"></i></a> |
        Built with: <a href="https://www.gatsbyjs.org/" title="gatsby">Gatsby.js <i class="fab fa-react"></i></a> |
        Src: <a href="https://github.com/nicdoye/worldofnic-2019" title="src">GitHub <i class="fab fa-github"></i></a>
        </p>
</footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
