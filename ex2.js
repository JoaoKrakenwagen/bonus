var Animal = function(expectativaVida, numPatas, isBipede) {

  if (this.constructor === Animal) {
    throw new Error("Não podemos instanciar classes abstratas!");
  }

  var expectativaVida = expectativaVida;
  var numPatas = numPatas;
  var isBipede = isBipede;

  this.getExpectativaVida = () => expectativaVida;
  this.getNumPatas = () => numPatas;
  this.getIsBipede = () => isBipede;

  this.apresentar = () => 'Eu sou um animal.'
}

var Cavalo = function(expectativaVida, numPatas, isBipede, cor, raca) {

  Animal.call(this, expectativaVida, numPatas, isBipede);

  var cor = cor;
  var raca = raca;

  this.getCor = () => cor;
  this.getRaca = () => raca;

  this.apresentar = () => 'Eu sou um cavalo, IIIIH';
}

var Humano = function(expectativaVida, numPatas, isBipede, nome, idade, profissao) {

  Animal.call(this, expectativaVida, numPatas, isBipede);

  var nome = nome;
  var idade = idade;
  var profissao = profissao;

  this.getNome = () => nome;
  this.getIdade = () => idade;
  this.getProfissao = () => profissao;

  this.apresentar = () => 'Are we human, or are we dancer?'
}
