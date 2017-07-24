// var checkCommand = require('./checkCommand');
// var keypress = require('keypress');
const { exec } = require('child_process');
var beep = require('beepbeep');
const ioHook = require('/home/athos/Documentos/proyectos/advancedCopyPaste/node_modules/iohook-master/index.js');


// checkCommand.comprobarComando();
var secuenciaCtrlC=[];
var yaSeHaPegadoUnaVez=false;
var resetearPila=false;

// keypress(process.stdin);

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

ioHook.on("keydown",function(msg){
  // console.log(msg);
  
  // if (msg.rawcode=='83') {
  //   ioHook.stop();
  //   process.stdin.pause();
  // }

  if (msg.keycode=='46') { //ctrl c
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

		
		// var comando = "echo "+secuenciaCtrlC[0]+" | xclip -selection c"
	    exec(comando, function (err, stdout, stderr){

		
			secuenciaCtrlC.push(stdout);
			console.log(secuenciaCtrlC)
			beep(1);
			var comandoDePegado = "echo "+secuenciaCtrlC[0]+" | xclip -selection c"
			exec(comandoDePegado, function (err, stdout, stderr){});
		});

	}else{

	}
  }



  if (msg.keycode=='47') {
  	console.log(secuenciaCtrlC)
  	if(secuenciaCtrlC.length!=0){
  		if (yaSeHaPegadoUnaVez==false){
		secuenciaCtrlC.splice(0,1);
  			
  		}
  		resetearPila=false;
  		yaSeHaPegadoUnaVez=true;
  		// console.log('uiui')
		// console.log(secuenciaCtrlC[0])
		var comandoDePegado = "echo "+secuenciaCtrlC[0]+" | xclip -selection c"
		exec(comandoDePegado, function (err, stdout, stderr){});
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

  if (msg.keycode=='38') {
  	console.log(secuenciaCtrlC);
  }

});





  
  

// process.stdin.setRawMode(true);
// process.stdin.resume();



ioHook.start();