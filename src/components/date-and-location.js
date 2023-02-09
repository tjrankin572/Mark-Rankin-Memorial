import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/date-and-location.css"


import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"




import { StaticImage } from "gatsby-plugin-image"


const DateAndLocation = ({storyIcon}) => (
    <section className="when-and-where section-alignment" id="when-and-where">
      

      <div className="when-and-where-wrapper">
        <h2><b>When & Where</b></h2>
        <StaticImage src="../images/icons/map_icon_vector_white.png" objectFit="fill" className="icon" width={500}/>
        <p>We'd love to have you come!</p>
        <p>Hampton Inn</p>
        <p>1500 W Riverstone Dr, Coeur d'Alene, ID 83814</p>
        <p>May 13th, 2023, 2:00 PM Pacific Time</p>
        <a href="https://goo.gl/maps/6naXkVde3kMytGEy7" target="_blank" rel="noreferrer" class="flex-item btn btn-dark bottom-margin-b-20x btn-font">Google Maps</a>
      </div>

    </section>
    
)


export default DateAndLocation;