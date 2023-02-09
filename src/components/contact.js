import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/contact.css"

import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"

import { StaticImage } from "gatsby-plugin-image"

const Contact = ({empty}) => (
 
    <section className="contact section-alignment" id="contact">
      
        <div className="white-wrapper">
            <h2><b>Contact</b></h2>
            <p>Let me know if you run into any issues or have any questions!</p>

            <h3>Tyler Rankin</h3>
            <p><b>Text:</b> (208) 290-1121</p> 

        </div>

    </section>

)


export default Contact;