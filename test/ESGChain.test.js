// Test file for ESGChain.sol
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe('ESGChain', function () {

    let ESGChain;
    let esgChain;
    let owner;
    let addr1;
    let addr2;
    let addrs;
    
    beforeEach(async function () {
        ESGChain = await ethers.getContractFactory('ESGChain');
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        esgChain = await ESGChain.deploy();
        await esgChain.waitForDeployment();
    });
    
    describe('Deployment', function () {
        it('Should set the right owner', async function () {
        expect(await esgChain.owner()).to.equal(owner.address);
        });
    });

});