import React from 'react'
import bits from '../media/components/bits.jpg'
import '../css/components/profileCard.css'
import Badges from './badges'

function ProfileCard({ pcard }){
    console.log(pcard.cvr)
    pcard.cvr = pcard.cvr? pcard.cvr: bits
    return (
        <a style={{textDecoration: 'none', color:'inherit'}} href={pcard.url} target='_blank' rel="noreferrer">
            <div className="Profile-card">
                <img src={pcard.cvr} alt="img"></img>
                <hr/>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>{pcard.title}</h1>
                    <Badges badge={pcard.badge}/>
                </div>
                <h3>{pcard.subtitle}</h3>
                <p>{pcard.bio}</p>
            </div>       
        </a>

    )
}

export default ProfileCard;