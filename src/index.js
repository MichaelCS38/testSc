const express = require("express");
var app = express();
const abi = require("./abi.json");
var Contract = require('web3-eth-contract');

// set provider for all later instances to use
Contract.setProvider('https://bsc-dataseed1.binance.org/');

var contract = new Contract(abi, '0x55d398326f99059fF775485246999027B3197955');
contract.methods.balanceOf('0x5919858d83B9f4e3f2D3E054947aEe38774824e2').call().then((res)=>{
console.log('res',Number(res))
})
 
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log("Server opening on http://localhost:3000");
});
