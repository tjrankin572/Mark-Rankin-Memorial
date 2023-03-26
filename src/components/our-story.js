import * as React from "react"

import  "../styles/global.css"
import  "../styles/components/our_story.css"

import "../styles/components/our_story.css"
import "../styles/master.css"
import "../styles/master_sm_desktop.css"
import "../styles/master_mobile.css"




import { StaticImage } from "gatsby-plugin-image"


const Story = ({storyIcon}) => (
    <section className="our-story-background section-alignment" id="our-story">
        <div className="our-story-wrapper">
            <h2><b>About Mark Rankin</b></h2>
            <h2><b>September 18th, 1957 - September 13th, 2022</b></h2>
            <StaticImage src="../images/icons/heart_vector.png" className="icon" objectFit="fill" width={500}/>
            <br></br>
            <p>This website is created to honor Mark Rankin.</p>
            <br></br>
            <p>The journey he took through life was a true underdog story who accomplished his dreams and found a saving relationship with Jesus Christ.
            He was the youngest of Anne and Bill's four children; Kathy, Jeff and Greg.
            The first great leap he took was to Alaska on October 1st, 1975 along with his brother Greg. There he eventually became a commercial fishermen with his own boat.
            The boat was called the J.R. He never knew what J.R. stood for when he purchased it but he called it "Just Right".
            Later in life he would record many of his adventures on the J.R. in his autobiography: A Small Boat Tale.</p>

            <br></br>
            <p>Mark eventually put his life in the fisheries behind when he married Christina Rankin on October 30th, 1988.
            To provide for his growing family; he picked up a job at Bill's Locksmith Shop owned by his father.
            Mark eventually purchased the business from his father and renamed it to Rankin's Commercial Security.
            He then managed to negogiate and bid on high earning contracts. Clients were impressed with his hard work ethic and quality installations.
            Mark Rankin knew how to smoke the competition. </p>
            <br></br>
            <p>His successful locksmithing career allowed him to provide comfortable living for his family of four children; Ryan, Tyler, Cailey and Dylan.
            In 2006 he retired early at the age of 49. In addition to moving his whole family into a log cabin in northern Idaho,
            the timing of his retirement allowed him to spend time with his kids before any of them had graduated from high school.
            He cherished those years because he knew he would never have an opportunity like that again.</p>
            <br></br>
            
            <p>Those who knew Mark the best though will remember him more for his kind and genuine heart.
            A family man who loved his wife and was proud of his children.
            His love and appreciation for the Gospel of Jesus Christ often brought him to tears during family Bible studies.
            2 Timothy 4:8, which describes The Crown of Righteouness being given to believers who long for heaven describes Mark Rankin.
            Upon being told this once, from his son Tyler Rankin, Mark replied with the most humble voice "Oh, I'd just be happy to be there."</p>
        </div>
        
    </section>
    
)


export default Story;