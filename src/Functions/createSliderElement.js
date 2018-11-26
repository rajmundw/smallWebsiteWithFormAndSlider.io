import React from 'react'

//function gets 3 elements. one for one slider element
const createSliderElement= (element1, element2, element3) =>{

    const slider =
                <div className="container-fluid">
                    <div className="row slider">
                        <div className="col-xl-4 col-lg-4 col-md-4 ">
                            <div>
                                {/*//url*/}
                                <img src={element1[0]} />
                            </div>
                            <div>
                                <h1>{element1[1]}</h1>
                                <p>{element1[2]}</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 ">
                            <div>
                                <img src={element2[0]} />
                            </div>
                            <div>
                                <h1>{element2[1]}</h1>
                                <p>{element2[2]}</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4  ">
                            <div>
                                <img src={element3[0]} />
                            </div>
                            <div>
                                <h1>{element3[1]}</h1>
                                <p>{element3[2]}</p>
                            </div>
                        </div>

                    </div>
                </div>

    return slider
}
export default createSliderElement