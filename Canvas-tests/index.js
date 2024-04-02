

const element = document.getElementById('element')
const canvas = document.getElementById('canvas')
const input = document.getElementById('input')
const submit = document.getElementById('submit')

element.textContent = 'witaj'



submit.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(input.value)
    
})

