import React, {PureComponent} from 'react'
import createSliderElement from "../Functions/createSliderElement"
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"




class sliderBody extends PureComponent{

    render(){
        //text below foto on slider
        const text1="Lorem ipsum dolor sit amet."
        //part of slider which is rendering on website
        let slider=''

        //switch working on state, choosing part of slider
        switch(this.props.sliderNavId){
            case '1':{

                //table with elements
                const element1=[slide1,'Slajder #1',text1]
                const element2=[slide2,'Slajder #2',text1]
                const element3=[slide3,'Slajder #3',text1]
                //function which create slider
                slider = createSliderElement(element1,element2,element3)
                return slider
            }
            case '2':{
                const element1=[slide1,'Slajder #4',text1]
                const element2=[slide2,'Slajder #5',text1]
                const element3=[slide3,'Slajder #6',text1]
                slider = createSliderElement(element1,element2,element3)
                return slider
            }
            case '3':{
                const element1=[slide1,'Slajder #7',text1]
                const element2=[slide2,'Slajder #8',text1]
                const element3=[slide3,'Slajder #9',text1]
                slider = createSliderElement(element1,element2,element3)
                return slider
            }
            case '4':{
                const element1=[slide1,'Slajder #10',text1]
                const element2=[slide2,'Slajder #11',text1]
                const element3=[slide3,'Slajder #12',text1]
                slider = createSliderElement(element1,element2,element3)
                return slider
            }default: {
                console.log('default')
            break
        }
        }
        return slider
    }

}

export default sliderBody