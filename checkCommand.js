'use strict'

const { exec } = require('child_process');

function  comprobarComando (done){
	try{
		// var cmd = 'type xclip';
		var cmd = 'type xcdlip';
		exec(cmd, function (err, stdout, stderr){
			var posicionDeLaCadena = stdout.indexOf("/");

			var laCadenaExiste=(posicionDeLaCadena != -1);

			if(laCadenaExiste) done('true');
			else done('false');
		})

	}catch(err){
		done();
	}
}



module.exports = {  
	comprobarComando
}
