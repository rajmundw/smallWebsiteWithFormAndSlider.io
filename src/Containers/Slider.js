import React, { Component } from 'react';
import SliderHeader from '../Components/SliderHeader'
import SliderBody from '../Functions/sliderBody'
import SliderBodyLowWidth from "../Functions/sliderBodyLowWidth"
import unactive from '../img/sliderUnactive.png'
import active from '../img/sliderActive.png'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class MainSlider extends Component {
    constructor(props) {
        super();
        this.state = {
            sliderNavId: '1',
            currentMainWidth: window.innerWidth
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



    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.currentMainWidth,'nextprops')
        console.log(this.state.currentMainWidth,'state')
        if((nextState.currentMainWidth>=768&&this.state.currentMainWidth<768)||(nextState.currentMainWidth<768&&this.state.currentMainWidth>=768)){
            console.log('true')
            return true
        }else{
            console.log('false')
            return false;
        }

    }

    render() {
        window.addEventListener("resize", () => {
            this.setState({
                currentMainWidth:window.innerWidth
            })

           console.log()

        })
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        if (this.state.currentMainWidth < 768) {
            return (
                <div className="container-fluid main-slider-container">
                    <SliderHeader click={this.onHandlerSwitchSliderNav}/>
                    <Slider {...settings}>
                        <div>
                            <h3> {SliderBodyLowWidth()[0]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBodyLowWidth()[1]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBodyLowWidth()[2]}
                            </h3>
                        </div>
                        <div>
                            <h3>  {SliderBodyLowWidth()[3]}
                            </h3>
                        </div>
                        <div>
                            <h3> {SliderBodyLowWidth()[4]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBodyLowWidth()[5]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBodyLowWidth()[6]}
                            </h3>
                        </div>
                        <div>
                            <h3>  {SliderBodyLowWidth()[7]}
                            </h3>
                        </div>
                        <div>
                            <h3> {SliderBodyLowWidth()[8]}
                            </h3>
                        </div>
                        <div>
                            <h3> {SliderBodyLowWidth()[9]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBodyLowWidth()[10]}
                            </h3>
                        </div>
                        <div>
                            <h3>  {SliderBodyLowWidth()[11]}
                            </h3>
                        </div>
                    </Slider>
                </div>
            )
        } else {

            return (
                <div className="container-fluid main-slider-container">
                    <SliderHeader click={this.onHandlerSwitchSliderNav}/>
                    <Slider {...settings}>
                        <div>
                            <h3>  {SliderBody()[0]}
                            </h3>
                        </div>
                        <div>
                            <h3> {SliderBody()[1]}
                            </h3>
                        </div>
                        <div>
                            <h3>{SliderBody()[2]}
                            </h3>
                        </div>
                        <div>
                            <h3> {SliderBody()[3]}
                            </h3>
                        </div>

                    </Slider>
                </div>
            );
        }
    }

}

export default MainSlider
