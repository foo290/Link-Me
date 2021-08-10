import React from 'react'
import '../css/components/holder.css'
import ProfileCard from './profile_card';
import badge from '../media/components/robot.svg'

function Holder(props){
    let profileCards = props.profileCards

    const cards = profileCards.map(pcard => {
        return <ProfileCard pcard={pcard}/>
    })

    return (
        <div className="Holder">
            {cards}
        </div>
    )
}

export default Holder;