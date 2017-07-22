'use strict'

const CheckCommand = require('./checkCommand')  
const expect = require('chai').expect

describe('CheckCommand module', function() {  

	describe('comprobarComando', function(){
		
		it('deberia ser true',function(done){

			CheckCommand.comprobarComando(function(success){

				if(success){
					expect(success).to.equal('true')
					// console.log('biennnnnn');
					done();
				}

			});

		});

	});

});

