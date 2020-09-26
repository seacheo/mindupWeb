import React from 'react'

import {Typography, Image} from 'antd'

const {Title, Text} = Typography


const Photos = () => {

    return (
        <div >
        <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Photos </Title>
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", width: '100%', marginTop: "30px"}}>
            <img src="https://via.placeholder.com/350" style={{borderRadius: "10px", margin: "20px 50px"}}></img>
            <img src="https://via.placeholder.com/350" style={{borderRadius: "10px", margin: "20px 50px"}}></img>
        </div>
    </div>
    )
}

export default Photos