const express = require('express');
require('dotenv').config();
const cors = require('cors');

class Server{
	
	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		this.usuariosPath = '/api/usuarios';
		
		//Middlewares
		this.middlewares();
		//Rutas
		this.routes();
		//Cors


	}

	middlewares(){
		//Directorio publico
		this.app.use(express.static('public'));
		//Cors
		this.app.use(cors());
		//Parser y Lectura del body
		this.app.use(express.json());
	}

	routes(){
		this.app.use(this.usuariosPath, require('../routes/usuarios'));
	}

    listen(){ 
	    this.app.listen(this.port, () => {
        console.log(`El ejemplo esta corriendo en el puerto ${this.port}`)
        });
    }
}

module.exports = Server;