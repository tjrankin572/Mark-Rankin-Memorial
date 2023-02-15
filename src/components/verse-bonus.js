import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/verse-bonus.css"

import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"

import { StaticImage } from "gatsby-plugin-image"

const Verse = ({empty}) => (
 
    <section className="verse-section section-alignment" id="verse">
      <div className="verse-wrapper">
        <h2><b>Favorite Bible Verses</b></h2>
        
        <StaticImage src="../images/icons/cross_vector.png" className="icon-cross"  objectFit="fill"  width={500}/>
      
        <h3>Jeremiah 29:11</h3>
        <p><i>For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."</i></p>
        
        <h3>1 Thessalonians 4:9-12</h3>
        <p> <i> Now as to the love of the brothers and sisters, you have no need for anyone to write to you, for you yourselves 
            are taught by God to love one another; for indeed you practice it toward all the brothers and sisters who are in all Macedonia. 
            But we urge you, brothers and sisters, to excel even more, and to make it your ambition to lead a quiet life and attend to 
            your own business and work with your hands, just as we instructed you, so that you will behave properly 
            toward outsiders and not be in any need.</i></p>
      </div>
    </section>

)


export default Verse;