const $form = document.querySelector('form');
const $inputs = document.querySelectorAll("input");


$form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    if($form.checkValidity()){
        $form.reset();
        $inputs.forEach(input => {
            input.parentElement.querySelector(`span`).textContent = ""
            input.style.border = "solid 1px #E6B858"
        })

    }
    else {
        $inputs.forEach(input => {
            if(!input.checkValidity()){
                input.parentElement.querySelector(`span`).textContent = "*Please fill in this field"
            }
        })
    }   

})

document.addEventListener("focusin",(e)=>{
    if(e.target.matches(".inputs")){
       $form.classList.add("hasFocus");
    }
})

document.addEventListener("input",(e)=>{
    e.target.parentElement.querySelector(`span`).textContent = ""
 

    // VALIDACION LENGTH NAME LASTNAME PHONE
if(e.target.matches("#firstName") || e.target.matches("#LastName")||e.target.matches("#phone")){
    if(e.target.value.length === 15) {
        e.target.parentElement.querySelector(`span`).textContent = "*maximum 15 characters"
        setTimeout(()=>{e.target.parentElement.querySelector(`span`).textContent = ""},2000)
}
}
if(e.target.matches("#email")){
    const patternEmail = e.target.pattern;
    if(e.target.value.length === 30) {
            const spanError = e.target.parentElement.querySelector(`span`)
            spanError.textContent = "*maximum 30 characters"
        }

    else if (!e.target.value.match(patternEmail)){
        const spanError = e.target.parentElement.querySelector(`span`)
        e.target.style.border = "solid 1px red"
        spanError.textContent = "*Invalid email"
    }
    else {
        e.target.style.border = "solid 1px green"
    }
} 
if(e.target.matches("#password")){
    const confirmPass = document.querySelector("#confirmPassword");
    
        if(e.target.value.length === 15) {
            e.target.parentElement.querySelector(`span`).textContent = "*maximum 15 characters"
            
        }
        else if(e.target.value.length < 8){
        e.target.parentElement.querySelector(`span`).textContent = "*minimum 8 characters"    
        }
        else if(e.target.value !== confirmPass.value){
            confirmPass.parentElement.querySelector(`span`).textContent = "*Passwords do not match"
            confirmPass.style.border = "solid 1px red"
        }
}

if(e.target.matches("#confirmPassword")){
    
    const firstPassword = document.querySelector("#password")

    if(e.target.value !== firstPassword.value){
        e.target.parentElement.querySelector(`span`).textContent = "*Passwords do not match"
        e.target.style.border = "solid 1px red"
    }
    else {
        e.target.style.border = "solid 1px green"
        firstPassword.parentElement.querySelector(`span`).textContent = ""
    }
}
})


console.log("puto")