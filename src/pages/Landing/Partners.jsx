import React from 'react'

import {Typography} from 'antd'

import {motion} from 'framer-motion'

import fastily from '../../assets/partners/fastily-logo.png'
import muvik from '../../assets/partners/muvik-logo.png'
import m2 from '../../assets/partners/m2-logo.png'
import bci from '../../assets/partners/openbci-logo.png'

const {Title} = Typography

const Partners = () => {

    return(
        <div style={{width: "100%", alignItems: 'center', display: 'flex', flexDirection: "column", marginTop: '60px'}}>
        <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Partners </Title>
        <div style={{display: "flex", justifyContent: "space-evenly", width: "70%", marginTop: "20px", flexWrap: "wrap"}}>
            <a target="_blank" href="https://openbci.com/"><motion.img  whileHover={{scale: 1.05}} src={bci} style={{height: "100px",cursor: 'pointer', margin: "10px 20px"}}></motion.img></a>
            <a target="_blank" href="https://www.fastly.com/"><motion.img  whileHover={{scale: 1.05}} src={fastily} style={{height: "100px",cursor: 'pointer', margin: "10px 20px"}}></motion.img></a>
            <a target="_blank" href="https://muviklabs.io/"><motion.img  whileHover={{scale: 1.05}} src={muvik} style={{height: "100px",cursor: 'pointer', margin: "10px 20px"}}></motion.img></a>
            <a target="_blank" href="https://www.2mfoundation.org/"><motion.img  whileHover={{scale: 1.05}} src={m2} style={{height: "100px",cursor: 'pointer', margin: "10px 20px"}}></motion.img></a>

        </div>
        </div>
    )
}

export default Partners