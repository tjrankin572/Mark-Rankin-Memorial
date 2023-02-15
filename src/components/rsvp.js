import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/rsvp.css"

import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"

import { StaticImage } from "gatsby-plugin-image"

const RSVP = ({empty}) => (
 
    <section className="rsvp section-alignment" id="rsvp">
      
      <div className="rsvp-wrapper" >
        <h2><b>RSVP</b></h2>
        <StaticImage src="../images/icons/rsvp_vector.png" objectFit="fill" className="icon" width={100}/>
    
        <p>We'd love for you to come! Let us know you're coming.</p>
        <a href="https://forms.gle/65hYv7GhPKUXA4SY8" target="_blank" rel="noreferrer" class="flex-item btn btn-dark bottom-margin-b-20x btn-font">Fill in RSVP</a>

       
      </div>

    </section>

)


export default RSVP;