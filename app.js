function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value 

if (!campoPesquisa == "") {
section.innerHTML = "<p>Nada foi encontrado</p>"

return
}
campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";


    //PARA CADA DADO DENTRO DA LISTA DE DADOS
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Ficha Técnica</a>
            </div>`;

        }

     if (!resutltados) {
resultados = "<p>Nada foi encontrado</p>"
     }


    }
    section.innerHTML = resultados;
}



