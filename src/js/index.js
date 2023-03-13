const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrosel.forEach((botao, indece) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagensAtiva = document.querySelector('.ativa');
        imagensAtiva.classList.remove('ativa');

        imagens[indece].classList.add('ativa');      

    })
})