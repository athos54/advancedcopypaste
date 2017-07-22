'use strict'

const CheckCommand = require('./checkCommand')  
const expect = require('chai').expect



describe('CheckCommand module', () => {  
  
  describe('comprobarComando', ()=>{
  	it('comprobarComando deberia ser true', ()=>{
  		// expect(CheckCommand.comprobarComando).to.equal(true); // Recommended
  		expect(CheckCommand.comprobarComando()).to.be.true
  	})
  })


})
