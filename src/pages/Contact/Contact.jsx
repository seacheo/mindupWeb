import React, {useState} from 'react'

import {Card, Typography, Input, message} from 'antd'

import useMedia from '../../hooks/useMedia'

import pattern from '../../assets/pattern.svg'

import { MailOutlined, QuestionOutlined } from '@ant-design/icons';

import {motion} from 'framer-motion'

const {Title, Paragraph} = Typography

const Contact = () => {

    const mobile = useMedia(['(min-width: 600px)', '(max-width: 600px)'], [false, true])

    const [form, setForm] = useState({email: "", subject: "", message: ""})

    const handleForm = (e) => {
        setForm({...form, [e.target.id] : e.target.value})
    } 

    const sendMessage = async () => {
        
        let emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

        if(!emailRegEx.test(form.email)){
            message.error("Invalid Email")
        } else if(!form.subject) {
            message.error("A subject is required")
        } else if(!form.message){
            message.error("A message is required")
        } else {
            try {
                // send user's message somehwere

                message.success("Message Sent")
            } catch (err) {
                message.error("Server Error")
            }
        }

    }


    return(

        <div style={{width: "100%", height: "calc(100vh - 80px)", display: 'flex', justifyContent: 'center', alignItems: "center", }}>
            <div style={{position: 'relative'}}>
                <Card style={{width: mobile ? "400px" : "550px",height: "500px",  padding: mobile ? "12px 20px": "24px 50px", boxShadow: "2px 4px 10px rgba(0,0,0,0.1)", marginTop: "20px", position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center'}}>
                    <div>
                        <Title level={2} style={{color: "#13384e", marginBottom: '20px'}}> Contact Us. </Title>
                        <Input id="email" onChange={handleForm} value={form.email} style={{height: "38px", borderRadius: "5px", marginBottom: "25px"}} placeholder="Email" prefix={<MailOutlined style={{color: "#ffc041", marginRight: "5px"}}/>}></Input>
                        <Input id="subject" onChange={handleForm} value={form.subject} style={{height: "38px", borderRadius: "5px", marginBottom: "25px"}} placeholder="Subject" prefix={<QuestionOutlined style={{color: "#ffc041", marginRight: "5px"}}/>}></Input>

                        <Input.TextArea id="message" onChange={handleForm} value={form.message} autoSize={{ minRows: 6, maxRows: 6 }} placeholder="Your message" style={{ borderRadius: "5px", marginBottom: "25px"}} ></Input.TextArea>

                        <motion.div onClick={sendMessage} whileHover={{scale: 1.03, transition: {type: 'linear'}}} style={{ background: "#ffc041", padding: "8px 20px", width: "100%", textAlign: "center", color: "white", cursor: "pointer",borderRadius: "5px"}}>
                        Send Message
                        </motion.div>
                    </div>


                </Card>
                <img src={pattern} style={{position: 'absolute', top: '-25px', zIndex: '0', right: "-50px"}}></img>
            </div>

        </div>

    )
}

export default Contact