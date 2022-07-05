import { ethers } from "hardhat";

async function main() {
  const EthWallet = await ethers.getContractFactory("EthWallet");
  const ethWallet = await EthWallet.deploy("Hello, Hardhat!");

  await ethWallet.deployed();

  console.log("Contract deployed to:", ethWallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
