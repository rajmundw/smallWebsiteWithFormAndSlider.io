import React, { Component } from 'react';
import Form from './Form'
import FormHeader from '../Components/FormHeader'
import Slider from '../Containers/Slider'
class App extends Component {

    //did mount and adding proper height to site
    componentDidMount(){
        const currentMainWidth = window.innerWidth
        document.querySelector(".App").width=currentMainWidth
        const currentMainHeight = Math.round(currentMainWidth * (1318/1920))
        document.querySelector(".App").style.height = `${currentMainHeight}px`
        if(currentMainWidth<768){
            const inputs=document.querySelectorAll('.form-control-lg')
            const button=document.querySelectorAll('button')
            button[0].classList.add('button-small')
            inputs.forEach(element=>{
                element.classList.remove('form-control-lg')
            })
        }else{
            const inputs=document.querySelectorAll('.form-control')
            console.log(inputs)
            inputs.forEach(element=>{
                element.classList.add('form-control-lg')
            })
            const button=document.querySelectorAll('button')
            button[0].classList.remove('button-small')

        }
    }

    render() {
        //current height during changing width
        window.addEventListener("resize", () => {

                const currentMainWidth = window.innerWidth
                document.querySelector(".App").width=currentMainWidth
                const currentMainHeight = Math.round(currentMainWidth * (1318/1920))
                document.querySelector(".App").style.height = `${currentMainHeight}px`
            if(currentMainWidth<768){
                const inputs=document.querySelectorAll('.form-control-lg')
                const button=document.querySelectorAll('button')
                button[0].classList.add('button-small')
                inputs.forEach(element=>{
                    element.classList.remove('form-control-lg')
                })
            }else{
                const inputs=document.querySelectorAll('.form-control')
                console.log(inputs)
                inputs.forEach(element=>{
                    element.classList.add('form-control-lg')
                })
                const button=document.querySelectorAll('button')
                button[0].classList.remove('button-small')

            }

            })

        return(
            <div className="App">
                <FormHeader/>
                <Form/>
                <Slider/>
            </div>
        )
    }
}

export default App
