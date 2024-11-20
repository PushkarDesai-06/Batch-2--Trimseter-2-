const form = document.querySelector('.feedback-form')
const p = document.querySelector('p')

// username - {3, 12} [a-z0-9]
// feedback - .{20 , 50}

let usernameRegex = /^[a-z0-9]{3,12}$/
let feedbackRegex = /^.{20,50}$/

form.addEventListener('submit' ,function(e){
    e.preventDefault()
    let userNameValidation = usernameRegex.test(form.username.value)
    let feedbackValidation = feedbackRegex.test(form.feedback.value)

    if(userNameValidation && feedbackValidation){
      p.setAttribute('class' , 'success')
      p.innerText = "Validation Succesfull"
    }
    else{
         p.innerText = "Validation Failed! Please Check Again"
    }
} )


