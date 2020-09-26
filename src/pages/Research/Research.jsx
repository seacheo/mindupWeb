import React, { useState } from 'react'

import {Typography, Card, Collapse} from 'antd'

import { FileSearchOutlined, LeftOutlined,DownOutlined, BulbOutlined} from '@ant-design/icons';


const {Title, Paragraph, Text} = Typography

const {Panel} = Collapse


const Research = () => {

    const [open, setOpen] = useState([])

    return(
        <div style={{display: 'flex', width: '100%', alignItems: 'center', textAlign: 'center', flexDirection: 'column', margin: "50px 0px"}}>
                                    
            <Title level={2} style={{color: "#13384e", margin: '20px 0px'}}> Our Research </Title>


            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px', width:'84vw', maxWidth: '832px'  }}>

                <Card onClick={() => {
                    if(open.includes(1)){
                        setOpen(open.filter(key => key != 1))
                    } else {
                        setOpen([...open, 1])
                    }
                }} Title="1" style={{cursor: 'pointer',width: '100%', borderRadius: "10px", display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{width: "50px"}}>
                            <FileSearchOutlined style={{fontSize: "50px", color: "#ffc041"}}/>
                        </div>
                        <div style={{width: "80%", textAlign: 'right', display: 'flex', alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', color: "#13384e"}}> Deep LSTM Recurrent Neural Network for Anxiety Classification from EEG in Adolescents with Autism </Title>
                            {open.includes(1) ?
                            <LeftOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>
                            :
                            <DownOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>

                            }
                        </div>
                    </div>
                    {open.includes(1) ?
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: "0px 5%", alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', marginTop : "30px"}}> Abstract </Title>
                            <Text style={{marginTop : "30px", color: "#ffc041"}}><a target="_blank" href="https://link.springer.com/chapter/10.1007%2F978-3-030-59277-6_21">View Paper</a></Text>
                        </div>

                        <Paragraph style={{textAlign: 'justify', width: "100%", marginTop : "10px", padding: "0px 5%"}}>
                            Anxiety is common in youth with autism spectrum disorder (ASD), causing unique lifelong challenges that severely limit everyday opportunities and reduce quality of life. Given the detrimental consequences and long-term effects of pervasive anxiety for childhood development and the covert nature of mental states, brain-computer interfaces (BCIs) represent a promising method to identify maladaptive states and allow for individualized and real-time mitigatory action to alleviate anxiety. Here we investigated the effects of slow paced breathing entrainment during stress induction on the perceived levels of anxiety in neurotypical adolescents and adolescents with autism, and propose a multi-class long short-term recurrent neural net (LSTM RNN) deep learning classifier capable of identifying anxious states from ongoing electroencephalography (EEG) signals. The deep learning classifier used was able to discriminate between anxious and non-anxious classes with an accuracy of 90.82% and yielded an average accuracy of 93.27% across all classes. Our study is the first to successfully apply an LSTM RNN classifier to identify anxious states from EEG. This LSTM RNN classifier holds promise for the development of neuroadaptive systems and individualized intervention methods capable of detecting and alleviating anxious states in both neurotypical adolescents and adolescents with autism.
                        </Paragraph>
                    </div>

                    :
                    <> </>
                    }
                
                </Card>
                </div>






                <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0px', width:'84vw', maxWidth: '832px'  }}>

                <Card onClick={() => {
                    if(open.includes(2)){
                        setOpen(open.filter(key => key != 2))
                    } else {
                        setOpen([...open, 2])
                    }
                }} Title="1" style={{cursor: 'pointer',width: '100%', borderRadius: "10px", display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{width: "50px"}}>
                            <BulbOutlined style={{fontSize: "50px", color: "#ffc041"}}/>
                        </div>
                        <div style={{width: "80%", textAlign: 'right', display: 'flex', alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', color: "#13384e"}}>  Nueroadaptive Breathing Entrainment System for Individualized Modulated Respiration </Title>
                            {open.includes(2) ?
                            <LeftOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>
                            :
                            <DownOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>

                            }
                        </div>
                    </div>
                    {open.includes(2) ?
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: "0px 5%", alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', marginTop : "30px"}}> Abstract </Title>
                            <Text style={{marginTop : "30px", color: "#ffc041"}}><a target="_blank" href="https://link.springer.com/chapter/10.1007%2F978-3-030-59277-6_21">View Patent</a></Text>
                        </div>



                        <Paragraph style={{textAlign: 'justify', width: "100%", marginTop : "10px", padding: "0px 5%"}}>
                        A neuroadaptive breathing entrainment system for guiding a user to a relaxed mental state via modulated respiration. Our system classifies neurophysiological activity (e.g. electroencephalography (EEG) or heart rate variability (HRV)) with a machine learning (ML) model, and displays the user’s current mental state and recommended breathing pattern. Our system includes a neural decoder, which classifies mental states from EEG channels with a ML model (e.g LSTM RNN) and feeds the user’s mental state data into a feedback controller (e.g. PID). The controller prescribes the parameters (e.g. breathing rate) for the audiovisual guide. The audiovisual guide displays a set of analogical representations, both auditory and visual (e.g. a pulsating circle or audio rising and falling in pitch and volume), to guide the user’s breathing towards a more ideal rate.                        
                        </Paragraph>
                        <Paragraph style={{textAlign: 'justify', width: "100%", marginTop : "10px", padding: "0px 5%"}}>
                        Fundamentally, the system has a lead signal (the adaptive breathing entrainment) and a feedback signal (informing the user of their current mental state) that work in synchrony to identify the ideal breathing rhythm for a user to effectively address unfavorable mental states (e.g. anxiety). The breathing entrainment system is adaptive—taking into account the ML output to determine whether a particular breathing rate is having an alleviating effect on the user’s mental state and adapts the rate accordingly until it finds the user’s ideal breathing rate. The audiovisual guide directs the user to change their breathing rate, and in turn, the classifier detects a new mental state and the cycle continues, hence the closed loop.
                        </Paragraph>
                    </div>

                    :
                    <> </>
                    }
                
                </Card>
                </div>



            <iframe  
                style={{margin: "20px 0px",borderRadius: "10px", width:'84vw', height: '47.2vw', maxWidth: '832px', maxHeight: '468px',boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}   
                src="https://drive.google.com/file/d/1LkUm98jRejgZQ7G2bAlY0IAI13TKEkRO/preview " 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />

          


           
        </div>
        

    )
}

export default Research