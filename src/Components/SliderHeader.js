import React from 'react'
import unactive from '../img/sliderUnactive.png'
import active from '../img/sliderActive.png'

const sliderHeader = (props) =>{

//slider header with navigation to slider
    const headers=
        <div className="container-fluid">
            <div className="slider-header">
                <div className="row">
                    <div className="col-md-10 ">
                        2. Zakoduj Slajder
                    </div>
                    <div className="col-md-2 slider-nav">
                        {/*id to get to know which part of slider user choosed*/}
                        <div  id='1' className="active">
                            {/*event on click to set state and make active part of slider*/}
                            <img onClick={props.click}  src={active} />
                        </div>
                        <div id='2'>
                            <img onClick={props.click} src={unactive} />
                        </div>
                        <div id='3'>
                            <img  onClick={props.click}  src={unactive} />
                        </div>
                        <div id='4'>
                            <img onClick={props.click}  src={unactive} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    return headers
}

export default sliderHeader