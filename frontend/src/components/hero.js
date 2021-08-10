import React from 'react'
import '../css/components/hero.css'

function Hero(props){
    let title = props.title? props.title: 'Your'
    return (
        <div className="Hero">
            <div className="Hero-content">
                <h1>{title} Link Tree</h1>
                {/* <hr/>  */}
            </div>
        </div>
        
    )
}

export default Hero;