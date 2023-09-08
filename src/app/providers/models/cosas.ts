import { SelectInterfaceNumber } from "@interfaces/select.interface";

export class Cosas {

  public selectCosas: SelectInterfaceNumber[];

  constructor(){
    this.selectCosas = [
      {
        value: 1,
        label: 'teléfono 1'
      },
      {
        value: 2,
        label: 'teléfono 2'
      },
      {
        value: 3,
        label: 'teléfono 3'
      },
      {
        value: 4,
        label: 'teléfono 4'
      }
    ];
  }

}
