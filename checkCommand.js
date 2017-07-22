'use strict'

const { exec } = require('child_process');


function  comprobarComando (succeeded){
	try{
		var cmd = 'type xclip';
		// var cmd = 'type xcdlip';
		exec(cmd, function (err, stdout, stderr){
			var posicionDeLaCadena = stdout.indexOf("/");

			var laCadenaExiste=(posicionDeLaCadena != -1);

			if(laCadenaExiste) succeeded('true');
			else succeeded('false');
		})

	}catch(err){
		succeeded();
	}
}



module.exports = {  
	comprobarComando
}
