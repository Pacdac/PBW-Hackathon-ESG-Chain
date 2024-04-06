// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
This contract allows whitelisted enterprises to put data on the contract for environmental, 
social and governance. The contract has a function to calculate in real time the esg score 
of an enterprise, environmental should be 50% of the score, social 30% and governance 20%.

You can use the `computeESGScore` function to calculate the ESG score for an enterprise, 
it will return the score based on the data provided and the weightage given to each parameter.

*/

import "./Ownable.sol";

contract ESGChain is Ownable {

    // Data for each enterprise
    struct EnterpriseData {
        uint256 esg_score; // Overall ESG score (0-100)
        uint256 timestamp; // Timestamp of the data
        uint256 e1_score; // Carbon Emissions score (0-10)
        uint256 e2_score; // Energy Efficiency score (0-10)
        uint256 e3_score; // Waste Management score (0-10)
        uint256 s1_score; // Employee Turnover score (0-10)
        uint256 s2_score; // Employee Safety score (0-10)
        uint256 s3_score; // Community Engagement score (0-10)
        uint256 g1_score; // Board Diversity score (0-10)
        uint256 g2_score; // Executive Compensation score (0-10)
        uint256 g1_score3_score; // Transparency score (0-10)
    }

    struct EnterpriseMetaData {
        string name; // Name of the enterprise
        string symbol; // Symbol of the enterprise
    }

    struct EnterpriseInputData {
        uint256 e1_score; // Carbon Emissions score (0-10)
        uint256 e2_score; // Energy Efficiency score (0-10)
        uint256 e3_score; // Waste Management score (0-10)
        uint256 s1_score; // Employee Turnover score (0-10)
        uint256 s2_score; // Employee Safety score (0-10)
        uint256 s3_score; // Community Engagement score (0-10)
        uint256 g1_score; // Board Diversity score (0-10)
        uint256 g2_score; // Executive Compensation score (0-10)
        uint256 g3_score; // Transparency score (0-10)
    }
    // Whitelisted enterprises
    mapping(address => bool) public whitelistedEnterprises;

    // Mapping to store the data for each enterprise
    mapping(address => EnterpriseData[]) public enterpriseData;

    // Mapping to store the metadata for each enterprise
    mapping(address => EnterpriseMetaData) public enterpriseMetaData;

    // Event to log enterprise data
    event EnterpriseDataUpdated(
        address enterprise,
        uint256 esg_score,
        uint256 e1_score,
        uint256 e2_score,
        uint256 e3_score,
        uint256 s1_score,
        uint256 s2_score,
        uint256 s3_score,
        uint256 g1_score,
        uint256 g2_score,
        uint256 g1_score3_score
    );

    // Weights for each parameter
    uint256 public e1_weight;
    uint256 public e2_weight;
    uint256 public e3_weight;
    uint256 public s1_weight;
    uint256 public s2_weight;
    uint256 public s3_weight;
    uint256 public g1_weight;
    uint256 public g2_weight;
    uint256 public g3_weight;

    // Initialize the contract
    constructor() Ownable(msg.sender) {
        e1_weight = 20;
        e2_weight = 15;
        e3_weight = 10;
        s1_weight = 15;
        s2_weight = 15;
        s3_weight = 10;
        g1_weight = 15;
        g2_weight = 10;
        g3_weight = 10;
    }

    // Add an enterprise to the whitelist
    function manageEnterpriseWhitelist(
        address[] memory enterprises,
        bool[] memory whitelisted
    ) public onlyOwner {
        require(enterprises.length == whitelisted.length, "Invalid input");
        for (uint256 i = 0; i < enterprises.length; i++) {
            whitelistedEnterprises[enterprises[i]] = whitelisted[i];
        }
    }

    // Add the data for an enterprise
    function addEnterpriseData(
        address enterprise,
        string memory name,
        string memory symbol,
        EnterpriseInputData memory inputData
    ) public payable onlyOwner {
        require(isWhitelisted(enterprise), "Enterprise is not whitelisted");
        require(msg.value == 10 ether, "Value should be 10 ether to add data");
        // Calculate the ESG score
        uint256 esg_score = computeESGScore(
            inputData.e1_score,
            inputData.e2_score,
            inputData.e3_score,
            inputData.s1_score,
            inputData.s2_score,
            inputData.s3_score,
            inputData.g1_score,
            inputData.g2_score,
            inputData.g3_score
        );
        uint256 timestamp = block.timestamp;

        // Add the metadata if it is not set already
        bytes memory nameBytes = bytes(name);
        if (nameBytes.length == 0) {
            enterpriseMetaData[enterprise].name = name;
            enterpriseMetaData[enterprise].symbol = symbol;
        }

        enterpriseData[enterprise].push() = EnterpriseData(
            esg_score,
            timestamp,
            inputData.e1_score,
            inputData.e2_score,
            inputData.e3_score,
            inputData.s1_score,
            inputData.s2_score,
            inputData.s3_score,
            inputData.g1_score,
            inputData.g2_score,
            inputData.g3_score
        );

        emit EnterpriseDataUpdated(
            enterprise,
            esg_score,
            inputData.e1_score,
            inputData.e2_score,
            inputData.e3_score,
            inputData.s1_score,
            inputData.s2_score,
            inputData.s3_score,
            inputData.g1_score,
            inputData.g2_score,
            inputData.g3_score
        );
    }

    // Check if an enterprise is whitelisted
    function isWhitelisted(address enterprise) public view returns (bool) {
        return whitelistedEnterprises[enterprise];
    }

    // Set the weights for each parameter
    function setWeights(
        uint256 e1,
        uint256 e2,
        uint256 e3,
        uint256 s1,
        uint256 s2,
        uint256 s3,
        uint256 g1,
        uint256 g2,
        uint256 g3
    ) public onlyOwner {
        e1_weight = e1;
        e2_weight = e2;
        e3_weight = e3;
        s1_weight = s1;
        s2_weight = s2;
        s3_weight = s3;
        g1_weight = g1;
        g2_weight = g2;
        g3_weight = g3;
    }

    function computeESGScore(
        uint256 e1,
        uint256 e2,
        uint256 e3,
        uint256 s1,
        uint256 s2,
        uint256 s3,
        uint256 g1,
        uint256 g2,
        uint256 g3
    ) public view returns (uint256) {
        uint256 e_score = (e1_weight * e1 + e2_weight * e2 + e3_weight * e3) /
            (e1_weight + e2_weight + e3_weight);
        uint256 s_score = (s1_weight * s1 + s2_weight * s2 + s3_weight * s3) /
            (s1_weight + s2_weight + s3_weight);
        uint256 g_score = (g1_weight * g1 + g2_weight * g2 + g3_weight * g3) /
            (g1_weight + g2_weight + g3_weight);
        return e_score + s_score + g_score;
    }

}
