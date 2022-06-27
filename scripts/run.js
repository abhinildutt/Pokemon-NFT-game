
const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Raichu", "Charizard", "Venasaur"],       // Names
      ["https://static.pokemonpets.com/images/monsters-images-300-300/26-Raichu.webp", // Images
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Pokémon_Charizard_art.png", 
      "https://static.pokemonpets.com/images/monsters-images-300-300/8003-Mega-Venusaur.webp"],
      [100, 80, 300],                    // HP values
      [100, 120, 25]             
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };  
runMain();