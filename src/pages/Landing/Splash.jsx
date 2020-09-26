import React, {useState} from 'react'
import useMedia from '../../hooks/useMedia'


import { message, Card, Typography, Button, Dropdown, Divider,Menu, Carousel, Input} from 'antd';

import { MailOutlined } from '@ant-design/icons';

import {motion} from 'framer-motion'



import journal from '../../assets/journal.png'
import mockup from './mockup.gif'
import pattern from '../../assets/pattern.svg'




const {Title, Text} = Typography


const Splash = () => {

    const [email, setEmail] = useState("")

    const sendEmail = async () => {
        
        let emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

        if(emailRegEx.test(email)){
            try {
                // send user's email somewhere to handle
                message.success("Email Sent")
            } catch (err) {
                message.error("Server Error")
            }
        } else {
            message.error("Invalid Email")
        }

    }

    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])

    return(
        <div >
      {mobile?
      // mobile
      <div style={{display: "flex", justifyContent:"center", marginTop: '55px', flexWrap: "wrap"}}>
            <motion.div initial={{ opacity: 0.0}} animate={{ opacity: 1}} transition={{duration: 0.9}} style={{width: "90%", height: "inherit", textAlign: 'center'}}>
              <Title level={3} style={{ fontWeight: "600",letterSpacing:"1.2px", marginBottom: "15px", fontSize: "1.3em", textAlign: "center", color: "#13384e"}}>Begin learning with just a few breaths. </Title>
              <Text style={{fontSize: "14px",lineHeight: "1.4px", fontFamily: "'Nunito', sans-serif", color: "#13384e"}} > Creating breathing-based neurotechnologies for young students with autism. </Text> 
              <br/>

            </motion.div>
            
            <div style={{marginTop: "30px",position: "relative", width:"80%", paddingLeft: "10%"}}>
              <motion.img whileHover={{scale: 1.04, transition:{type: 'linear'}}} initial={{ x: 1000, scale: 1.2}} animate={{ x: 0, scale: 1.01, transition: {duration: 0.5, type: "spring", delay:0.1}}}  style={{ position: "relative",width: "85%", zIndex: "3"}} src={mockup}></motion.img>
              {/* <motion.img  src={pattern} style={{position: "absolute", bottom:"2%", left: "7%", zIndex: "0", width:"50%"}}></motion.img > */}
              
            </div>

            <motion.div initial={{ opacity: 0.0}} animate={{ opacity: 1}} transition={{duration: 0.9}} style={{width: "100%", height: "inherit", marginTop: "20px", textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Input onPressEnter={sendEmail} value={email} onChange={(e) => setEmail(e.target.value)} style={{height: "38px", borderRadius: "5px", width: "50%"}} placeholder="Email" prefix={<MailOutlined style={{color: "#ffc041", marginRight: "5px"}}/>}></Input>
              <motion.div  onClick={sendEmail} whileHover={{scale: 1.05, transition: {type: 'linear'}}} style={{marginTop:"15px", background: "#ffc041", padding: "8px 20px", width: "50%", textAlign: "center", color: "white", cursor: "pointer",borderRadius: "5px"}}>
                Get Access
              </motion.div>
            </motion.div>

      </div>
      :
      <div style={{display: "flex", justifyContent:"space-between", alignItems: "center", marginTop: '120px', padding: "0px 10px 0px 10px"}}>

      <motion.div initial={{ opacity: 0.0}} animate={{ opacity: 1}} transition={{duration: 0.9}} style={{width: "45%", height: "inherit", marginLeft: "8%"}}>
        <Title level={3} style={{fontWeight: "600", letterSpacing:"1.2px", marginBottom: "12px", fontSize: '2.0rem', color: "#13384e"}}>Begin learning with just a few breaths.</Title>
        <Text style={{fontSize: "1.2rem", lineHeight: "1.4px", fontWeight: '300', fontFamily: "'Nunito', sans-serif", color: "#13384e"}}> Creating breathing-based neurotechnologies for young students with autism. </Text> 
        <br/>
        <div style={{display: "flex", justifyContent: "flex-start", marginTop:"30px"}}>
            <Input onPressEnter={sendEmail} value={email} onChange={(e) => setEmail(e.target.value)} style={{height: "38px", borderRadius: "5px", width: "300px", marginRight: "20px"}} placeholder="Email" prefix={<MailOutlined style={{color: "#ffc041", marginRight: "5px"}}/>}></Input>
            <motion.div onClick={sendEmail} whileHover={{scale: 1.05, transition: {type: 'linear'}}} style={{ background: "#ffc041", padding: "8px 20px", width: "125px", textAlign: "center", color: "white", cursor: "pointer",borderRadius: "5px"}}>
            Get Access
            </motion.div>
        </div>

      </motion.div>
      <div style={{position: "relative", width:"37%"}}>
        <motion.img whileHover={{scale: 1.04, transition:{type: 'linear'}}} initial={{ x: 1000, scale: 1.2}} animate={{ x: 0, scale: 1.01, transition: {duration: 0.5, type: "spring", delay:0.01}}}  style={{ position: "relative",width: "60%", zIndex: "3"}} src={mockup}></motion.img>
        {/* <motion.img  src={pattern} style={{position: "absolute", bottom:"2%", left: "1%", zIndex: "0", width:"50%"}}></motion.img > */}
        
      </div>

      </div>
      }  
    </div>
    )
}

export default Splash