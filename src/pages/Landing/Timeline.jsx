import React from 'react'
import useMedia from '../../hooks/useMedia'


import { Timeline, Card, Typography, Button, Dropdown, Divider,Menu, Carousel} from 'antd';
import { ExclamationOutlined, LoadingOutlined, SearchOutlined, DollarCircleOutlined, RiseOutlined, FileSearchOutlined} from '@ant-design/icons';

import {motion} from 'framer-motion'



const {Text, Title} = Typography

const TimelineComponent = () => {

    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])


    const timelineColor = "#ffc041"

    return(
    
    <div style={{position: 'relative', marginBottom: "60px", marginTop: "10px"}}>
        <div style={{ width:'100%', borderRadius: "20px", display:'flex', alignItems:'center', flexDirection: 'column'}}>
           {mobile ?
            <Title level={3} style={{ fontWeight: "400",letterSpacing:"1.2px", marginTop: "30px", fontSize: "1.3em"}}>Our Timline</Title>
            :
            <Title level={2} style={{color: "#13384e", marginTop: "30px"}}> Our Timeline </Title>
            }
            <div style={{width: mobile ? "100%" : "90%", maxWidth:'1000px', marginRight:'25%'}}>
                <Timeline mode="left" style={{marginTop: "30px"}}>
                    <Timeline.Item color={timelineColor} label="April 2019" style={{height: mobile ? "120px ":'100px'}}> 
                        <motion.div>
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Ideation</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Began prototyping breathing entrainment system</Text>
                        </motion.div>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="July 2019"   style={{height: mobile ? "140px ":'100px'}}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Working prototype</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Completed several prototyping iterations, resulting in a working prototype. </Text>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="September 2019"   style={{height: mobile ? "140px ":'100px'}}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Distributed Software</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Partnered with San Francisco Bay Area schools and began distributing software</Text>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="Febuary 2020"   style={{height: mobile ? "130px ":'100px' }}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Presented Locally</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Present validated breathing entrainment software at Golden Gate STEM Fair</Text>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="April 2020"   style={{height: mobile ? "120px ":'100px'}}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Deep Learning Added</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Designed deep learning breathing entrainment adaptation feature</Text>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="September 2020"   style={{height:mobile ? "150px ":'100px'}}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Presented Internationally</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Presented results of deep learning research at the International Conference on Brain Informatics in Padua, Italy </Text>
                    </Timeline.Item>
                    <Timeline.Item color={timelineColor} label="October 2020"   style={{height:'100px'}}> 
                        <Text strong style={{fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Published</Text> <br/>
                        <Text style={{fontWeight: '300',fontFamily: "'Nunito', sans-serif", color: "#13384e"}}>Published paper in Springer-Nature LNAI Brain Informatics Journal validating the breathing entrainment interface </Text>
                    </Timeline.Item>
                </Timeline>
            </div>
      </div>
      </div>
    )
}

export default TimelineComponent