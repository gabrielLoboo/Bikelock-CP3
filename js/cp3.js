
const form = document.querySelector('#form');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha-confirmacao')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs(){
    //Validação do campo nome
    const inputNome = nome.value.trim()
    
    if (inputNome == ''){
        setErrorFor(nome, 'Preencha esse campo')
    } else if (inputNome.length < 5){
        setErrorFor(nome, 'Esse campo deve ter o mínino de 5 caracteres')
    } else {
        setSucessFor(nome)
    }

    //Validação do campo sobrenome
    const sobrenomeInput = sobrenome.value.trim();

    if (sobrenomeInput == ''){
        setErrorFor(sobrenome, 'Preencha esse campo')
    } else if (sobrenomeInput.length < 5){
        setErrorFor(sobrenome, 'Esse campo deve ter o mínino de 5 caracteres')
    } else {
        setSucessFor(sobrenome)
    }

    //Validação do campo email
    const emailInput = email.value.trim();

    if (emailInput == ''){
        setErrorFor(email, 'Preencha esse campo')
    } else if (emailInput.length < 5){
        setErrorFor(email, 'Esse campo deve ter o mínino de 5 caracteres')
    } else if (!emailInput.includes('@')){
        setErrorFor(email, 'Insira um e-mail válido')
    }
    else {
        setSucessFor(email)
    }

    //Validação do campo senha
    const senhaInput = senha.value.trim();

    if (senhaInput == ''){
        setErrorFor(senha, 'Preencha esse campo')
    } else if (senhaInput.length < 6){
        setErrorFor(senha, 'Esse campo deve ter o mínino de 6 caracteres')
    } else if (senhaInput.length > 8){
        setErrorFor(senha, 'Esse campo deve ter no máximo 8 caracteres')
    } 
    else {
        setSucessFor(senha)
    }

    //Validação do campo confirmação senha
    const senha2Input = senha2.value.trim();

    if(senha2Input == ''){
        setErrorFor(senha2, 'Preencha esse campo')
    }else if (senhaInput != senha2Input){
        setErrorFor(senha2, 'A senha não corresponde a senha fornecida')
    } else {
        setSucessFor(senha2)
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    var small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

