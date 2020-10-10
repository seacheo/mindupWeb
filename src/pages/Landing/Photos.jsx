import React from 'react'

import {Typography, Image} from 'antd'
import pic1 from '../../assets/product/BW1.JPG'
import pic2 from '../../assets/product/BW2.png'
const {Title, Text} = Typography


const Photos = () => {

    return (
        <div >
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", width: '100%', marginTop: "30px"}}>
            <img src={pic1} style={{width: "50%", maxWidth: "800px", borderRadius: "10px", margin: "20px 50px"}}></img>
            <img src={pic2} style={{width: "50%", maxWidth: "800px", borderRadius: "10px", margin: "20px 50px"}}></img>
        </div>
    </div>
    )
}

export default Photos