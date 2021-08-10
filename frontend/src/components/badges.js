import React from 'react'
import '../css/components/badges.css'
import badgeIc from '../media/components/robot.svg'

function Badges(props){
    let badge_element = (
        <div className="Badge-container">
            <img src={props.badge} alt='img'></img>
        </div>
    )
    return props.badge? badge_element: <div className="Badge-container"/>
}

export default Badges;