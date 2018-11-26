import React from 'react'
import unactive from '../img/sliderUnactive.png'
import active from '../img/sliderActive.png'

const sliderHeader = (props) =>{

//slider header with navigation to slider
    const headers=
        <div >
            <div className="slider-header">
                <div className="row">
                    <div className="col-md-10 ">
                        2. Zakoduj Slajder
                    </div>

                </div>
            </div>
        </div>
    return headers
}

export default sliderHeader