import createSliderElement from "./createSliderElementLowWidth"
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"




const sliderBody =()=>{

    //text below foto on slider
    const text1="Lorem ipsum dolor sit amet."
    //part of slider which is rendering on website
    let slider=[]

    //variables with elements
    let element=[]
    element=[slide1,'Slajder #1',text1]
    slider.push(createSliderElement(element))
    element=[slide2,'Slajder #2',text1]
    slider.push(createSliderElement(element))
    element=[slide3,'Slajder #3',text1]
    slider.push(createSliderElement(element))
    element=[slide1,'Slajder #4',text1]
    slider.push(createSliderElement(element))
    element=[slide2,'Slajder #5',text1]
    slider.push(createSliderElement(element))
    element=[slide3,'Slajder #6',text1]
    slider.push(createSliderElement(element))
    element=[slide1,'Slajder #7',text1]
    slider.push(createSliderElement(element))
    element=[slide2,'Slajder #8',text1]
    slider.push(createSliderElement(element))
    element=[slide3,'Slajder #9',text1]
    slider.push(createSliderElement(element))
    element=[slide1,'Slajder #10',text1]
    slider.push(createSliderElement(element))
    element=[slide2,'Slajder #11',text1]
    slider.push(createSliderElement(element))
    element=[slide3,'Slajder #12',text1]
    slider.push(createSliderElement(element))
    return slider

}

export default sliderBody