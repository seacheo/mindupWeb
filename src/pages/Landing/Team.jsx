import React from 'react'

import {Card, Avatar, Typography} from 'antd'

import TeamMember from './TeamMeber'

import brian from '../../assets/team/brian.png'
import sean from '../../assets/team/sean.png'
import avi from '../../assets/team/avi.png'


const {Title, Text} = Typography

const Team =() => {

    return(
        <div >
            <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Team </Title>
            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
                <TeamMember info={{name: "Brian Penchina", role: "Backend | ML", linkedIn: "brian-penchina", img: brian}}/>
                <TeamMember info={{name: "Sean Cheong", role: "Backend | ML", linkedIn: "sean-cheong", img: sean}}/>
                <TeamMember info={{name: "Avi Sundaresan", role: "Backend | ML", linkedIn: "avirathsundaresan", img: avi}}/>
            </div>
        </div>
    )
}

export default Team
