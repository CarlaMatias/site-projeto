//Carrinho para guardar os produtos
let carrinho = [];

function adicionarAoCarrinho(nomeProduto, precoUnitario, idDoCampo, qtdMinima = 1) {
    // Pega o número que o cliente digitou na caixinha
    let quantidade = document.getElementById(idDoCampo).value;
    quantidade = parseInt(quantidade);

    //Verifica se a quantidade é menor que o mínimo
    if (isNaN(quantidade) || quantidade < 1) {
        alert("Por favor, insira uma quantidade válida!");
        return; //Faz a função parar aqui e não adiciona no carrinho
    }
    if (quantidade < qtdMinima) {
        alert("O pedido mínimo para ${nomeProduto} é de ${qtdMinima} unidade!");
        return; //Faz a função parar aqui e não adiciona no carrinho
    }
    // Calcula o preço
    let precoTotal = precoUnitario * quantidade;
     // Adiciona o item ao carrinho com a quantidade
    carrinho.push({nome: nomeProduto, preco:precoTotal, qtd: quantidade});
    atualizarCarrinho();
    //alert (quantidade + "x " + nomeProduto + "adicionado ao carrinho!");
}
function atualizarCarrinho() {
    let lista = document.getElementById('lista-carrinho');
    lista.innerHTML = ''; // Limpa a lista antes de reescrever
    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.innerText = item.qtd + "x " + item.nome + " - R$ " + item.preco.toFixed(2);
        lista.appendChild(li);
    });
}
    // Funçao para enviar os dados pelo whatsApp
    function enviarWhatsApp() {
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
            return;
        }
    // Coloquei aqui o número do WhatsApp da loja
    let telefone = "5511988646966";
    let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    let valorTotal = 0;
    //Monta a lista de produtos na mensagem
    carrinho.forEach(item => {
        mensagem += `- ${item.qtd}x ${item.nome}(R$ ${item.preco.toFixed(2)})\n`;
        valorTotal += item.preco;
    });
    mensagem += `\nTotal: R$ ${valorTotal.toFixed(2)}`;
        // Transforma o texto em link
        let textoCodificado = encodeURIComponent(mensagem);
        let urlWhatsApp = `https://wa.me/${5511988646966}?text=${textoCodificado}`;
        // Abre o link em uma nova aba do navegador
        window.open(urlWhatsApp, "_blank");
}
//Formulário
const formulario = document.getElementById('form1');
const divMensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event){
  event.preventDefault();
const nome = document.getElementById('nome').value;
const sobrenome = document.getElementById('sobrenome').value;
divMensagem.innerText = `Cadastro concluido com sucesso! Seja bem-vindo(a), ${nome} ${sobrenome}.`;

formulario.reset ();

});