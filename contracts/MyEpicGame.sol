pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MyEpicGame {
    struct CharacterAttributes {
        uint characterIndex;
        string name;
        string imageURI;
        uint hp;
        uint maxHp;
        uint attackDamage;
    }

    CharacterAttributes[] defaultCharacters;

    constructor(
        string[] memory characterNames,
        string[] memory characterImageURIs,
        uint[] memory characterHp,
        uint[] memory characterAttackDmg
    )
}