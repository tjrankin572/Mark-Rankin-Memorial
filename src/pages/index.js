import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Story from "../components/our-story"
import DateAndLocation from "../components/date-and-location"
import RSVP from "../components/rsvp"
import Contact from "../components/contact"
import Verse from "../components/verse-bonus"


const MissionPartner2 = () => (


  <Layout>
    <Seo title="Mark Rankin" />

   
    <section id="home">
      <Hero heroImage="hero-image"  heroText=""  />
    </section>

    <Story storyIcon='"../images/icons/heart_vector.png"' />

    <DateAndLocation />
    <RSVP />
    <Contact />
    <Verse />

   
    
  </Layout>
)

export default MissionPartner2;
