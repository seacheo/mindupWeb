import React from 'react'

import features from '../../assets/product/features.png'

import {Typography, Image} from 'antd'

const {Title} = Typography

const Features = () => {


    return(
        <div style={{display: 'flex', alignItems: 'center', flexDirection: "column", width: "100%", marginTop: "40px"}}>
            <Image src={features} style={{width: "50%", maxWidth: "1000px", marginRight: "2%"}}></Image>
        </div>
    )
}

export default Features
