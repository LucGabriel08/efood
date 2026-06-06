import Pratos from "./Pratos";

class Restaurante {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  avaliacao: string;
  destacado: number;
  cardapio: Pratos[];

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    capa: string,
    avaliacao: string,
    destacado: number,
    cardapio: Pratos[],
  ) {
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.capa = capa;
    this.avaliacao = avaliacao;
    this.destacado = destacado;
    this.cardapio = cardapio;
  }
}

export default Restaurante;
