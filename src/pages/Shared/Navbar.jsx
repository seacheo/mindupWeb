import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'

import { Row, Col, Typography, Button, Dropdown, Divider,Menu, Drawer} from 'antd';

import { SearchOutlined, TwitterOutlined, TeamOutlined, MenuOutlined, YoutubeFilled, HomeOutlined} from '@ant-design/icons';

import logo from '../../assets/mindup-logo.png'

import useMedia from '../../hooks/useMedia'
import {motion} from 'framer-motion'

const {SubMenu} = Menu

const {Title , Text, Paragraph} = Typography

const menu = (
    <Menu style={{textAlign: "center", borderRadius: "10px"}}>
      <Menu.Item>
        <Link to="/team"> Research </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/team"> Contact </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          Contact
        </a>
      </Menu.Item> */}
    </Menu>
);

const Navbar = () => {

  const mobile = useMedia(['(min-width: 600px)', '(max-width: 600px)'], [false, true])

  const [drawerVisibility, setDrawerVisibility] = useState(false)

  return (
    <>
      {mobile ?
        <div style={{padding: "0px 10px"}}>
        <Row style = {{padding: '10px', height:"80px"}} align = "middle">
        <Col span={24} style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Link to="/"><img src={logo} style={{height:"calc(50px * 0.45)"}}></img></Link>
            <MenuOutlined onClick={() => setDrawerVisibility(true)} style={{fontSize: "20px", color: "#1f5b7e"}}/>
        </Col>
        </Row>
        <Drawer
          placement="right"
          closable={true}
          visible={drawerVisibility}
          onClose={()=> setDrawerVisibility(false)}
        >
          <p style={{fontSize: "14px"}}><Link to='/' onClick={() => setDrawerVisibility(false)}> <HomeOutlined style={{marginRight: '5px'}}/> Home</Link></p>
          <p style={{fontSize: "14px"}}><Link to='/research' onClick={() => setDrawerVisibility(false)}> <SearchOutlined style={{marginRight: '5px'}}/> Research</Link></p>
          <p style={{fontSize: "14px"}}><Link to='/contact' onClick={() => setDrawerVisibility(false)}> <TeamOutlined style={{marginRight: '5px'}}/> Contact</Link></p>

          {/* <p style={{fontSize: "14px"}}><Link> <LoginOutlined style={{marginRight: '5px'}}/> Login</Link></p> */}
          {/* <Divider></Divider>
          <p style={{fontSize: "14px"}}><a target="_blank" href="https://www.youtube.com/watch?v=rANh6-WcNkA&feature=emb_title"> <YoutubeFilled style={{marginRight: '5px'}}/> Youtube</a></p> */}
          {/* <p style={{fontSize: "15px"}}><a> <TwitterOutlined style={{marginRight: '5px'}}/> Twitter</a></p> */}

        </Drawer>
      </div>
      :
      // desktop navbar
      <div style={{padding: "0px 10px"}}>
      <Row style = {{padding: '10px', height:"80px"}} align = "middle">
      <Col span={8} style={{display: "flex", alignItems: "center"}}>
          <Link to="/"><img src={logo} style={{marginLeft:"10px", height:"calc(50px * 0.55)"}}></img></Link>
          {/* <Text style={{marginLeft: "20px", fontSize: "14px", fontWeight: "500", letterSpacing: "1.2px", color: "rgba(0, 0, 0, 0.85)"}}> TABULA  </Text> */}
      </Col>
      <Col span={8} offset={8} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            {/* <a target="_blank" href="https://instagram.com/tabulaapp" style={{margin: "3px 10px 0px 10px"}}><TwitterOutlined style={{color: "#454545", fontSize: "15px"}}/></a> */}
            <Link to="/research"> <Text style={{color: "#13384e", fontSize: "16px"}}>Research</Text> </Link>
            <Divider type="vertical" style={{borderLeft: "1px solid rgb(31,91,126,0.4)", height: "18px", margin:"3px 20px 0px 20px"}}/>
            <Link to="/contact"> <Text style={{color: "#13384e", fontSize: "16px"}}>Contact</Text> </Link>
            {/* <Dropdown overlay={menu} placement="bottomRight">
                <a className="ant-dropdown-link" style={{}} onClick={e => e.preventDefault()}>
                    <Text style={{color: "#13384e"}}>Information</Text>
                </a>
            </Dropdown> */}

           
            {/* <Divider type="vertical" style={{borderLeft: "1px solid rgb(0,0,0,0.2)", height: "18px", margin:"3px 20px 0px 20px"}}/>
            <Text style={{marginRight: "10px"}}> <Link to="/login">Login</Link></Text> */}

          
      </Col>
      </Row>

    </div>
      }
    </>
   

  )
}

export default Navbar;
