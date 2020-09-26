import { Typography } from 'antd';
import React, {useState, useEffect} from 'react'

import ReactTooltip from "react-tooltip";

import { ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";


const {Title} = Typography


const geoURL =   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {

    const [content, setContent] = useState("");


    const availabileLocations = ['United States of America', 'Canada', 'Japan', 'United Kingdom', 'Australia', 'Mexico', 'Germany', 'Italy', 'New Zealand']

    const availableStyle = {
        default: {
          fill: "#1f5b7e",
          outline: "none"
        },
        hover: {
          fill: "#1e5477",
          outline: "none"
        },
        pressed: {
          fill: "#1e5477",
          outline: "none"
        }
      }

    const defaultStyle={
        default: {
          fill: "#fff3e4",
          outline: "none"
        },
        hover: {
          fill: "#ffefda",
          outline: "none"
        },
        pressed: {
          fill: "#ffefda",
          outline: "none"
        }
      }

    return(
    <div style={{marginTop: "80px"}}>
        <Title level={2} style={{color: "#13384e", textAlign: "center", position: "relative", top: "3%"}}> Availability </Title>
        <ComposableMap
        data-tip=""
        style={{position: 'relative', top: "-8vw"}}
        projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147
          }}
    >
                <Geographies      
                stroke="#FFFFFF"
                strokeWidth={0.2} 
                geography={geoURL}
            >
                {({ geographies }) =>
                geographies.map(geo =>{
                    const { NAME } = geo.properties;
                    const availabile = availabileLocations.includes(NAME)

                    if(NAME != "Antarctica"){
                        return(
                        <Geography 
                            key={geo.rsmKey} 
                            geography={geo} 
                            style={ availabile ? availableStyle : defaultStyle}
                            onMouseEnter={() => {
                                const { NAME } = geo.properties;
                                setContent(`${NAME} — ${availabile ? "Availabile" : " Not Available"}`);
                            }}
                            onMouseLeave={() => {
                                setContent("");
                            }}
                        />
                        )
                    }
                })
                }
            </Geographies>
        </ComposableMap>
        <ReactTooltip type="light" textColor="#13384e" style={{background: "white"}}>{content}</ReactTooltip>
     </div>
    )
}



export default Map