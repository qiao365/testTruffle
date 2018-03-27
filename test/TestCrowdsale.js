var Crowdsale = artifacts.require("../contracts/Crowdsale.sol");

contract('Crowdsale', function(accounts) {

  it("获取 beneficiary 地址 一致", function() {
    return Crowdsale.deployed("0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0",10,0,1000,"0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0")
    .then(function(instance) {
      console.log(instance);
      return instance.beneficiary.call();
    }).then(function(beneficiary) {
      console.log(beneficiary);
      assert.equal(beneficiary, "0x8cdaf0cd259887258bc13a92c0a6da92698644c0", "beneficiary error");
    });
  });
  it("owner checkout true",function(){
    return Crowdsale.deployed("0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0",10,0,1000,"0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0")
    .then(function(instance) {
      instance.ownerCheckGoalIfReached(true,{from: accounts[0]});
      assert.equal(false, instance.ownerCheckGoalReached.call(), "owner checkout true");
    });
  });
});