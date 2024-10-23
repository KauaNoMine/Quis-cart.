function criaCartao(categoria, pergunta, resposta, imagem) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta" style="display: none;">
                <p>${resposta}</p>
            </div>
            <div class="cartao__conteudo__imagem" style="display: none;">
                <img src="${imagem}" alt="Imagem de ${categoria}">
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);

        const respostaDiv = cartao.querySelector('.cartao__conteudo__resposta');
        const imagemDiv = cartao.querySelector('.cartao__conteudo__imagem');

        if (respostaEstaVisivel) {
            respostaDiv.style.display = 'block';
            imagemDiv.style.display = 'block';
        } else {
            respostaDiv.style.display = 'none';
            imagemDiv.style.display = 'none';
        }
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
