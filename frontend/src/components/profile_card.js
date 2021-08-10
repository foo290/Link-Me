import React from 'react'
import defaultcvr from '../media/components/ww.jpg'
import '../css/components/profileCard.css'
import Badges from './badges'

function ProfileCard({ pcard }){
    console.log(pcard.cvr)
    pcard.cvr = pcard.cvr? pcard.cvr: defaultcvr
    pcard.bio = pcard.bio? pcard.bio: "Click to explore..."
    return (
        <div className={'Profile-card'}>
            <a href={pcard.url} rel={'noreferrer'} target={'_blank'}>
            <div className={`${'card'}`} style={{width: "18rem;"}}>
                <img src={pcard.cvr} className={"card-img-top"} alt={"..."}/>
                <hr/>
                <div className={'row'}>
                    <div className={'col'}><h1>{pcard.title}</h1></div>
                    <div className={'col'}><Badges badge={pcard.badge}/></div>
                    <h4>{pcard.subtitle}</h4>
                </div>
                <p>{pcard.bio}</p>
            </div>
            </a>
        </div>
    )
}

export default ProfileCard;