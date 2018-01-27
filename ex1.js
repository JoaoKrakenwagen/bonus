var Livro = function(nome, editora, autor) {

  var nome = nome;
  var editora = editora;
  var modelo = modelo;
  var capitulos = [];

  this.getNome = () => nome;
  this.getEditora = () => editora;
  this.getAutor = () => autor;

  this.getNumCapitulos = () => capitulos.length ;
  this.getNumPaginasLivro = () => capitulos.map(M);
  this.getCapitulo = (numCapitulo) => capitulos[numCapitulo].getTitulo();
  this.addCapitulo = (capitulo) => capitulos.push(capitulo);

  var sum = function(capitulos) {
    var tam = 0;
    for(i = 0; i < capitulos.length; i++) {
      tam += capitulos[i].getNumPaginas();
    }
    return tam;
  }
}

var Capitulo = function(titulo, numPaginas) {

  var titulo = titulo;
  var numPaginas = numPaginas;

  this.getTitulo = () => titulo;
  this.getNumPaginas = () => numPaginas;
}
