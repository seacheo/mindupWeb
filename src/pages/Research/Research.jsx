import React, { useState, useEffect } from 'react'

import {Typography, Card, Collapse} from 'antd'

import { FileSearchOutlined, LeftOutlined,DownOutlined, BulbOutlined} from '@ant-design/icons';

import ShowcaseDropdown from './ShowcaseDropdown'

const {Title, Paragraph, Text} = Typography

const {Panel} = Collapse


const Research = () => {

    const [open, setOpen] = useState([])

    useEffect(() => {
        document.title = "Mindup | Research"
    })


    return(
        <div style={{display: 'flex', width: '100%', alignItems: 'center', textAlign: 'center', flexDirection: 'column', margin: "50px 0px"}}>
                                    
            <Title level={2} style={{color: "#13384e", margin: '20px 0px'}}> Our Research </Title>

            <ShowcaseDropdown 
                type="paper" 
                link="https://link.springer.com/chapter/10.1007%2F978-3-030-59277-6_21"
                title="Deep LSTM Recurrent Neural Network for Anxiety Classification from EEG in Adolescents with Autism"
                paragraphs={["Anxiety is common in youth with autism spectrum disorder (ASD), causing unique lifelong challenges that severely limit everyday opportunities and reduce quality of life. Given the detrimental consequences and long-term effects of pervasive anxiety for childhood development and the covert nature of mental states, brain-computer interfaces (BCIs) represent a promising method to identify maladaptive states and allow for individualized and real-time mitigatory action to alleviate anxiety. Here we investigated the effects of slow paced breathing entrainment during stress induction on the perceived levels of anxiety in neurotypical adolescents and adolescents with autism, and propose a multi-class long short-term recurrent neural net (LSTM RNN) deep learning classifier capable of identifying anxious states from ongoing electroencephalography (EEG) signals. The deep learning classifier used was able to discriminate between anxious and non-anxious classes with an accuracy of 90.82% and yielded an average accuracy of 93.27% across all classes. Our study is the first to successfully apply an LSTM RNN classifier to identify anxious states from EEG. This LSTM RNN classifier holds promise for the development of neuroadaptive systems and individualized intervention methods capable of detecting and alleviating anxious states in both neurotypical adolescents and adolescents with autism."]}
            />

            <ShowcaseDropdown 
                type="patent" 
                link="https://link.springer.com/chapter/10.1007%2F978-3-030-59277-6_21"
                title="Nueroadaptive Breathing Entrainment System for Individualized Modulated Respiration"
                paragraphs={[
                    "A neuroadaptive breathing entrainment system for guiding a user to a relaxed mental state via modulated respiration. Our system classifies neurophysiological activity (e.g. electroencephalography (EEG) or heart rate variability (HRV)) with a machine learning (ML) model, and displays the user’s current mental state and recommended breathing pattern. Our system includes a neural decoder, which classifies mental states from EEG channels with a ML model (e.g LSTM RNN) and feeds the user’s mental state data into a feedback controller (e.g. PID). The controller prescribes the parameters (e.g. breathing rate) for the audiovisual guide. The audiovisual guide displays a set of analogical representations, both auditory and visual (e.g. a pulsating circle or audio rising and falling in pitch and volume), to guide the user’s breathing towards a more ideal rate.",
                    "Fundamentally, the system has a lead signal (the adaptive breathing entrainment) and a feedback signal (informing the user of their current mental state) that work in synchrony to identify the ideal breathing rhythm for a user to effectively address unfavorable mental states (e.g. anxiety). The breathing entrainment system is adaptive—taking into account the ML output to determine whether a particular breathing rate is having an alleviating effect on the user’s mental state and adapts the rate accordingly until it finds the user’s ideal breathing rate. The audiovisual guide directs the user to change their breathing rate, and in turn, the classifier detects a new mental state and the cycle continues, hence the closed loop."
                ]}
            />
        

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