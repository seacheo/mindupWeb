import React, {useState} from 'react'

import { FileSearchOutlined, LeftOutlined,DownOutlined, BulbOutlined} from '@ant-design/icons';
import {Typography, Card} from 'antd'


const {Title, Paragraph, Text} = Typography






const ShowcaseDropdown = ({type, title, paragraphs, link}) => {

    const [open, setOpen] = useState(false)

    return(
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px', width:'84vw', maxWidth: '832px'  }}>
                <Card onClick={() => setOpen(!open)} Title="1" style={{cursor: 'pointer',width: '100%', borderRadius: "10px", display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{width: "50px"}}>
                            {type == "paper" ? 
                            <FileSearchOutlined style={{fontSize: "50px", color: "#ffc041"}}/>
                            :
                            <BulbOutlined style={{fontSize: "50px", color: "#ffc041"}}/>
                            }
                        </div>
                        <div style={{width: "80%", textAlign: 'right', display: 'flex', alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', color: "#13384e"}}> {title} </Title>
                            {open ?
                            <LeftOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>
                            :
                            <DownOutlined  style={{fontSize: "20px", color: "#ffc041", marginLeft: "20px"}}/>

                            }
                        </div>
                    </div>
                    {open?
                    <div style={{width: '100%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: "0px 5%", alignItems: 'center'}}>
                            <Title level={4} style={{margin: '0px', marginTop : "30px"}}> Abstract </Title>
                            <Text style={{marginTop : "30px", color: "#ffc041"}}><a target="_blank" href={link}>View {type}</a></Text>
                        </div>

                        {paragraphs.map(p => {
                            return(
                                <Paragraph style={{textAlign: 'justify', width: "100%", marginTop : "10px", padding: "0px 5%"}}>
                                    {p}
                                </Paragraph>
                            )
                        })}

                    </div>

                    :
                    <> </>
                    }

                </Card>
            </div>
    )
}

export default ShowcaseDropdown