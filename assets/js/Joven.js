export class Joven{
    Joven(){
        this.nombre=" ";
        this.apellido=" ";
        this.cedula=" ";
        this.telefono=" ";
        this.correo=" ";
        this.redes=" ";
        this.hobby=" ";
        this.fechaNacimiento=" ";
    }
    Joven(nombre, apellido, cedula, telefono,  correo, redes, hobby, fechaNacimiento){
      this.nombre=nombre;
      this.apellido=apellido;
      this.cedula=cedula;
      this.telefono=telefono;
      this.correo=correo;
      this.redes=redes;
      this.hobby=hobby;
      this.fechaNacimiento=fechaNacimiento;
    }
    
    //Setters
    setNombre(nombreNuevo) {
        this.nombre=nombreNuevo;
    }

    setApellido(apellidonuevo){
        this.apellido=apellidonuevo;
    }

    setCedula(cedulaNueva){
        this.cedula=cedulaNueva;
    }
    
    setTelefono(telefonoNuevo){
        this.telefono=telefonoNuevo;
    }

    setCorreo(correoNuevo){
        this.correo=correoNuevo;
    }

    setRedes(RedesNuevo){
        this.redes=RedesNuevo;
    }


    setHobby(hobbyNuevo){
        this.hobby=hobbyNuevo;
    }

    setFechaN(fechaNuevo){
        this.fechaNacimiento=fechaNuevo;
    }


    //Getters
    get nombre() {
        return this.nombre;
    }
   
    get apellido() {
        return this.apellido;
    }
    
    get cedula() {
        return this.cedula;
    }
    
    get telefono() {
        return this.telefono;
    }

    get correo() {
        return this.correo;
    }

    get redes() {
        return this.redes;
    }

    get hobby() {
        return this.hobby;
    }

    get fechaNacimiento() {
        return this.fechaNacimiento;
    }
    
  
}
export default Joven;