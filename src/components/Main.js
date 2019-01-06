import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Intro</h2>
        <span className="image main"><img src={pic01} alt="" /></span>
        <p>Accidental UNIX/Linux Sysadmin <i class="fab fa-linux" aria-hidden="true"></i> and
          programmer in too many languages. Operations Engineer at <a href='https://www.alfresco.com/'>Alfresco</a>.
        </p>
    
          <p><i class='fal fa-male'></i> Dad <br/>  
            <i class="fal fa-heart"></i> Husband<br/>
            <i class='fal fa-bicycle'></i> Slow road cyclist<br/> 
            <i class="fal fa-guitar"></i> Terrible guitarist<br/> 
            <i class="fal fa-code-branch"></i> Geek<br/> 
            <i class="fal fa-compact-disc"></i> Record collector<br/> 
            <i class="fal fa-volume"></i> Audiophile<br/> 
            <i class='fal fa-cat'></i> "Mad Cat Lady"<br/> 
            <i class="fal fa-cross"></i> Catholic convert</p>
          {close}			
				</article>

        <article id="code" className={`${this.props.article === 'code' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Code</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Open Source</h3>

          <h3>1999-2006</h3>
          <p>I used to do lots of Open Source stuff between 1999 and 2002. 
            You can find my code in the released versions of 
            <a href="http://www.pureftpd.org/project/pure-ftpd">Pure-FTPd</a>, 
            <a href="http://www.gnupg.org/">Gnu Privacy Guard</a>, official <a href="https://exim.org/">Exim</a> 3 RPM spec, and more. 
            I also used to have my own public patches for <a href="http://cyrusimap.web.cmu.edu/mediawiki/index.php/Cyrus_SASL">Cyrus-SASL</a>, <a href="http://modauthmysql.sourceforge.net/">mod_auth_mysql</a> amongst others.
            I also published Perl, JavaScript and other custom RPMs.</p>

          <h3>Present</h3>

          <p>I am again allowed to publish open source software and you can see them on
          <a href="https://github.com/nicdoye">GitHub</a> as well as many 
          <a href="https://gist.github.com/nicdoye">gists</a>.
          I've often thought of writing a DNS Server, but it's never happened. 
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

<p>I come from the West Country of England, and went to the <a href="http://www.bath.ac.uk">University of Bath</a>. 
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
(including all original content, code, markup and images) by
<a href="https://worldofnic.org">Nic Doye</a> is licensed under the 
<a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License
<i class='fab fa-creative-commons' aria-hidden="true"></i>
<i class='fab fa-creative-commons-by' aria-hidden="true"></i></a>.
</p>

<p>The original design is <a href="https://html5up.net/dimension">Dimension</a> by <a href="https://html5up.net">HTML5 UP</a>,
  available under the <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>.
  Generated using <a href="https://github.com/codebushi/gatsby-starter-dimension">gatsby-starter-dimension</a> under the 
  <a href="https://github.com/codebushi/gatsby-starter-dimension/blob/master/LICENSE">MIT license</a>.
  Icons are from <a href="https://fontawesome.com">Font Awesome Pro <i class="fab fa-font-awesome-alt"></i></a>.</p>.
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
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
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