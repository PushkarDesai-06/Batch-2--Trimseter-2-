const form = document.querySelector('.feedback-form')


form.addEventListener('submit' ,function(e){
    e.preventDefault()
     console.log(form.username.value)
     console.log(form.feedback.value)
} )


const regex = //