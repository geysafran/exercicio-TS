//iii - importar a interface
import IAnimal from './IAnimal';
import {IAcao} from './IAcao';



//01 - nome da classe
//iv - implementando a Interface
export class Passaro implements IAnimal, IAcao {

  //02 - atributos
  private voa: boolean;
  private genero: string;
  private especie: string;

  //03 - constructor
  constructor(voa: boolean, genero: string){
    this.voa = voa
    this.genero = genero
  }

  //04 - métodos
   public qualGenero(): string {
    return this.genero;
  }

  public digaEspecie(): string {
    return this.especie;
  }

  //v - Implementando o método da Interface
  public velocidadeAtual(): string {
      return 'Velocidade de 10km/hora'
  }

  public passaroAnda(): boolean {
    return true
}
}

