import React from 'react'
import useMedia from '../../hooks/useMedia'

import {Card, Typography, Image} from 'antd'

import classroom from '../../assets/temp.jpg'

import squiggle from '../../assets/fancy-squiggle.svg'
import bg from '../../assets/bg-image.png'

const {Text, Title, Paragraph} = Typography

const bgURL = "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80"


const Mission = () => {
    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])

    return(
        <div style={{height: mobile ? "105vh" : "85vh", background: `url(${bg})`, backgroundSize: "cover",marginTop: "80px", position: 'relative' }}>
            <img src={squiggle} style={{transform: "scaleY(-1.1) scaleX(1.2)", width: "100%", position: 'absolute', top: "-1px", fill: "red"}}></img>

            <div style={{display: "flex", justifyContent:  mobile ? "center" : "flex-end", alignItems: 'center', height: "100%", padding: mobile ? "20px 0px": "0px 100px 0px 0px" }}>
                <Card style={{width: mobile ? "350px" : "550px", padding: mobile ? "12px 20px": "24px 50px",boxShadow: "2px 4px 10px rgba(0,0,0,0.1)", marginTop: "20px"}}>
                    <Title level={2} style={{color: "#13384e"}}> Our Mission. </Title>

                    <Paragraph style={{lineHeight: "1.9", textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem qui in velit architecto, rerum saepe reprehenderit delectus aliquid quo facere praesentium culpa cupiditate. Sequi id consectetur nostrum quas similique expedita perferendis magnam, voluptate labore earum rerum quis! Ipsam qui quia temporibus excepturi ad nobis accusantium eligendi sapiente nulla. Non?</Paragraph>
                    <Paragraph style={{lineHeight: "1.9", textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem qui in velit architecto, rerum saepe reprehenderit delectus aliquid quo facere praesentium culpa cupiditate. Sequi id consectetur nostrum quas similique expedita perferendis magnam, voluptate labore earum rerum quis! Ipsam qui quia temporibus excepturi ad nobis accusantium eligendi sapiente nulla. Non?</Paragraph>

                </Card>
            </div>
          
            <img src={squiggle} style={{ width: "100%", position: 'absolute', transform: "scaleX(-1.2)", bottom: "-2px", fill: "red"}}></img>

        </div>
    )
}

export default Mission