interface DataPokemonInterface{
  name: string,
  url: string
}


interface DataResultInterface {
  count: number,
  next: any,
  previous: any,
  results: DataPokemonInterface[]
}


export { DataResultInterface }

