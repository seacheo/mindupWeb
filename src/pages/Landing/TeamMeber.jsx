import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'

import { Avatar, Card, Typography, Button, Dropdown, Divider,Menu, message} from 'antd';

import { LinkedinFilled, YoutubeFilled } from '@ant-design/icons';


import {motion} from 'framer-motion'

const {Title, Text} = Typography



const TeamMember = ({info}) => {




  return(

  <motion.div  style={{width: 220, margin:'30px'}}  whileHover={{scale: 1.05, transition: {type: 'linear'}}}>
    <Card
      hoverable
      style={{ width: "100%", cursor: "default",  borderRadius:"15px"}}
      cover={<Avatar size={220} style={{ borderRadius:"10px"}} alt="example" src={info.img} />}
    >
      <Card.Meta title={<Text strong style={{color: "#13384e"}}>{info.name}</Text>} description={<div style={{display:'flex', width:"100%",justifyContent:'space-between', alignItems: "center", color: "#13384e"}}>
              <Text  style={{color: "#13384e"}}>{info.role} </Text>
              <div>
              {info.linkedIn &&
              <Text style={{fontSize: "16px"}}> <a target="_blank" href={`https://linkedin.com/in/${info.linkedIn}`}><LinkedinFilled/></a></Text>
              }
              {/* {info.youtube &&
              <Text style={{fontSize: "16px"}}> <a target="_blank" href={info.youtube}><YoutubeFilled/></a></Text>
              } */}
              </div>

          </div>} />
    </Card>
      </motion.div>


   
    
    //   <div style={{position: 'static', height: "250px", background: "red", borderRadius: "8px"}}>
    //       <Avatar size={200} style={{borderRadius: "5px",  filter:" grayscale(100%)"}} src={beier}></Avatar>
    //   </div>
  )
}

export default TeamMember;
