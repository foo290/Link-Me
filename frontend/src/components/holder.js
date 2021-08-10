import React from 'react'
import '../css/components/holder.css'
import ProfileCard from './profile_card';
import badge from '../media/components/robot.svg'

function Holder(props){
    let profileCards = props.profileCards

    const cards = profileCards.map(pcard => {
        return <div className={`${'col'}`}><ProfileCard pcard={pcard}/></div>
    })

    return (
        <div className={`${'container'}  Holder`}>
            <div className={`${'row'}`}>
                {cards}
            </div>
        </div>
    )
}

export default Holder;