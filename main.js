
// função que valida o produto apenas
function validarProduto (idnomeproduto,idcodigoproduto,idqtdproduto){
let nome = document.getElementById(idnomeproduto).value;
let codigo = document.getElementById(idcodigoproduto).value;
let qtidade = document.getElementById(idqtdproduto).value;
if (nome == ""){
  alert('nome esta vazio');
} else if (codigo == "")
  alert('codigo vazio');
  else
  cadastrarProduto(nome,codigo,parseInt(qtidade))
} 

// função que recolhe os dados e cadastra

function cadastrarProduto(produto,codig,qtidade){

  let novoproduto = {nome:produto, codigo:codig,qtd:qtidade}
  if (typeof(Storage) !== "undefined"){
    let produtos = localStorage.getItem("produtos")
    if (produtos == null) produtos = [];
    else produtos = JSON.parse(produtos);
    produtos.push(novoproduto);
    localStorage.setItem("produtos",JSON.stringify(produtos))
    alert(`Foram adicionados ${qtidade} do produto ${produto}`)
    atualizartotalestoque("totalestoque")
  }
}
// imprime o span somando
function atualizartotalestoque (idcampo){
  localStorage.setItem("totalestoque",++document.getElementById(idcampo).innerHTML)
}
// body onload já carregando o valor do storage
function carregartotalestoque(idcampo){
  if (typeof(Storage) !== "undefined"){
    let totalestoque = localStorage.getItem("totalestoque")
    if (totalestoque == null) totalestoque = 0
    document.getElementById(idcampo).innerHTML = totalestoque
  }
else alert("localstorage não é compativel")
}
// abre o site com a lista
function listarestoque(){
if (typeof(Storage) !== "undefined"){
let produtos = localStorage.getItem("produtos")
document.write("<h1>Estoque</h1>")
//
let btn = document.createElement("button");
btn.innerHTML = "Voltar";
btn.onclick = function () {
  location. reload();
};
document.body.appendChild(btn);
//
if (produtos == null){
  document.write("<p>Não há produtos registrados</p>")
} else {
  produtos = JSON.parse(produtos)
document.write(`<p>Total de produtos: ${produtos.length}</p>`)
//
//
  produtos.forEach(produto => {
 document.write("<ul>")
document.write(`<li>Nome do produto: ${produto.nome}</li>`)
document.write(`<li>Código do produto: ${produto.codigo}</li>`)
document.write(`<li>Qtd no estoque: ${produto.qtd}</li>`)
document.write("</ul>")
document.write("----------------------------------------------------------")
})
}

}
}

// reseta o estoque

function limpar() {
    let texto = window.confirm("tem certeza")
    if(texto == true){
    alert('excluido com sucesso')
    localStorage.clear();
    location.reload()
    }
  /*localStorage.clear();
  location.reload()*/
}

// botao de voltar ao inicio

function voltar(){
  location.reload()
}
