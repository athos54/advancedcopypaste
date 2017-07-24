// var checkCommand = require('./checkCommand');
var keypress = require('keypress');
const { exec } = require('child_process');
var beep = require('beepbeep');

// checkCommand.comprobarComando();
var secuenciaCtrlC=[];
var yaSeHaPegadoUnaVez=false;
var resetearPila=false;

keypress(process.stdin);

console.log('');
console.log('    ###################################################################');
console.log('    #                                                                 #');
console.log('    #                  Bienvenido a AdvancedCopyPaste                 #');
console.log('    #                                                                 #');
console.log('    ###################################################################');
console.log('    #                                                                 #');
console.log('    #                                                                 #');
console.log('    #  * Para parar el programa presiona ................ CTRL + s    #');
console.log('    #  * Para añadir un elemento a la pila presiona ..... CTRL + c    #');
console.log('    #  * Para pegar un elemento presiona ................ CTRL + v    #');
console.log('    #  * Para ver la pila presiona ...................... CTRL + l    #');
console.log('    #                                                                 #');
console.log('    #                                                                 #');
console.log('    #                                                                 #');
console.log('    #                     Autores: LTF & AOC                          #');
console.log('    #                                                                 #');
console.log('    #                                                                 #');
console.log('    ###################################################################');
console.log('');
console.log('');
  	// beep(2)

// setInterval(function(){
// 	console.log('hola');
// },1000)

process.stdin.on('keypress', function (ch, key) {
  // console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 's') {
    process.stdin.pause();
  }
  
  if (key && key.ctrl && key.name == 'c') {
  	if(secuenciaCtrlC.length != 0 && yaSeHaPegadoUnaVez==true){ //SI LA PILA NO ESTA VACIA Y YA SE HA PEGADO UNA VEZ
  		
  		if (resetearPila==true){

  			resetearPila=false;
  			yaSeHaPegadoUnaVez=false;
  			secuenciaCtrlC=[];
  			console.log('Se ha limpiado la pila, puedes volver a empezar a copiar');

  		}else{

  			resetearPila=true;
  			console.log('');
			console.log('ALERTA, TIENES LAS SIGUIENTES COSAS EN EL PORTAPAPELES');
			console.log('');
			console.log(secuenciaCtrlC);
			console.log('');
			console.log('VUELVE A PRESIONAR CTRL + C PARA LIMPIAR LA PILA Y VOLVER A EMPEZAR A COPIAR');
			console.log('');

		}

	}else if(yaSeHaPegadoUnaVez==false){
	  	var comando = 'xclip -o -sel p';

	    exec(comando, function (err, stdout, stderr){
			secuenciaCtrlC.push(stdout);
			beep(1);

		});

	}else{

	}
  }

  if (key && key.ctrl && key.name == 'v') {
  	if(secuenciaCtrlC.length!=0){
  		resetearPila=false;
  		yaSeHaPegadoUnaVez=true;
		console.log(secuenciaCtrlC[0])
		exec('xclip -o', function (err, stdout, stderr){});
		secuenciaCtrlC.splice(0,1);
		if(secuenciaCtrlC.length==0){
			console.log('');
			console.log('NO QUEDAN COSAS EN EL PORTAPAPELES');
			console.log('');

			secuenciaCtrlC=[];
			yaSeHaPegadoUnaVez=false;
			resetearPila=false;	
		}
  	  	// console.log(secuenciaCtrlC.length)
		// console.log(secuenciaCtrlC)
	}else{
		console.log('');
		console.log('NO QUEDAN COSAS EN EL PORTAPAPELES');
		console.log('');

		secuenciaCtrlC=[];
		yaSeHaPegadoUnaVez=false;
		resetearPila=false;
	}
  }

  if (key && key.ctrl && key.name == 'l') {
  	console.log(secuenciaCtrlC);
  }

});


process.stdin.setRawMode(true);
process.stdin.resume();