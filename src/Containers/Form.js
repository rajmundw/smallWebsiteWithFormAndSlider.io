import React, { PureComponent } from 'react';
import AgeOptions from "../Components/AgeOptions"
import ok from '../img/ok.jpg'
import validFunction from '../Functions/validFunction'
class Form extends PureComponent{
    fillInput=()=> {

        //all inputs in form
        const inputs=document.querySelectorAll('input')
        //select option in form
        const age=document.querySelector('select')

        //function to valid form
        validFunction(Number(age.value)>0,age,'age')

        const name=inputs[0]
        validFunction(name.value.length>=3,name)

        const surname=inputs[1]

        validFunction(surname.value.length>=3,surname)


        const adress=inputs[2]
        validFunction(adress.value.length>=3,adress)

        const email=inputs[3]
        validFunction(email.value.length>=4 &&
            email.value.indexOf('@')>=1 &&
            email.value.indexOf('.')>=3,email)
    }

    //event on click send
    sendForm() {
        //input class list
        let inputsClassList = []
        //inputs
        const inputs = document.querySelectorAll('input')
        //filling inputs class list
        inputs.forEach(element => {
                let classList = element.classList
                inputsClassList.push(classList)
                //check point to get to know which class has to have input
                let checkPoint = ''
                // if class contains class is-valid add
                checkPoint = classList.contains('is-valid')
                if (!checkPoint) {
                    element.classList.add('is-invalid')
                }
                return inputsClassList
            }
        )

        const age = document.querySelector('select')
        //changing class
        if (!age.classList.contains('is-valid')) {
            age.classList.add('is-invalid')
        }
        //check point to get to know that everyone input in form is in correct filled
        let checkListCounter = 0
        const checkList = [...inputsClassList, age.classList]
        //if element contains this class add to variable 1 point
        checkList.forEach(classArray => {
            if (classArray.contains('is-valid')) {
                checkListCounter += 1
            }
        })

        //if everyone input has valid calls check point has to have 5 point and ...
        if (checkListCounter === 5) {

            //makeing object to fetch on database
            let newUser = {
                name: inputs[0].value,
                surname: inputs[1].value,
                age: age.value,
                adress: inputs[2].value,
                email: inputs[3].value
            }

            //fetching on server
            fetch('http://localhost:3000/users',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)

                }
                    ).then(resp => {
                        return resp.json();
                    }).catch(err => {
                        console.log(err);
                    });

            //reset input value
            inputs.forEach(element => {
                element.value = ''
            })

            age.value = ''

            //timeout to reset class
            setTimeout(() => {
                inputs.forEach(element=>{
                    element.classList.remove('is-valid')
                    element.nextSibling.style.display="none"
                })
                age.classList.remove('is-valid')

            }, 2000)
        }

    }


    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="row">
                        <div className="col-md-4 ">
                            {/*event on change to checking that input is valid or not */}
                            <input onChange={this.fillInput} type="text" className="form-control form-control-lg" placeholder="Podaj imię" ></input>
                            <img src={ok} />
                        </div>

                        <div className="col-md-4 col2">
                            <input onChange={this.fillInput} placeholder="Podaj nazwisko" type="text" className="form-control form-control-lg"/>
                            <img src={ok} />
                        </div>
                        <div className="col-md-4 col3">
                            <select onChange={this.fillInput}  className="form-control form-control-lg" id="sel1">
                                <AgeOptions/>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col1">
                            <input onChange={this.fillInput} type="text" className="form-control form-control-lg" placeholder="Gdzie mieszkasz?"/>
                            <img src={ok} />
                        </div>
                        <div className="col-md-6 col3">
                            <input onChange={this.fillInput} type="email" placeholder="Podaj adres email" className="form-control form-control-lg"/>
                            <img src={ok} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col1">
                            <button onClick={this.sendForm} type="button"  className=" btn btn-success  btn-block">WYŚLIJ FORMULARZ</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form