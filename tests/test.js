var expect = chai.expect;

describe("Probando la funcion Palindromo", function(){

 it("Comparación de palabra ama", function(){
  
  expect(palindromo("ama")).to.be.equal(true);
  
 })
 it("Comparación de palabra narran", function(){
  
  expect(palindromo("narran")).to.be.equal(true);
  
 })
 it("Comparación de palabra papa", function(){
  
  expect(palindromo("papa")).to.be.equal(true);
  
 })
 it("Comparación de palabra ama ama", function(){
  
  expect(palindromo("ama ama")).to.be.equal(true);
  
 })
 it("Comparación de palabra papa ama", function(){
  
  expect(palindromo("papa ama")).to.be.equal(false);
  
 })
 it("Comparación de string vacio", function(){
  
  expect(palindromo("")).to.be.equal(false);
  
 })

 it("Comparación de modem", function(){
  
  expect(palindromo("modem")).to.be.equal(false);
  
 })
})