
//function gets conditions to valid form element and third element is only for age because it doesn't have img
const validFunction = (condition,formElement,onlyForAge) =>{
    if(onlyForAge==='age'){
        if(condition){
            if(formElement.classList.contains('is-invalid')){
                formElement.classList.remove('is-invalid')
            }
            formElement.classList.add('is-valid')
        }else{
            if(formElement.classList.contains('is-valid')){
                formElement.classList.remove('is-valid')
            }
        }
    }else{
        //adding and removing class
        if(condition){
            if(formElement.classList.contains('is-invalid')){
                formElement.classList.remove('is-invalid')
            }
            formElement.classList.add('is-valid')
            formElement.nextSibling.style.display="block"
        }else{
            if(formElement.classList.contains('is-valid')){
                formElement.classList.remove('is-valid')
                formElement.nextSibling.style.display="none"
            }
        }   
    }
    
    
}

export default validFunction