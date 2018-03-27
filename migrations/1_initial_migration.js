var Migrations = artifacts.require("./Crowdsale.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations,"0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0",10,10,1000,"0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0");
};
