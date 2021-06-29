

import { Button } from './Button'
import { Component } from "react"
// import React from 'react'
import img1 from '../imgv/photo-1517649763962-0c623066013b.jpg'
import img2 from '../imgv/hfood.jpg'
import './InfoSection.css'


class InfoSection extends Component {
    render() {
        return (
            <>
            <div className="container2">
                <img src={img1} className="img" />
                <h1>Sports</h1>
                <p>Sports are defined as physical or mental exertion by individuals and are committed to maintaining physical or mental fitness. There are many types of exercise that can be practiced  as a healthy habit, such as walking, riding, Swimming, or athletics, and these sports have many benefits on the human body and mind.Sport make the body ideal, consistent, and healthy, as it strengthens it, and fights obesity. Prevention of many diseases, including: Obesity, which is a cause of other diseases, such as: Diabetic cartilage disease, diabetes and high blood pressure. </p>
                <br/>
                <Button>More Info</Button>

            </div>

            <div className="container1">
                <img src={img2} className="img" />
                <h1>Nutrition</h1>
                <p>Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. The cornerstone of a healthy diet should be to replace processed food with real food whenever possible. Eating food that is as close as possible to the way nature made it can make a huge difference to the way you think, look, and feel.</p>
                <br/>
                <Button>More Info</Button>
            </div>

</>

        )
    }
}

export default InfoSection;