interface UsuarioNgInterface {
  nombre: string,
  apellido: string
}


interface UsuarioReactivoInterface {
  nombre: string,
  apellido: string,
  direccion: string,
  edad: number
}

interface UsuarioReactivoFormInterface {
  nombre: string,
  apellido: string,
  direccion: string,
  edad: number
}


export { UsuarioNgInterface, UsuarioReactivoInterface, UsuarioReactivoFormInterface }