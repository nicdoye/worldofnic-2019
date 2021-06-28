import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

library.add(fal) 
library.add(fab)
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Intro</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <h3>Nicolas (Nic) Doye</h3>
        <p>
          Cloud Native Engineer /
          Accidental Linux Sysadmin <FontAwesomeIcon icon={['fab', 'linux']}/> and
          programmer in too many languages. Senior DevOps Engineer at 
          <a href='https://www.hyland.com/'>Hyland</a> <a href='https://www.alfresco.com/'>Alfresco</a>.
        </p>
    
          <p><FontAwesomeIcon icon={['fal', 'male']}/> Dad <br/>  
            <FontAwesomeIcon icon={['fal', 'heart']}/> Husband<br/>
            <FontAwesomeIcon icon={['fal', 'bicycle']}/> Slow road cyclist<br/> 
            <FontAwesomeIcon icon={['fal', 'guitar']}/> Terrible guitarist<br/> 
            <FontAwesomeIcon icon={['fal', 'code-branch']}/> Geek<br/> 
            <FontAwesomeIcon icon={['fal', 'compact-disc']}/> Record collector<br/> 
            <FontAwesomeIcon icon={['fal', 'volume']}/> Audiophile<br/> 
            <FontAwesomeIcon icon={['fal', 'cat']}/> "Mad Cat Lady"<br/> 
            <FontAwesomeIcon icon={['fal', 'cross']}/> Catholic convert</p>
          {close}			
				</article>

        <article id="code" className={`${this.props.article === 'code' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Code</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Open Source</h3>

          <p>I used to do lots of Open Source stuff in the late 1990s/early 2000s. 
            You can find my code in the released versions 
            of <a href="http://www.pureftpd.org/project/pure-ftpd">Pure-FTPd</a>, <a href="http://www.gnupg.org/">Gnu Privacy Guard</a>, 
            official <a href="https://exim.org/">Exim</a> RPM spec, and more. 
            I also used to have my own public patches 
            for <a href="http://cyrusimap.web.cmu.edu/mediawiki/index.php/Cyrus_SASL">Cyrus-SASL</a>, <a href="http://modauthmysql.sourceforge.net/">mod_auth_mysql</a> amongst others.
            I also published Perl, JavaScript and other custom RPMs.</p>

          <p>In 2016, I went back to my roots to work for an open source company. Check out
            my <a href="https://github.com/nicdoye">GitHub</a> and 
            my <a href="https://gist.github.com/nicdoye">gists</a>.</p>
          
          <p>I've often thought of writing a DNS Server, but it's never happened. 
          A sketch of the design <a href="https://nicdoye.github.io/andns/">is available</a>.</p>

          <h3>About this site</h3>

          <p>I've had a web site since 1994, and it has been on this domain since 2004. It has
            run on many technologies over the years. I used to list them here, but it was a long,
            and very boring list.
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h3>Bio</h3>

        <p>I come from the West Country of England, and went to the <a href="https://www.bath.ac.uk">University of Bath</a>. 
          I now live in the Thames Valley.</p>

        <h3>Cycling</h3>

        <p>I love riding a road bike: I commute on one (sometimes), and go out for longer rides at the weekend.</p>

        <h3>Music</h3>

        <p>I play the guitar badly. Really badly.</p>

        <h3>Disclaimer</h3>

        <p>The postings on this site are my own and do not represent my employer’s opinions.</p>

        <h3>Licences</h3>

        <p>
        "world of nic"
        (including all original content, code, markup and images) 
        by <a href="https://worldofnic.org">Nic Doye</a> is licensed under 
        the <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International 
        License <FontAwesomeIcon icon={['fab', 'creative-commons']}/><FontAwesomeIcon icon={['fab', 'creative-commons-by']}/></a>.
        </p>

        <p>The original design is <a href="https://html5up.net/dimension">Dimension</a> by <a href="https://html5up.net">HTML5 UP</a>,
          available under the <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>.
          Generated using <a href="https://github.com/codebushi/gatsby-starter-dimension">gatsby-starter-dimension</a> under the 
          <a href="https://github.com/codebushi/gatsby-starter-dimension/blob/master/LICENSE">MIT license</a>.
          Icons are from <a href="https://fontawesome.com">Font Awesome Pro <FontAwesomeIcon icon={['fab', 'font-awesome-alt']}/></a>.</p>
            {close}
        </article>

        <article id="research" className={`${this.props.article === 'research' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Research</h2>
        <span className="image main"><img src={pic04} alt="" /></span>
        <h3 id="background">Background</h3>

        <p>I received all my degrees from the Department of Mathematical 
          Sciences at the <a href="https://www.bath.ac.uk/">University of Bath</a></p>

        <ul>
        <li>BSc (hons) Mathematics 1992</li>
        <li>MSc Symbolic Computation 1993</li>
        <li>PhD Order Sorted Computer Algebra 1997</li>
        </ul>

        <h3 id="areas-of-research">Areas of research</h3>

        <p>I'm mainly interested in pure maths, and by chance this has warped 
          into an interest in many of the areas of computer algebra, 
          and from there into the theory of object-oriented type systems.</p>

        <h3 id="publications">Publications</h3>

        <ul>
        <li><a href="https://static.worldofnic.org/cdn/ps/research/msc.ps">The implementation of various algorithms for permutation groups in the computer algebra system: Axiom (1993)</a></li>
        <li><a href="https://static.worldofnic.org/cdn/ps/research/phd.ps">Order sorted computer algebra and coercions, 1997</a></li>
        <li><a href="http://www.acm.org/pubs/articles/proceedings/issac/309831/p229-doye/p229-doye.pdf">Automated coercion for Axiom, 1999</a></li>
        </ul>

        <h3 id="open-source-axiom">Open Source Axiom</h3>

        <p>In 2003 <a href="http://savannah.nongnu.org/projects/axiom/">Axiom</a> became available under an open source licence 
          (and has even forked) but I still haven't got around to adding anything to it.</p>

          <ul className="icons">
            <li><a href="https://twitter.com/nicdoye" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://facebook.com/nicdoye" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/nicdoye" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/nicdoye" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main