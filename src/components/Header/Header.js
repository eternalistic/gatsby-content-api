import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Img from "gatsby-image";

const Header = ({ siteTitle }) => (
  <header id="header" role="banner">
    <div id="header-top">
      <div id="header-info">
        <Link to="/" id="logo">
          <Img fluid="src/images/logo.svg" alt="Eternalistic Logo" />
        </Link>
      </div>
      <a id="nav-toggle" href="#page-top"><span></span></a>
    </div>

    <div class="menu-blocks">
        <p><strong>Jeremy Caldwell</strong><br/>
          Freelance front-end developer and Drupal themer.</p>

        <hr />
          <a href="/contact" class="btn">Available for hire</a>
        <hr />

        <nav id="primary" role="navigation">
          <ul class="menu">
            <li><a href='/about'>About / Resume</a></li>
            <li><a href='/contact'>Contact me</a></li>
          </ul>
        </nav>

        <hr class="narrow" />
          <nav id="secondary" role="navigation">
          <ul class="menu">
            <li>
              <a href="#" id="projects">Projects</a>
              <ul class="menu projects-menu">
                  <li><a href="/projects/annenberg-foundation">Annenberg Foundation</a></li>
                  <li><a href="/projects/annenberg-space-for-photography">Annenberg Space for Photography</a></li>
                  <li><a href="/projects/dell-symantec-portal">Dell / Symantec Portal</a></li>
                  <li><a href="/projects/egotist">Denver Egotist</a></li>
                  <li><a href="/projects/digital-turbine">Digital Turbine</a></li>
                  <li><a href="/projects/eyeneer-tv">Eyeneer TV</a></li>
                  <li><a href="/projects/families-usa">Families USA</a></li>
                  <li><a href="/projects/linux">Linux.com</a></li>
                  <li><a href="/projects/linux-foundation">Linux Foundation</a></li>
                  <li><a href="/projects/university-of-chicago-news">University of Chicago News</a></li>
                  <li><a href="/projects/yokes-fresh-markets">Yoke's Fresh Markets</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <hr class="narrow" />

        <nav id="social" role="navigation">
          <ul class="menu">
            <li class="first"><a href="http://drupal.org/user/72964" target="_blank" rel="noopener noreferrer" class="drupal" title="Drupal">Drupal</a></li>
            <li><a href="http://github.com/eternalistic" target="_blank" rel="noopener noreferrer" class="github" title="GitHub">GitHub</a></li>
            <li><a href="http://twitter.com/eternalistic" target="_blank" rel="noopener noreferrer" class="twitter" title="Twitter">Twitter</a></li>
            <li class="last"><a href="http://www.linkedin.com/pub/jeremy-caldwell/5/76b/ab1" target="_blank" rel="noopener noreferrer" class="linkedin" title="LinkedIn">LinkedIn</a></li>
          </ul>
        </nav>

        <hr class="narrow" />

        <p class="powered">Powered by <a href="http://jekyllrb.com" target="_blank" rel="noopener noreferrer">Jekyll</a> <br/>
          Hosted on <a href="http://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>

      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
