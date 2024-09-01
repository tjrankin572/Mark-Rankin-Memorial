import * as React from "react"
import { Link } from "gatsby"

import "../styles/components/footer.css"

import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"

import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer>
    <br></br>
    <p>Thanks for stopping by!</p>
    <p>We're looking forward to seeing you!</p>
    <StaticImage src="../images/icons/vector_smile_whitefill.png" className="icon-happy" objectFit="fill" width={100}/>
    <br></br>
    <Link to="#home" className="back-to-top">Back to Top</Link>
  </footer>
)

export default Footer
