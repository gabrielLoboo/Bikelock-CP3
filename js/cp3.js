
const form = document.querySelector('#form')
const nome = document.getElementById('nome')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});


function checkInputs(){
    const inputNome = nome.value.trim()
    if (inputNome == ''){
        setErrorFor(nome, 'Preencha esse campo')
    } else if (inputNome.length < 5){
        setErrorFor(nome, 'Esse campo deve ter o mínino de 5 caracteres')
    } else {
        setSucessFor(nome)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const label = formControl.querySelector('label')
}

function setSucessFor(input){
    const formControl = input.parentElement;

    formControl.classname = 'form-control success'
}