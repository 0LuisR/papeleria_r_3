const {response} = require('express');

const usuariosGet = (req, res = response) => {
	const {q, nombre = 'No name', apikey, page, limit} = req.query;

	res.json({
	msg: 'GET API - Control',
	q,
	nombre,
	apikey,
	page,
	limit
	});
}

const usuariosPost =  (req, res = response) => {
	const body = req.body;

	res.json({
	msg: 'POST API - Control',
	body
	});
}

const usuariosPut =  (req, res = response) => {
	const id = req.params.id;

	res.json({
	msg: 'PUT API - Control',
	id
	});
}

const usuariosDelete =  (req, res = response) => {
	res.json({
	msg: 'DELETE API - Control'
	});
}



module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosDelete
}