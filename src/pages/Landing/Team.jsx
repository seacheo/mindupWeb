import React from 'react'

import {Card, Avatar, Typography} from 'antd'

import TeamMember from './TeamMeber'

import brian from './brian.png'
import sean from './sean.png'
import avi from './avi.png'

const {Title, Text} = Typography

const Team =() => {

    return(
        <div >
            <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Team </Title>
            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
                <TeamMember info={{name: "Brian Penchina", role: "Backend | ML", linkedIn: "brian-penchina", img: brian}}/>
                <TeamMember info={{name: "Sean Cheong", role: "Backend | ML", linkedIn: "brian-penchina", img: sean}}/>
                <TeamMember info={{name: "Avi Curryasan", role: "Backend | ML", linkedIn: "brian-penchina", img: avi}}/>
            </div>
        </div>
    )
}

export default Team