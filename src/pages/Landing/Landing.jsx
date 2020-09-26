import React, {useEffect} from 'react'

import Splash from './Splash'
import Mission from './Mission'
import Timeline from './Timeline'
import Team from './Team'
import Features from './Features'
import Partners from './Partners'
import Map from './Map'
import Photos from './Photos'

const Landing = () => {


    useEffect(() => {
        document.title = "Mindup | Home"
    })


    return(
        <div style={{marginBottom: "0px", }}>
            <div style={{maxWidth: "1600px", margin: "0px auto", background: "#fafafa"}}>
                <Splash />
            </div>
            <Mission/>
            <Features/>
            <Photos/>
            <Timeline/>
            <Team/>
            <Partners/>
            <Map/>
        </div>
    )
}

export default Landing