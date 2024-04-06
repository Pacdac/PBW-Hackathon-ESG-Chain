/*
This contract allows whitelisted enterprises to put data on the contract for environmental, 
social and governance. The contract has a function to calculate in real time the esg score 
of an enterprise, environmental should be 50% of the score, social 30% and governance 20%.

You can use the `calculateESGScore` function to calculate the ESG score for an enterprise, 
it will return the score based on the data provided and the weightage given to each parameter.

*/

pragma solidity ^0.8.0;

contract ESGScore {

    // Mapping of enterprise addresses to their ESG scores
    mapping(address => uint256) public esgScores;

    // Whitelisted enterprises
    address[] public whitelistedEnterprises;

    // Data for each enterprise
    struct EnterpriseData {
        uint256 E1_score; // Carbon Emissions score (0-10)
        uint256 E2_score; // Energy Efficiency score (0-10)
        uint256 E3_score; // Waste Management score (0-10)
        uint256 S1_score; // Employee Turnover score (0-10)
        uint256 S2_score; // Employee Safety score (0-10)
        uint256 S3_score; // Community Engagement score (0-10)
        uint256 G1_score; // Board Diversity score (0-10)
        uint256 G2_score; // Executive Compensation score (0-10)
        uint256 G3_score; // Transparency score (0-10)
    }
    mapping(address => EnterpriseData) public enterpriseData;

    // Weights for each parameter
    uint256 public E1_weight;
    uint256 public E2_weight;
    uint256 public E3_weight;
    uint256 public S1_weight;
    uint256 public S2_weight;
    uint256 public S3_weight;
    uint256 public G1_weight;
    uint256 public G2_weight;
    uint256 public G3_weight;

    // Add an enterprise to the whitelist
    function addWhitelistedEnterprise(address enterprise) public {
        whitelistedEnterprises.push(enterprise);
    }

    // Set the data for an enterprise
    function setEnterpriseData(address enterprise, uint256 E1_score, uint256 E2_score, uint256 E3_score, uint256 S1_score, uint256 S2_score, uint256 S3_score, uint256 G1_score, uint256 G2_score, uint256 G3_score) public {
        require(isWhitelisted(enterprise), "Enterprise is not whitelisted");
        enterpriseData[enterprise] = EnterpriseData(E1_score, E2_score, E3_score, S1_score, S2_score, S3_score, G1_score, G2_score, G3_score);
    }

    // Check if an enterprise is whitelisted
    function isWhitelisted(address enterprise) public view returns (bool) {
        for (uint256 i = 0; i < whitelistedEnterprises.length; i++) {
            if (whitelistedEnterprises[i] == enterprise) {
                return true;
            }
        }
        return false;
    }

    // Calculate the ESG score for an enterprise
    function calculateESGScore(address enterprise) public view returns (uint256) {
        require(isWhitelisted(enterprise), "Enterprise is not whitelisted");
        EnterpriseData memory data = enterpriseData[enterprise];
        uint256 E_score = (E1_weight * data.E1_score + E2_weight * data.E2_score + E3_weight * data.E3_score) / (E1_weight + E2_weight + E3_weight);
        uint256 S_score = (S1_weight * data.S1_score + S2_weight * data.S2_score + S3_weight * data.S3_score) / (S1_weight + S2_weight + S3_weight);
        uint256 G_score = (G1_weight * data.G1_score + G2_weight * data.G2_score + G3_weight * data.G3_score) / (G1_weight + G2_weight + G3_weight);
        uint256 E_weight = 50;
        uint256 S_weight = 30;
        uint256 G_weight = 20;
        uint256 score = (E_weight * E_score + S_weight * S_score + G_weight * G_score) / (E_weight + S_weight + G_weight);
        return score;
    }  
}
