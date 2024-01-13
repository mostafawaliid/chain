const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const Storage = artifacts.require("Storage");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, Storage);
  deployer.deploy(MetaCoin);
  deployer.deploy(Storage);
};
