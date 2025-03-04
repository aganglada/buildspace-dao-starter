import sdk from './1-initialize-sdk.js'

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xbfBCccB8BB6a4Fe3D42C5437AC73962825A59E16')

;(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'TacoDAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'TACO',
    })
    console.log(
      '✅ Successfully deployed token module, address:',
      tokenModule.address
    )
  } catch (error) {
    console.error('failed to deploy token module', error)
  }
})()
