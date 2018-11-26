import React from 'react'

const ageOptions = () =>{
    //array with age from 10 to 100
    let ageArray=[]
    //create age from 10 to 100
    for (let i = 10; i <101 ; i++) {
        let j=i-10
        ageArray[j]=i
    }
    //add on first array place answer
    ageArray.unshift('Ile masz lat?')
    //create array with react components
    let optionsArray=ageArray.map(element=>{
        return <option>{element}</option>
    })
    return optionsArray
}

export default ageOptions