import React from 'react'
import useMedia from '../../hooks/useMedia'

import {Card, Typography, Image} from 'antd'


import squiggle from '../../assets/pattern-bg/fancy-squiggle.svg'
import bg from '../../assets/pattern-bg/bg-image.png'

const {Text, Title, Paragraph} = Typography



const Mission = () => {
    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])

    return(
        <div style={{height: mobile ? "105vh" : "85vh", background: `url(${bg})`, backgroundSize: "cover",marginTop: "80px", position: 'relative' }}>
            <img src={squiggle} style={{transform: "scaleY(-1.1) scaleX(1.2)", width: "100%", position: 'absolute', top: "-1px", fill: "red"}}></img>

            <div style={{display: "flex", justifyContent:  mobile ? "center" : "flex-end", alignItems: 'center', height: "100%", padding: mobile ? "20px 0px": "0px 100px 0px 0px" }}>
                <Card style={{width: mobile ? "350px" : "550px", padding: mobile ? "20px 20px": "36px 50px",boxShadow: "2px 4px 10px rgba(0,0,0,0.1)", marginTop: "20px"}}>
                    <Title level={2} style={{color: "#13384e"}}> Our Mission. </Title>

                    <Paragraph style={{lineHeight: "1.9", textAlign: 'justify'}}>Our neuroadaptive breathing entrainment system serves to identify an ideal breathing rhythm for a user to effectively address anxiety in real-time. Our system is adaptive, taking into account the output of the deep learning algorithm to determine whether a particular breathing rate has an alleviating effect on the user’s mental state, and adapting accordingly until ultimately finding the user’s ideal breathing rate. 
</Paragraph>

                </Card>
            </div>
          
            <img src={squiggle} style={{ width: "100%", position: 'absolute', transform: "scaleX(-1.2)", bottom: "-2px", fill: "red"}}></img>

        </div>
    )
}

export default Mission