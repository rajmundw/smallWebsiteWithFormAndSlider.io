import React from 'react'

const formHeader = () =>{
    //form header
    const headers=
        <div className="container-fluid">
            <div className="main-header">
                <div className="row">
                    <div className="col-md-12 ">
                        Zadanie<span> testowe</span>
                    </div>
                </div>
            </div>
            <div className="form-header">
            <div className="row">
                <div className="col-md-12 ">
                    1. Zakoduj formularz
                </div>
            </div>
            </div>
        </div>
    return headers
}

export default formHeader