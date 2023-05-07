

class Jovenes{

  //Constructores
  Jovenes(){
    this.nombre=" ";
    this.apellido=" ";
    this.cedula=" ";
    this.telefono=" ";
    this.correo=" ";
    this.redes=" ";
    this.hobby=" ";
    this.fechaNacimiento=" ";
  }

  Jovenes(nombre, apellido, cedula, telefono,  correo, redes, hobby, fechaNacimiento){
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

//////////////////////////////Conexiones a la base de datos para consultar la tabla de Jovenes/////////////////////////////
    
  ObtenerDatosJovenes() { 
        const mysql = require('mysql2');
        const connection = mysql.createConnection({
          host: 'pruebas-proyecto.crsgf5nxmo23.us-east-2.rds.amazonaws.com',
          user: 'admin',
          password: 'admin.**',
          database: 'Sprint1'
        });
        connection.connect((err) => {
          if (err) {
            console.error('Error al conectarse a la base de datos: ' + err.stack)
          }     
          console.log('Conexión a la base de datos exitosa con el id ' + connection.threadId);
          let A=this.consultarJovenes(connection)
          console.log("valor de A "+A);
        });

        //return connection.A.;
    }

     consultarJovenes(connection) {
      const Prueba = connection.query('SELECT * FROM Sprint1.Jovenes;', (error, results, fields) => {
        if (error) {
          console.error('Error de consulta:', error);
        } else {
          console.log('Resultados:', results);  
          let i=30;
          console.log("valor de I"+ i)
        }
        connection.end((error) => {
          if (error) {
            console.error('Error al cerrar la conexión:', error);
          } else {
            console.log('Conexión cerrada exitosamente.');
          }       
        });
        console.log("valor de i "+connection.query.i)
        return Prueba.i;
      });
      
      
    }

    AgregarNuevoJoven() {
      const mysql = require('mysql2');
        const connection = mysql.createConnection({
          host: 'pruebas-proyecto.crsgf5nxmo23.us-east-2.rds.amazonaws.com',
          user: 'admin',
          password: 'admin.**',
          database: 'Sprint1'
        });  /////////////////////////// Datos para conectarse a la base de datos

        connection.connect((err) => {
          if (err) {
            console.error('Error al conectarse a la base de datos: ' + err.stack)
          }     
          console.log('Conexión a la base de datos exitosa con el id ' + connection.threadId);
               
          connection.query('INSERT INTO `Sprint1`.`Jovenes` (`Nombre`, `Apellido`,Cedula)'+ 
                      'VALUES ("CArlos","Dominguez",3005320);',(error, results, fields) => {
              if (error) {
                  console.error('Error de consulta:', error);
              } else {
                  console.log('Resultados:', results);  
                } /////////  Establecimiento de conexion a la base de datos y ejecucion del query para insertar datos
                connection.end((error) => {
                  if (error) {
                    console.error('Error al cerrar la conexión:', error);
                  } else {
                    console.log('Conexión cerrada exitosamente.');
                  }       
                }); /////////////////////////  Cierre de la conexion a la base de datos
            });
          
            });   
        }

        pruebaConexion(){
        
        const mysql = require('mysql2')

        const connection = mysql.createConnection({
          server: "acasias-server.database.windows.net",
              database: "Proyecto Las Acasias",
              user: "Juan",
              password: "Administrador.**",
              port: 1433,
              options: {
                  encrypt: true,
                  trustServerCertificate: false
              }         
        });
          
          // Establecer la conexión
          connection.connect(err => {
              if (err) {
                  console.error("Error al establecer la conexión:", err);
              } else {
                  console.log("Conexión establecida correctamente");

                  // Realizar consultas a la base de datos aquí
              }
          });

        }

    prueba(){
          // Importar la biblioteca de cliente de SQL para Node.js
        const sql = require("mssql");

      // Configurar la cadena de conexión
      const config = {
          server: "acasias-server.database.windows.net",
          database: "Proyecto Las Acasias",
          user: "jchernandez.21@est.ucab.edu.ve",
          password: "admin.**",
          options: {
              encrypt: true,
              trustServerCertificate: false
          }
      };

        // Crear un objeto de conexión
        const connection = new sql.ConnectionPool(config);

        // Establecer la conexión
        connection.connect(err => {
            if (err) {
                console.error("Error al establecer la conexión:", err);
            } else {
                console.log("Conexión establecida correctamente");

                // Realizar consultas a la base de datos aquí
            }
          });

      }

} 

let J= new Jovenes();
J.pruebaConexion();




