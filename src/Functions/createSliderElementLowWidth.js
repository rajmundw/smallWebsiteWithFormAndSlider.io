import React from 'react'

//
const createSliderElementLowWidth= (element1) =>{

    const slider =
        <div className="container-fluid">
            <div className="row slider">
                <div className="col-12 col-sm-12  ">
                    <div>
                        {/*//url*/}
                        <img src={element1[0]} />
                    </div>
                    <div>
                        <h1>{element1[1]}</h1>
                        <p>{element1[2]}</p>
                    </div>
                </div>
            </div>
        </div>

    return slider
}
export default createSliderElementLowWidth