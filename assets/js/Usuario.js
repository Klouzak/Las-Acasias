class Usuario{
    Usuario(){
        this.nombre=" ";
        this.apellido=" ";
        this.cedula=" ";
        this.telefono=" ";
        this.correo=" ";
        this.contraseña=" ";
        this.redes=" ";
        this.hobby=" ";
        this.fechaNacimiento=" ";
    }

    Usuario(nombre, apellido, cedula, telefono, correo, redes, hobby, fechaNacimiento,contraseña){
      this.nombre=nombre;
      this.apellido=apellido;
      this.cedula=cedula;
      this.telefono=telefono;
      this.correo=correo;
      this.redes=redes;
      this.hobby=hobby;
      this.fechaNacimiento=fechaNacimiento;
      this.contraseña=contraseña;
    }

    setContraseña(contraseñanueva) {
    this.contraseña=contraseñanueva;
    }

    setCorreo(correonuevo){
    this.correo=correonuevo;
    }

/////////////////////////////  Conexiones a la base de datos para consultar la tabla Usuarios   //////////////////////////////    

  ValidarDatosDeUnUsuario(usuario) {
    const mysql = require('mysql');
    usuario.apellido = "hola";
    const connection = mysql.createConnection({
      host: 'pruebas-proyecto.crsgf5nxmo23.us-east-2.rds.amazonaws.com',
      user: 'admin',
      password: 'admin.**',
      database: 'Sprint1'
    });

    return new Promise((resolve, reject) => {
      let valid = false;
      connection.connect((err) => {
        if (err) {
          console.error('Error al conectarse a la base de datos: ' + err.stack);
          reject(false);
        }
        console.log('Conexión a la base de datos exitosa con el id ' + connection.threadId);

        connection.query('SELECT * FROM Sprint1.Usuarios where Correo="' + usuario.correo + '"' +
          '&& contraseña="' + usuario.contraseña + '";', (error, results, fields) => {
            if (error) {
              console.error('Error de consulta:', error);
              reject(false);
            } else {
              console.log('Resultados:', results);
              valid = results.length > 0;
              console.log("valor de la validación: " + valid);
              resolve(valid);
            }
            connection.end((error) => {
              if (error) {
                console.error('Error al cerrar la conexión:', error);
              } else {
                console.log('Conexión cerrada exitosamente.');
              }
            });
          });
      });
    });
  }

  async LLamadaAValidarDatosDeUnUsuario(Usuario,globalValid){
   
   await new Promise (async resolve => { 
      try{
        const valid= await Usuario.ValidarDatosDeUnUsuario({correo: Usuario.correo , contraseña: Usuario.contraseña})
          .then(valid => {
            globalValid=valid;
            resolve(globalValid)
          })
          .catch(error => {
            console.error("Error:", error);
            globalValid=valid;
            resolve(globalValid)
          });
      }catch(error){
        console.error("Error:", error)
      }
   });  
    return globalValid
  } 
 
  
}

let U= new Usuario();
U.setCorreo("Jhonatan@gmail.com");
U.setContraseña("Admin123*")
let valid=0;
let X;

/*X=U.LLamadaAValidarDatosDeUnUsuario(U,valid);
console.log(valid);*/

validarDatosUsuario(U, valid);

  async function validarDatosUsuario(U, valid) {
  X= await U.LLamadaAValidarDatosDeUnUsuario(U, valid);

  // aquí puedes continuar con la siguiente línea de código
  console.log("valor de X "+ X)
}


 




