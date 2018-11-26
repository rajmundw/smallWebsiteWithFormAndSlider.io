import React, { Component } from 'react';
import SliderHeader from '../Components/SliderHeader'
import SliderBody from '../Components/SliderBody'
import unactive from '../img/sliderUnactive.png'
import active from '../img/sliderActive.png'


class Slider extends Component {
    constructor(props) {
        super();
        this.state = {
            sliderNavId: '1'
        }
    }


    //function to setting slider nav
    onHandlerSwitchSliderNav = (event) => {
        //changing green point in slider nav
        const newSliderNavId=event.target.parentElement.id
        const sliderNavElements=event.target.parentElement.parentElement.querySelectorAll('img')
        const clickedNavElement=event.target
        sliderNavElements.forEach(element=>{
            element.src=unactive
            element.style.width="15px"
            element.parentElement.style.width="15px"
        })
        clickedNavElement.src=active
        clickedNavElement.style.width="30px"
        clickedNavElement.parentElement.style.width="30px"

        //set state on click event on nav
        this.setState ({
            sliderNavId:newSliderNavId
        })
    }



    render(){
        return(
            <div className="main-slider-container">
                <SliderHeader click={this.onHandlerSwitchSliderNav}/>
                <SliderBody sliderNavId={this.state.sliderNavId}/>
            </div>
        )
    }
}

export default Slider
