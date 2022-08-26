const igual = document.querySelector('#calcular')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#subtracao')
const divi = document.querySelector('#divisao')
const multi = document.querySelector('#multi')
let resposta = document.querySelector('#res')
let valor1 = 0
let valor2 = 0
let operador

//função botões
function Botoes(btn) 
{
    if (btn == 'AC')
    {
        resposta.innerText = ''
    } 
    else if (btn == 'C')
    {
         
    }
    else
    {
        resposta.innerText += btn
    }
}

igual.addEventListener('click', () => 
{
    valor2 = document.querySelector('#res').innerText
    switch (operador)
    {
        case 'soma':
            resposta.innerHTML = `${(+valor1) + (+valor2)}`
            break
        case 'sub':
            resposta.innerHTML = `${(+valor1) - (+valor2)}`
            break
        case 'divi':
            resposta.innerHTML = `${(+valor1) / (+valor2)}`
            break
        case 'multi':
            resposta.innerHTML = `${(+valor1) * (+valor2)}`
            break
    }
}) 
    
soma.addEventListener('click', () => 
{
    valor1 = +resposta.innerText
    operador = 'soma'
    resposta.innerText = '' 
})

sub.addEventListener('click', () => 
{
    valor1 = +resposta.innerText
    operador = 'sub'
    resposta.innerText = ''   
})

divi.addEventListener('click', () => 
{
    valor1 = +resposta.innerText
    operador = 'divi'
    resposta.innerText = ''
})

multi.addEventListener('click', () => 
{
    valor1 = +resposta.innerText
    operador = 'multi'
    resposta.innerText = ''
})

