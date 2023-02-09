import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/registry.css"

import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"

import { StaticImage } from "gatsby-plugin-image"

const Registry = ({empty}) => (
 
    <section className="registry section-alignment" id="registry">
      
      <div className="white-wrapper">
        <h2><b>Registry</b></h2>
        <StaticImage src="../images/icons/drawing_vector.png" className="icon" objectFit="fill"  width={500}/>
        <br></br>
        <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551170972?eventType=Wedding&fbclid=IwAR1GpSRW3Yaktp3B5Q6vc2-RJUgQx4izSDp57TucRBr1w5h1iBLRIAOpVs8" target="_blank" rel="noreferrer" class="flex-item btn btn-dark bottom-margin-b-20x btn-font">Bed Bath & Beyond</a>
      </div>

    </section>

)


export default Registry;