Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

class VeiculoService {

  static #geradorVeiculos() {
    
    const carro = {
      id: "1",
      marca: "Toyota",
      modelo: "Corola",
      numeroDePortas: 4,
      __typename: 'Carro' 
    }

    const moto = {
      id: "2",
      marca: "Honda",
      modelo: "Titan",
      cilindradas: 150,
      __typename: 'Moto' 
    }

    const caminhao = {
      id: "3",
      marca: "Scania",
      modelo: "Modelo Scania",
      capacidadeDeCarga: 1500.00,
      __typename: 'Caminhao' 
    }

    const onibus = {
      id: "4",
      marca: "Mercedes",
      modelo: "Onibus de viagem",
      quantidadeAssentos: 56,
      __typename: 'Onibus' 
    }

    return [ carro, moto, caminhao, onibus ];
  } 
  
  static list() {
    return this.#geradorVeiculos()
  }

  static get() {
    return this.#geradorVeiculos().random()
  }
}

module.exports = VeiculoService