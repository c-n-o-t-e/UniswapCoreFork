async function main() {
  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy('0x2AF142784eD8f0ED17101bb091D58519560825e3');

  console.log("UniswapV2Factory deployed to:", uniswapV2Factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

