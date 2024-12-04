import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

async function main() {
    // Get the signers
    const [deployer, beneficiary] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // ********** Token Deployment ****
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy("DLT Token", "DLT");

    await token.deployed(); // Change to `deployed()` for consistency with ethers.js

    console.log("Token deployed to:", token.address); // Use `token.address`

    // ********** TokenVesting Deployment ****
    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    const tokenVesting = await TokenVesting.deploy(token.address); // Use `token.address`

    await tokenVesting.deployed(); // Change to `deployed()`
    console.log("TokenVesting deployed to:", tokenVesting.address); // Use `tokenVesting.address`

    console.log('********** Add Beneficiary ****');
    console.log("Adding beneficiary:", beneficiary.address);

    const startTime = Math.floor(Date.now() / 1000) + 60; // Start in 60 seconds
    const duration = 365 * 24 * 60 * 60; // 1 year
    const totalAmount = ethers.utils.parseEther("10000"); // Use ethers.utils to parse Ether

    const tx = await tokenVesting.addBeneficiary(
        beneficiary.address,
        startTime,
        duration,
        totalAmount
    );
    await tx.wait();
    console.log("Beneficiary added successfully");

    console.log('********** Adding More Time ****');

    const timeAdded = startTime + duration;
    await time.increaseTo(timeAdded); 

    console.log("Time Added successfully");

    console.log('#### Claim vested tokens for the beneficiary #####');

    // Uncomment the following lines to claim tokens
    // const claimTx = await tokenVesting.connect(beneficiary).claimTokens();
    // await claimTx.wait();
    // console.log("Vested tokens claimed successfully");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
