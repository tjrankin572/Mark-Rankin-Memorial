import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/hero.css"

import "../styles/components/our_story.css"
import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"


import { Link } from "gatsby"



const Hero = ({heroText, heroCitation, heroBig, heroImage}) => (
    
    <section>
      <div className="mobile-container">
                <Link to="/" className="logo">In Loving Memory of Mark Rankin</Link>
                <label for="toggle" class="hamburger">Replace</label>

                <input type="checkbox" id="toggle" value="checked"></input>
                <div class="nav-mobile">
                    <br></br>
                    <nav>
                        <ul>
                            <Link to="#our-story" className="nav-link">Dad's Story</Link>
                            <Link to="#when-and-where" className="nav-link">When and Where</Link>
                            <Link to="#rsvp" className="nav-link">RSVP</Link>
                            <Link to="#contact" className="nav-link">Contact</Link>
                        </ul>
                    </nav>
                </div>
                
      </div>

      <div className="hero-flex-container">

        <div className={heroImage}>
            <div className="main-logo">
                <Link to="#verse" className="nav-link">Mark Rankin Memorial Service</Link>
            </div>

            <nav className="hero_nav flex-1"> 
                <div>
                    <Link to="#our-story" className="nav-link">Dad's Story</Link>
                </div>          
                <div>
                    <Link to="#when-and-where" className="nav-link">When & Where</Link>
                </div>
                <div>
                    <Link to="#rsvp" className="nav-link">RSVP</Link>
                </div>
                <div>
                    <Link to="#contact" className="nav-link">Contact</Link>
                </div>
            </nav>

            <div className="flex-3">
                <p className="hero_text">{heroText}</p>
                <br></br>
                <p className="hero_text hero-text-bold">{heroCitation}</p>
                <br></br>
                <p className="hero-big-text hero-text-bold">{heroBig}</p>
            </div>
        </div> 
      </div>
    
    </section>
)



export default Hero;