const express = require('express');
const connection = require('./db');
const path = require('path');
const app = express();

//encargado de parsear a los json
app.use(express.json ());

app.use(express.urlencoded({extended:true}));

//archivos html
app.use(express.static(path.join(__dirname, 'templates')));

//ruta de prueba

app.get('/api/prueba', ( req, res)=>{

    res.status(200).json({
        message: 'la api responde correctamente',
        port: PORT,
        status: 'succes'
    });

});

//crear registros
app.post('/api/guardar', (req,res)=>{

    const {cedula, nombre, apellido, edad, servicio, telefono} = req.body;
    const query = 'INSERT INTO personas (cedula, nombre, apellido, edad, servicio, telefono) VALUES (?,?,?,?,?,?)';
    connection.query(query, [cedula, nombre, apellido,edad,servicio, telefono], (error, result)=>{

        if(error){
            res.status(500).json({error});
        }else{
            res.status(201).json({cedula: result.insertId, cedula, nombre, apellido, edad,servicio,telefono});
        }
    });
});

//obtener registros de la base de datos
app.get('/api/obtener', (req,res) => {

    const query = 'select * from persona'; 
    connection.query(query, (error, result)=>{

        if(error){
            res.status(500).json({

                success: false,
                message: "Error al recuperar los datos",
                details: error.message
               
            });
        }else{
            res.status(200).json({

                success: true,
                message: "Datos de la tabla",
                data: result 

            });
        }

    });

});

//api para eliminar registros
app.delete('/api/eliminar/:cedula', (req,res)=>{

    const {cedula}= req.params;
    const query = 'DELETE FROM persona WHERE cedula = ?';
    connection.query(query, [cedula], (error, result)=>{

        if(error){
            res.status(500).json({

                success: false,
                message: "Error al Eliminar el registro",
                details: error.message
               
            });
        }
        else if(result.affectedRows === 0){
            res.status(404).json({

                success: false,
                message: `No existe el registro ${cedula}`,
              
            });
        
        }else{
            res.status(200).json({

                success: true,
                message: "Dato eliminado de la tabla",
                data: result 

            });
        }


    });


});


//api actualizar
app.put('/api/actualizar/:cedula', (req, res) =>{
    
    const {cedula}= req.params;

    const {nombre, edad, profesion} = req.body;

    const query = 'UPDATE persona SET nombre = ?, edad = ?, profesion = ? WHERE cedula = ?';

    connection.query(query, [nombre, edad, profesion, cedula], (error, result)=>{

        if(error){
            res.status(500).json({

                success: false,
                message: "Error al actualizar",
                details: error.message
               
            });
        }else{
            res.status(200).json({

                success: true,
                message: "Persona Actualizada",
              
            });
        }

    });


});

//puerto de conexion del servidor

const PORT = 3000;
app.listen(PORT, ()=>{

    console.log('servidor corriendo');
});